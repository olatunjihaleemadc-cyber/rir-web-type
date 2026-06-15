# MCP & Tooling Setup (All Free) — Per Category

Everything here is free. Install the **base four** on every project, then add the **category-specific** servers based on the classification from Steps 0–1.

---

## Step 1 — Foundations (install once)

- **Node.js v18+** — https://nodejs.org
- **Git** — https://git-scm.com
- **VS Code** — https://code.visualstudio.com

Install Claude Code:
```bash
npm install -g @anthropic-ai/claude-code
```
Free accounts: **GitHub** (https://github.com) · **Vercel** (https://vercel.com, free Hobby plan).

---

## Step 2 — Base MCP Servers (ALL categories)

### 1. Context7 — up-to-date framework docs (most important)
```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp
```
### 2. Playwright — browser automation for visual QA
```bash
claude mcp add playwright -- npx -y @playwright/mcp --headless
```
### 3. GitHub — version control
Create a free token: GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic) → `repo` scope.
```bash
claude mcp add github --transport http https://api.githubcopilot.com/mcp/ -e GITHUB_TOKEN=your_token_here
```
### 4. Vercel — one-command deployment (run inside project; type `/mcp` to auth)
```bash
claude mcp add --transport http vercel https://mcp.vercel.com
```
Verify: `claude mcp list`

---

## Step 3 — Category Add-On MCPs / Services (all have free tiers)

### PRESENCE sites — keep it lean
- **Resend** (https://resend.com) — contact-form email. Free tier.
- **Sanity** (https://sanity.io) — headless CMS for corporate/blog. Free tier.
- **Plausible** or **Vercel Analytics** — analytics. Free tiers.
- No database/auth MCP needed.

### COMMERCE sites — add data + payments
- **Supabase MCP** — database, auth, storage:
  ```bash
  claude mcp add supabase --transport http https://mcp.supabase.com/mcp
  ```
- **Payments:** Stripe (global) or **Paystack** (best for Nigeria/NGN). Use test keys while building.
- **Resend** — order/booking confirmation emails.
- **Algolia** (marketplace search) and **Cal.com** (booking engine, self-host) where relevant — free tiers.

### PLATFORM sites — add data + payments + monitoring
- **Supabase MCP** (database + auth + realtime + storage) — command above.
- **Stripe** — subscription billing + webhooks.
- **Sentry MCP** — error monitoring (set up BEFORE launch):
  ```bash
  claude mcp add sentry --transport http https://mcp.sentry.dev/mcp
  ```
- **Resend** — transactional email. **Mux / Cloudinary** — media for social/news. Free tiers.

---

## Step 4 — Scaffold per Category

**PRESENCE (landing, corporate, portfolio, institutional):**
```bash
npx create-next-app@latest my-site --typescript --tailwind --app
cd my-site && npm install framer-motion lucide-react && npx shadcn@latest init
```
**PRESENCE (content-heavy blog — Astro is faster for SEO):**
```bash
npm create astro@latest my-blog
cd my-blog && npx astro add tailwind
```
**COMMERCE / PLATFORM (full-stack):**
```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm install framer-motion lucide-react @supabase/supabase-js
npx shadcn@latest init
# add stripe (or paystack) when wiring payments:
npm install stripe
```

---

## Step 5 — CLAUDE.md Template

Drop a `CLAUDE.md` in the project root so Claude Code knows the classification and rules every session:

```markdown
# [SITE NAME]

## Classification
- Main category: PRESENCE | COMMERCE | PLATFORM
- Sub-category:
- Primary goal (the one action):

## Brand
- Name / tagline / vibe:
- Colors / typography:

## Stack
- Framework: Next.js App Router (or Astro for blogs)
- Styling: Tailwind CSS + shadcn/ui
- Animation: Framer Motion
- [Commerce/Platform] Data: Supabase | Payments: Stripe/Paystack | Email: Resend
- [Platform] Monitoring: Sentry

## Rules
- Mobile-first, responsive, respect prefers-reduced-motion
- 90+ Lighthouse on public pages
- SEO + Open Graph on every public page
- [Presence] Contact form via Resend (no plain mailto)
- [Commerce] Validate all prices/totals server-side; hosted checkout only; handle webhooks
- [Platform] Row Level Security on every table; Sentry live before launch; onboarding flow

## File Structure
/app  /components  /components/sections  /public
```

---

## Why each MCP matters
- **Context7** → generated code uses current APIs → works first try, less debugging.
- **Playwright** → Claude visually verifies design/animations → catches breaks before the client.
- **GitHub** → every step saved, safe to experiment and roll back.
- **Vercel** → deploy in one command, fetch build logs, attach domain.
- **Supabase** (commerce/platform) → database, auth, realtime without managing a server.
- **Sentry** (platform) → see real errors in production instead of flying blind.

Total cost: ₦0 / $0. Only the Claude Code subscription itself is paid.
