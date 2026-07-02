# Lovable Build Prompt — YARAF Digital

Build a production-quality marketing website for **YARAF Digital**, an AI automation and enterprise transformation company serving UAE, Saudi Arabia, and GCC businesses (engineering delivered from Pakistan).

## Stack
- Vite + React + TypeScript
- Tailwind CSS
- React Router for multi-page routing
- Firebase (Firestore for lead capture; Cloud Functions for a server-side AI chatbot proxy)
- react-helmet-async for per-page SEO

## Positioning
Position as an **"AI Automation & Enterprise Transformation Company"** — never as a software house, web dev shop, or generic IT provider. Premium enterprise tone throughout.

## Design direction
- Dark mode only. Palette: deep black/ink (#070A10), navy (#0E1626 / #131D33), electric blue (#2F6FED), cyan glow accent (#22D3EE), off-white text (#E9EDF5), muted slate for secondary text (#8B96AB).
- Typography: a geometric display face (e.g. Space Grotesk) for headings used sparingly, Inter for body text, a monospace face for small labels/eyebrows/stats.
- Aesthetic: glassmorphism cards, subtle gradients, soft cyan glow shadows, minimal motion (ambient pulsing nodes, animated dashed trace lines) — not flashy or robot/stock-photo imagery.
- Signature visual: an animated "workflow trace" graphic — connected nodes (Inbound Request → AI Agent → Workflow Engine → CRM/Data) joined by an animated dashed line — used in the hero and echoed subtly elsewhere as a motif for "automation."
- Fully responsive: desktop gets a fixed top navbar; **mobile gets a fixed bottom navigation bar styled like a native app (Instagram-style)** — icons + labels for Home, Services, Industries, Case Studies/Work, Contact, with an active-state glow on the current page. Respect safe-area insets on iOS.

## Pages
1. **Home** — hero (headline + subheadline + two CTAs + workflow trace visual), trust strip (UAE-based, AI-first infrastructure, enterprise-grade architecture, scalable cloud), services preview grid (4 of 6 services), "How We Work" 4-step process (Discover/Design/Build/Scale), AI demo teaser pointing at the live chatbot widget, final CTA section.
2. **Services** — all 6 services in full: AI Enterprise Automation, AI Customer Support Systems, Internal Business Platforms, AI Data & Analytics, WhatsApp AI Commerce, Dedicated AI Teams.
3. **Industries** — Real Estate, Logistics, Healthcare, Construction, Finance, each with a one-line description of the specific automation use case.
4. **Case Studies** — 3 proof-of-concept entries clearly labeled "Proof of Concept" until real client data exists (e.g. "Reduced response time by 85% with AI automation").
5. **Contact** — lead capture form (name, company, email, phone, service dropdown, message) that writes to Firestore `leads` collection, plus an embedded Calendly scheduler.
6. **Privacy / Terms** — placeholder legal pages.
7. **404** page.

## Global components
- **Navbar** (desktop): logo, nav links, "Book Free Consultation" CTA button. Becomes transparent at the top of the page, solid+blurred on scroll.
- **BottomNav** (mobile only, fixed, app-style): 5 icon+label tabs matching main nav routes.
- **Footer**: logo + tagline, sitemap links, contact links (WhatsApp, email), legal links, auto-updating copyright year, "UAE-based · Engineering hub in Pakistan."
- **Floating WhatsApp button**: bottom-right, opens `wa.me` with a pre-filled message.
- **Floating AI chatbot widget**: bottom-right (above WhatsApp button), opens a chat panel that calls a backend endpoint (Cloud Function) which proxies to an AI API — never call the AI API directly from the frontend.

## Functionality requirements (must be wired, not just visual)
- Lead form **saves to Firestore** with a timestamp and `status: "new"`, with client-side validation and success/error states. Firestore rules should allow public `create` only — no client read/update/delete.
- WhatsApp button uses an env-configurable phone number and pre-filled message.
- Calendly embed loads the official Calendly widget script and renders inline using an env-configurable scheduling URL.
- AI chatbot widget keeps a message history, shows loading/error states, and posts to an env-configurable endpoint; include a Firebase Cloud Function template that proxies to an AI provider using a secret-stored API key.
- All integration values (Firebase config, WhatsApp number, Calendly URL, chatbot endpoint) should be environment variables with a documented `.env.example`, not hardcoded.

## SEO requirements
- Per-page `<title>`, meta description, canonical URL via a reusable SEO component.
- Open Graph + Twitter card meta tags.
- JSON-LD Organization schema in `index.html`.
- `robots.txt` and `sitemap.xml` in `/public`.
- `site.webmanifest` for an app-like mobile experience.

## Accessibility & polish
- Visible keyboard focus states (cyan outline) on all interactive elements.
- Respect `prefers-reduced-motion`.
- Mobile-first responsive breakpoints throughout; bottom nav never overlaps content (add bottom padding/safe-area spacing to page and footer).
