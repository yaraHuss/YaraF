import http from 'node:http'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function loadEnv() {
  const envFiles = ['.env.local', '.env']
  const env = {}

  for (const file of envFiles) {
    try {
      const content = readFileSync(path.join(__dirname, file), 'utf8')
      for (const line of content.split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
        if (match) {
          env[match[1]] = match[2].replace(/^['"]|['"]$/g, '')
        }
      }
    } catch {
      // ignore missing files
    }
  }

  return env
}

const env = loadEnv()
const PORT = Number(process.env.PORT || env.PORT || 3001)
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID || env.ZOHO_CLIENT_ID
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET || env.ZOHO_CLIENT_SECRET
const ZOHO_SCOPE = process.env.ZOHO_SCOPE || env.ZOHO_SCOPE || 'ZohoCRM.modules.ALL'
const ZOHO_ACCOUNT_URL = process.env.ZOHO_ACCOUNT_URL || env.ZOHO_ACCOUNT_URL || 'https://accounts.zoho.com'
const ZOHO_REDIRECT_URI = process.env.ZOHO_REDIRECT_URI || env.ZOHO_REDIRECT_URI || `http://localhost:${PORT}/oauth/callback`
const ZOHO_TOKEN_STORE_PATH = process.env.ZOHO_REFRESH_TOKEN_PATH || env.ZOHO_REFRESH_TOKEN_PATH || path.join(__dirname, '.zoho-tokens.json')

let tokenStore = readTokenStore()

function readTokenStore() {
  if (!existsSync(ZOHO_TOKEN_STORE_PATH)) {
    return {
      accessToken: '',
      refreshToken: process.env.ZOHO_REFRESH_TOKEN || env.ZOHO_REFRESH_TOKEN || '',
      expiresAt: 0,
    }
  }

  try {
    return JSON.parse(readFileSync(ZOHO_TOKEN_STORE_PATH, 'utf8'))
  } catch {
    return {
      accessToken: '',
      refreshToken: process.env.ZOHO_REFRESH_TOKEN || env.ZOHO_REFRESH_TOKEN || '',
      expiresAt: 0,
    }
  }
}

function persistTokenStore() {
  mkdirSync(path.dirname(ZOHO_TOKEN_STORE_PATH), { recursive: true })
  writeFileSync(ZOHO_TOKEN_STORE_PATH, JSON.stringify(tokenStore, null, 2))
}

function buildAuthorizationUrl() {
  const params = new URLSearchParams({
    scope: ZOHO_SCOPE,
    client_id: ZOHO_CLIENT_ID || '',
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
    redirect_uri: ZOHO_REDIRECT_URI,
  })

  return `${ZOHO_ACCOUNT_URL}/oauth/v2/auth?${params.toString()}`
}

async function exchangeCodeForTokens(code) {
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
    throw new Error('Zoho client credentials are not configured')
  }

  const response = await fetch(`${ZOHO_ACCOUNT_URL}/oauth/v2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      redirect_uri: ZOHO_REDIRECT_URI,
      code,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Zoho token exchange failed: ${response.status} ${text}`)
  }

  const data = await response.json()

  tokenStore = {
    ...tokenStore,
    accessToken: data.access_token || '',
    refreshToken: data.refresh_token || tokenStore.refreshToken || '',
    expiresAt: Date.now() + Math.max((Number(data.expires_in) || 3600) - 60, 60) * 1000,
  }

  persistTokenStore()
  return tokenStore.accessToken
}

async function refreshZohoAccessToken() {
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
    throw new Error('Zoho client credentials are not configured')
  }

  const refreshToken = tokenStore.refreshToken || process.env.ZOHO_REFRESH_TOKEN || env.ZOHO_REFRESH_TOKEN
  if (!refreshToken) {
    throw new Error('No Zoho refresh token found. Visit /oauth/authorize to connect your account.')
  }

  const response = await fetch(`${ZOHO_ACCOUNT_URL}/oauth/v2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      refresh_token: refreshToken,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Zoho token refresh failed: ${response.status} ${text}`)
  }

  const data = await response.json()

  tokenStore = {
    ...tokenStore,
    accessToken: data.access_token || '',
    refreshToken: data.refresh_token || refreshToken,
    expiresAt: Date.now() + Math.max((Number(data.expires_in) || 3600) - 60, 60) * 1000,
  }

  persistTokenStore()
  return tokenStore.accessToken
}

async function getZohoAccessToken() {
  if (tokenStore.accessToken && tokenStore.expiresAt > Date.now()) {
    return tokenStore.accessToken
  }

  return refreshZohoAccessToken()
}

async function createZohoLead(payload) {
  const token = await getZohoAccessToken()

  const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          Last_Name: payload.name || 'Unknown',
          Company: payload.company || 'N/A',
          Email: payload.email,
          Phone: payload.phone,
          Description: [
            `Service: ${payload.service}`,
            '',
            payload.message,
          ].join('\n'),
          Lead_Source: 'Website',
        },
      ],
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Zoho CRM insert failed: ${response.status} ${text}`)
  }

  return response.json()
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`)

  if (req.method === 'GET' && url.pathname === '/oauth/authorize') {
    if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Zoho client credentials are not configured' }))
      return
    }

    res.writeHead(302, { Location: buildAuthorizationUrl() })
    res.end()
    return
  }

  if (req.method === 'GET' && url.pathname === '/oauth/callback') {
    const code = url.searchParams.get('code')
    if (!code) {
      res.writeHead(400, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Missing OAuth code' }))
      return
    }

    try {
      await exchangeCodeForTokens(code)
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end('<h1>Zoho CRM connected</h1><p>The refresh token has been saved securely and future lead submissions will use it automatically.</p>')
    } catch (error) {
      console.error(error)
      res.writeHead(502, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: error.message || 'Zoho OAuth callback failed' }))
    }

    return
  }

  if (req.method === 'POST' && url.pathname === '/api/leads') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}')
        if (!payload.email) {
          res.writeHead(400, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Email is required' }))
          return
        }

        const result = await createZohoLead(payload)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: true, result }))
      } catch (error) {
        console.error(error)
        res.writeHead(502, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: error.message || 'Failed to submit lead' }))
      }
    })

    return
  }

  res.writeHead(404, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ error: 'Not found' }))
})

server.listen(PORT, () => {
  console.log(`Zoho CRM proxy listening on http://localhost:${PORT}`)
})
