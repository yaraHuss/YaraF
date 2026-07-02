# YARAF Digital — Website

Vite + React + TypeScript + Tailwind + Firebase. Mobile-first with an app-style bottom nav, full SEO meta, and three live integrations wired up (you just need to drop in credentials).

## What's already coded
- All 5 pages (Home, Services, Industries, Case Studies, Contact) + Privacy/Terms + 404
- Desktop top nav + mobile bottom nav (Instagram-style, fixed, active-state icons)
- Footer with auto-updating copyright year
- SEO: per-page title/description/canonical via `react-helmet-async`, Open Graph + Twitter cards, JSON-LD organization schema, `robots.txt`, `sitemap.xml`, `site.webmanifest`
- Lead/consultation form → writes to Firestore (`src/lib/leads.ts`)
- WhatsApp floating button → opens `wa.me` chat with a pre-filled message
- Calendly inline embed on the Contact page
- AI chatbot widget UI, wired to call a backend endpoint (a Firebase Cloud Function template is included in `/functions`) — this keeps your AI API key server-side instead of exposing it in the browser
- Firestore security rules (`firestore.rules`) — public can create leads, nobody can read/update/delete from the client

## What you need to fill in
1. Copy `.env.example` to `.env` and fill in:
   - Your Firebase project config (Firebase Console → Project Settings)
   - `VITE_WHATSAPP_NUMBER` (international format, no `+`)
   - `VITE_CALENDLY_URL` (your scheduling link)
   - `VITE_CHATBOT_ENDPOINT` (your deployed Cloud Function URL, once deployed)
2. Deploy the chatbot function:
   ```
   cd functions
   npm install
   firebase functions:secrets:set ANTHROPIC_API_KEY
   npm run deploy
   ```
3. Deploy Firestore rules: `firebase deploy --only firestore:rules`
4. Replace placeholder `og-image.jpg`, `favicon.png`, `apple-touch-icon.png`, `logo.png` in `/public`
5. Swap real company domain into `index.html` and `SEO.tsx` if `yarafdigital.com` isn't final
6. Replace placeholder case studies in `src/pages/CaseStudies.tsx` once you have real client results

## Local dev
```
npm install
npm run dev
```

## Using with Lovable
Either:
- Paste this whole project into Lovable and continue iterating visually there, or
- Use `lovable-prompt.md` (included alongside this project) as a from-scratch prompt if you'd rather have Lovable regenerate it in its own way.
