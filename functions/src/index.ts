import admin from 'firebase-admin'
import { onCall, onRequest } from 'firebase-functions/v2/https'
import { defineSecret } from 'firebase-functions/params'

if (!admin.apps.length) {
  admin.initializeApp()
}

const db = admin.firestore()

// Set this with: firebase functions:secrets:set ANTHROPIC_API_KEY
const ANTHROPIC_API_KEY = defineSecret('ANTHROPIC_API_KEY')

const SYSTEM_PROMPT = `You are the AI assistant on YARAF Digital's website. YARAF Digital is an AI automation
and enterprise transformation company serving UAE, Saudi Arabia, and GCC businesses, with engineering delivery
from Pakistan. Services: AI enterprise automation, AI customer support systems, internal business platforms,
AI data & analytics, WhatsApp AI commerce, and dedicated AI teams (retainers). Be concise, helpful, and steer
serious leads toward booking a free consultation via the Contact page or WhatsApp.`

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID || '1000.RP3NV0KLTQTWIAVA2V1LC768UIQ78X'
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET || '85595c3d3343c3bc6cd035c484d68dd518d72228a2'
const ZOHO_REGION = (process.env.ZOHO_REGION || 'com').toLowerCase()
const ZOHO_TOKEN_URL = ZOHO_REGION === 'eu' ? 'https://accounts.zoho.eu/oauth/v2/token' : 'https://accounts.zoho.com/oauth/v2/token'

export const chat = onRequest(
  { secrets: [ANTHROPIC_API_KEY], cors: true },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method not allowed')
      return
    }

    try {
      const { messages } = req.body as { messages: { role: string; content: string }[] }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY.value(),
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 500,
          system: SYSTEM_PROMPT,
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await response.json()
      const reply = data?.content?.[0]?.text ?? "Sorry, I couldn't generate a response just now."

      res.json({ reply })
    } catch (err) {
      console.error(err)
      res.status(500).json({ reply: 'Something went wrong. Please try WhatsApp instead.' })
    }
  }
)

export const submitLead = onCall({ cors: true }, async (request) => {
  try {
    const payload = request.data as {
      name?: string
      company?: string
      email?: string
      phone?: string
      service?: string
      message?: string
    }

    const leadData = {
      name: payload.name ?? '',
      company: payload.company ?? '',
      email: payload.email ?? '',
      phone: payload.phone ?? '',
      service: payload.service ?? '',
      message: payload.message ?? '',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'new',
      source: 'website-contact-form',
    }

    await db.collection('leads').add(leadData)

    const [firstName, ...lastNameParts] = (leadData.name || 'Lead').split(' ')
    const lastName = lastNameParts.join(' ') || 'Client'

    const tokenRes = await fetch(ZOHO_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        scope: 'ZohoCRM.modules.ALL',
      }).toString(),
    })

    const tokenJson = (await tokenRes.json()) as { access_token?: string; error?: string }
    const accessToken = tokenJson.access_token

    if (!accessToken) {
      console.error('Zoho token error', tokenJson)
      return { ok: true, stored: true, zohoSynced: false, message: 'Lead stored locally.' }
    }

    const zohoRes = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          {
            First_Name: firstName,
            Last_Name: lastName,
            Company: leadData.company || 'YARAF Website Lead',
            Email: leadData.email,
            Phone: leadData.phone,
            Description: `${leadData.message}\n\nService: ${leadData.service}`,
            Lead_Source: 'Website Contact Form',
            Lead_Status: 'Not Contacted',
          },
        ],
      }),
    })

    const zohoJson = await zohoRes.json().catch(() => ({}))
    const zohoOk = zohoRes.ok && !zohoJson?.data?.[0]?.code

    return { ok: true, stored: true, zohoSynced: zohoOk, zoho: zohoJson }
  } catch (error) {
    console.error(error)
    return { ok: false, message: 'Unable to process contact request.' }
  }
})
