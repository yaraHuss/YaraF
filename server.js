import http from 'node:http'
import { readFileSync } from 'node:fs'
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

async function getZohoAccessToken() {
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
    throw new Error('Zoho credentials are not configured')
  }

  const response = await fetch(`${ZOHO_ACCOUNT_URL}/oauth/v2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      scope: ZOHO_SCOPE,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Zoho auth failed: ${response.status} ${text}`)
  }

  const data = await response.json()
  return data.access_token
}

async function createZohoLead(payload) {
  const token = await getZohoAccessToken()

  const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${token}`,
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
  if (req.method === 'POST' && req.url === '/api/leads') {
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
