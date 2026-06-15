# rir-web-type

> A Claude Code skill that classifies any website request into **PRESENCE**, **COMMERCE**, or **PLATFORM**, produces a sitemap for your approval, then builds to the correct stack and conversion profile. Covers 12 sub-types.

[![npm version](https://img.shields.io/npm/v/rir-web-type.svg)](https://www.npmjs.com/package/rir-web-type)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Why classify first?

A presence site built like a SaaS app wastes months. A store built like a brochure can't take payments. **Classify first, build second** — the category determines the architecture, the stack, the free MCPs to install, and what "high-converting" even means for that site.

---

## Quick Start

Run this in your project directory (no install required):

```bash
npx rir-web-type
```

Claude Code will now automatically apply the skill whenever you describe a website you want to build.

---

## Install Options

### Per-project (recommended)
```bash
npx rir-web-type
```
Installs to `.claude/skills/rir-web-type/` and patches `CLAUDE.md`. Commit both to share the skill with your team.

### Global — every project on this machine
```bash
npx rir-web-type --global
```

### Via npm global CLI
```bash
npm install -g rir-web-type
rir-web-type             # project install
rir-web-type --global    # global install
```

### Uninstall
```bash
npx rir-web-type --uninstall
npx rir-web-type --uninstall --global
```

---

## What gets installed

```
.claude/
└── skills/
    └── rir-web-type/
        ├── SKILL.md                          ← main skill (Claude reads this)
        └── references/
            ├── presence-sites.md             ← 5 presence sub-types
            ├── commerce-sites.md             ← 4 commerce sub-types
            ├── platform-sites.md             ← 3 platform sub-types
            ├── mcp-setup.md                  ← per-category MCP install commands
            └── design-and-conversion.md      ← conversion principles (all types)

CLAUDE.md                                     ← patched with skill trigger + workflow
```

---

## Three Categories, 12 Sub-Types

### PRESENCE — the site IS the message
> Inform, attract, impress, convert. No accounts, no transactions.

| # | Sub-type | Stack | Timeline |
|---|----------|-------|----------|
| 1 | Landing Page | Next.js / Astro + Tailwind + Framer Motion | 3 days – 1 week |
| 2 | Corporate / Business | Next.js + Sanity/Contentful CMS | 2 – 4 weeks |
| 3 | Portfolio / Personal Brand | Next.js + Framer Motion | 1 – 2 weeks |
| 4 | Blog / Editorial | Astro + Markdown (best SEO) | 1 – 2 weeks |
| 5 | Government / Institutional | Next.js / Drupal, WCAG 2.1 AA | 4 – 8 weeks |

### COMMERCE — the site processes transactions
> Buy, book, enrol, or list. Full-stack: frontend + backend + payments + admin.

| # | Sub-type | Stack | Timeline |
|---|----------|-------|----------|
| 6 | E-commerce / Online Store | Next.js + Supabase + Stripe/Paystack | 4 – 10 weeks |
| 7 | Booking / Reservation | Next.js + Supabase + Cal.com | 3 – 8 weeks |
| 8 | Marketplace / Directory | Next.js + Supabase + Algolia + Stripe Connect | 8 – 16 weeks |
| 9 | Educational / eLearning | Next.js + Supabase + Mux/Cloudinary | 6 – 14 weeks |

### PLATFORM — the site IS the product
> Users return daily. Dashboards, real-time, subscriptions, feeds.

| # | Sub-type | Stack | Timeline |
|---|----------|-------|----------|
| 10 | SaaS / Web Application | Next.js + Supabase + Stripe + Sentry | 3 – 12 months |
| 11 | Community / Social | Next.js + Supabase Realtime + Pusher | 3 – 12 months |
| 12 | News / Media at Scale | Next.js + Sanity + Algolia | 2 – 6 months |

---

## The Skill Workflow

Every build follows these five steps:

**STEP 0 — Classify the main category** (PRESENCE / COMMERCE / PLATFORM)  
**STEP 1 — Classify the sub-category** and read its reference profile  
**STEP 2 — Produce a sitemap** — every page/route, sections, conversion goal per page — **presented for your approval before a single line of code is written**  
**STEP 3 — Install the correct free MCP servers** — base four (Context7, Playwright, GitHub, Vercel) + category add-ons (Supabase, Sentry, Stripe, etc.)  
**STEP 4 — Build to the profile** from the reference file  
**STEP 5 — Playwright screenshot QA → Lighthouse 90+ → Deploy via Vercel**  

---

## What "high-converting" means per category

- **PRESENCE** → visitor enquires, signs up, or downloads within 5 seconds of landing
- **COMMERCE** → a transaction completes end-to-end without friction (mobile checkout especially)
- **PLATFORM** → user signs up, reaches the core "aha" action, and returns

---

## Free MCPs included in the skill

**All projects:** Context7 · Playwright · GitHub · Vercel  
**Commerce adds:** Supabase MCP · Stripe or Paystack · Resend  
**Platform adds:** Supabase MCP · Stripe · Sentry MCP · Resend

Exact install commands are in `.claude/skills/rir-web-type/references/mcp-setup.md`.

---

## Requirements

- **Node.js v18+** (zero npm dependencies)
- **Claude Code** — `npm install -g @anthropic-ai/claude-code`

---

## License

MIT © YOUR_NAME
