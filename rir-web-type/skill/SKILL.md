---
name: rir-web-type
description: "Build any high-converting website by first classifying it, then building to the right profile. Covers all three main website categories — PRESENCE sites (landing pages, corporate/business, portfolios, blogs, institutional), COMMERCE sites (e-commerce stores, booking/reservation, marketplaces/directories, eLearning), and PLATFORM sites (SaaS web apps, community/social, news/media at scale). Use this skill WHENEVER the user wants to build, design, scaffold, or plan ANY website or web product — a landing page, business site, portfolio, blog, online store, booking system, marketplace, course platform, SaaS app, social platform, or news site — even if they don't name the category. The skill first detects which MAIN category the request falls under, then which SUB-category applies, produces a sitemap for approval before any coding, then adapts structure, tech stack, and conversion strategy, and tells Claude Code which free MCP servers and packages to install for the best result in that category."
---

# RIR Web Type

Every website built for a client falls into one of **three main categories**, and each category has **sub-categories**. The single most important thing this skill does is **classify the request correctly first**, because the category determines the architecture, the stack, the free MCPs to install, and what "high-converting" even means for that site.

A presence site built like a SaaS app wastes months. A store built like a brochure can't take payments. **Classify first, build second.**

---

## STEP 0 — Detect the MAIN Category

Read the request and decide which of the three the site fundamentally is. Use the core question:

| Core question | Main category | Meaning |
|---|---|---|
| Is the website itself the **message**? (inform, attract, impress, convert — no transactions, no accounts) | **PRESENCE** | The site communicates. |
| Does the website **process a transaction**? (buy, book, enrol, list — money or commitments change hands) | **COMMERCE** | The site processes something. |
| Is the website a **software product** users return to repeatedly? (accounts, dashboards, real-time, feeds) | **PLATFORM** | The site IS the product. |

Quick signal words:
- **PRESENCE** → "landing page", "company website", "portfolio", "blog", "marketing site", "agency site", "personal brand", "about us", "showcase my work", "institutional", "NGO"
- **COMMERCE** → "online store", "sell products", "shopping cart", "checkout", "booking", "reservations", "appointments", "marketplace", "directory", "sell courses", "eLearning", "enrolment"
- **PLATFORM** → "SaaS", "web app", "dashboard", "user accounts", "subscriptions", "social network", "community", "feed", "real-time", "news site at scale", "publishing platform"

If it's genuinely ambiguous, ask ONE clarifying question to settle the main category, then state which one you've chosen before continuing.

---

## STEP 1 — Detect the SUB-Category

Once the main category is known, open the matching reference file and identify the exact sub-category. Each profile gives the section order, the right stack, the conversion focus, the free MCPs to install, and what to leave out.

### If PRESENCE → read `references/presence-sites.md`
Sub-categories:
1. **Landing Page** — one page, one CTA, one campaign
2. **Corporate / Business Site** — multi-page company credibility
3. **Portfolio / Personal Brand** — showcase creative work
4. **Blog / Editorial** — publish articles, grow SEO traffic
5. **Government / Institutional** — public info + forms, accessibility-first

### If COMMERCE → read `references/commerce-sites.md`
Sub-categories:
1. **E-commerce / Online Store** — products, cart, checkout, inventory
2. **Booking / Reservation** — real-time availability, appointments
3. **Marketplace / Directory** — multi-vendor listings, search, commissions
4. **Educational / eLearning** — courses, progress, certificates

### If PLATFORM → read `references/platform-sites.md`
Sub-categories:
1. **SaaS / Web Application** — software in the browser, dashboards, billing
2. **Community / Social Platform** — profiles, feeds, real-time interaction
3. **News / Media at Scale** — high-volume editorial publishing engine

State the detected main category AND sub-category to the user (e.g. "This is a COMMERCE site → E-commerce sub-category"), then move to the sitemap.

---

## STEP 2 — Produce the Site Map (BEFORE any code)

After classifying, and **before writing a single line of code**, produce a sitemap so the client can approve the structure first. This prevents building the wrong pages and is the cheapest moment to make changes.

Build the sitemap from the detected sub-category's profile (the section/page order in its reference file is the starting skeleton — adapt it to this specific brief).

The sitemap must show:
1. **Every page/route** the site needs, in a clear hierarchy (top-level pages and any sub-pages).
2. **The key sections within each page**, in order (e.g. Home → Hero, Social proof, Features, How it works, Testimonials, FAQ, Final CTA).
3. **The primary action** each page drives toward (the one conversion goal for that page).
4. **Data/dynamic notes** where relevant (e.g. "Product page — dynamic, one per product"; "Dashboard — auth-gated").

Present it as a readable tree. Example shape for a PRESENCE → Corporate site:

```
SITEMAP — [Site Name]  (PRESENCE → Corporate)

/ (Home)                  → goal: book a consultation
   Hero · Social proof · Services overview · Featured work · Testimonials · CTA
/about                    → goal: build trust
   Story · Mission & values · Team grid · Timeline
/services                 → goal: enquire
   Service cards → /services/[slug] (sub-page each)
/work                     → goal: prove credibility
   Case study grid → /work/[slug] (sub-page each)
/contact                  → goal: capture lead
   Contact form (→ Resend) · Map · Hours · Direct contacts
Footer (global)           → nav · social · legal · newsletter
```

For COMMERCE and PLATFORM sites, include dynamic routes (e.g. `/products/[id]`, `/checkout`, `/dashboard`, `/u/[username]`), auth-gated areas, and the admin panel.

**Pause here and ask the user to confirm or adjust the sitemap before building.** Once approved, the sitemap becomes the build plan and the basis for the route structure and the SEO sitemap.xml.

---

## STEP 3 — Install the Free Tooling for That Category

Read `references/mcp-setup.md`. It lists the four base free MCP servers used on **every** project, plus the **extra free MCPs and services each category needs**. Install before writing code — they directly raise output quality.

Base MCPs (all categories): **Context7**, **Playwright**, **GitHub**, **Vercel**.
Category add-ons (e.g. Supabase, Stripe/Paystack, Sentry) are listed per category in that file.

---

## STEP 4 — Build to the Profile

Each reference file contains the full build profile. Follow it — the approved sitemap from Step 2 is the page/route plan. Across all categories, hold these constants:

- **Mobile-first and responsive**, keyboard-accessible, respects `prefers-reduced-motion`.
- **One clear primary action** appropriate to the category (enquire / buy / book / sign up).
- **SEO + Open Graph metadata** on every public page.
- **Real working forms and flows** — never fake or placeholder the critical path.
- **Verify with the Playwright MCP** — screenshot the build and check it with fresh eyes.
- **90+ Lighthouse** on public-facing pages.

---

## STEP 5 — Verify, Then Deploy

- Screenshot each major section/screen with **Playwright**; fix layout breaks before the client sees them.
- Run **Lighthouse** on public pages; fix anything red.
- Test the category's critical path end-to-end: presence → form email arrives; commerce → a test transaction completes; platform → sign up + the core action works.
- Generate `sitemap.xml` (from the approved Step 2 sitemap), commit to **GitHub**, deploy via **Vercel**, attach the domain, and submit the sitemap to Google Search Console.

---

## Why classification matters (the cost of getting it wrong)

| Mistake | Consequence |
|---|---|
| Building COMMERCE as PRESENCE | No payments, no admin panel — the client can't actually sell. |
| Building PRESENCE as PLATFORM | Months wasted on auth and a database the site never needed. |
| Building PLATFORM as COMMERCE | No real-time, no monitoring — the product breaks under real users. |
| Skipping sub-category detection | A generic build that fits no specific use case well, low conversion. |

Always classify both levels before touching code.

---

## Reference Files

- **`references/presence-sites.md`** — The 5 presence sub-types: section order, stack, conversion focus, free MCPs, what to leave out.
- **`references/commerce-sites.md`** — The 4 commerce sub-types: full-stack architecture, payments, admin, free MCPs, common mistakes.
- **`references/platform-sites.md`** — The 3 platform sub-types: product architecture, real-time, monitoring, free MCPs, common mistakes.
- **`references/mcp-setup.md`** — Base + per-category free MCP/plugin install commands, the scaffold commands per category, and a `CLAUDE.md` template.
- **`references/design-and-conversion.md`** — Conversion anatomy, copywriting, and design principles that apply across all categories.
