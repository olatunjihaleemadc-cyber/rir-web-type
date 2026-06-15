# PRESENCE Sites — Category Profile

**The website IS the message.** Pure communication — inform, attract, impress, convert. No accounts, no transactions, no software. The work lives in design, copy, speed, SEO, and conversion.

**Core principle:** Don't over-engineer. No backend server, no database, no auth unless explicitly required. Default = static/SSR pages on a CDN edge + optional CMS + a contact form wired to an email service + SEO from the first commit.

**Free MCPs/services for this category:** Base four (Context7, Playwright, GitHub, Vercel) + **Resend** (form email) + **Sanity** (free CMS, for corporate/blog) + **Plausible or Vercel Analytics**.

**Build complexity:** Low → Mid · **Timeline:** 3 days – 4 weeks · **Price band:** $500 – $8,000.

---

## 1. Landing Page
**Goal:** Convert one visitor type into a lead/signup/buyer. One page, one CTA.
**Sections:** Minimal header (logo + 1 CTA) → Hero (headline, subhead, CTA, visual) → Social proof bar → Features/benefits (3–6) → How it works (2–4 steps) → Testimonials → Pricing (only if purchase) → FAQ → Final CTA → Minimal footer.
**Stack:** Next.js or Astro + Tailwind + Framer Motion. Static, no CMS.
**Conversion focus:** Everything serves ONE action. Repeat CTA top + bottom. Countdown for launches. A/B-test the headline.
**Leave out:** Multi-page nav, auth, database, CMS, blog.

## 2. Corporate / Business Site
**Goal:** Establish company credibility and explain services across pages.
**Sections:** Sticky navbar → Homepage hero (brand statement, 2 CTAs) → About (story, mission, timeline) → Services (card or sub-page each) → Team grid → Portfolio/case studies → Testimonials → Blog (optional, SEO) → Contact (form, phone, map, hours) → Full footer.
**Stack:** Next.js + Sanity/Contentful CMS. WordPress or Webflow valid no-code alternatives.
**Conversion focus:** Trust first, then enquiry. Strong copy beats pretty design. Make the contact path obvious from every page; case studies + testimonials carry credibility.
**Leave out:** Auth, payments, real-time (usually).

## 3. Portfolio / Personal Brand
**Goal:** Showcase creative work to win clients/jobs. The site itself is a work sample.
**Sections:** Minimal navbar → Hero/intro (name, role, one punchy line) → Selected work grid (4–8) → Case study pages (context, process, role, outcome) → About → Skills/stack → Testimonials → Contact.
**Stack:** Next.js + Framer Motion (or Framer no-code). Three.js for 3D portfolios. Static.
**Conversion focus:** The design IS the pitch. Spend boldness here — one memorable signature element, smooth transitions, considered hover states. Make the work the hero.
**Leave out:** CMS (static fine), database, auth, payment.

## 4. Blog / Editorial / Content
**Goal:** Publish articles consistently to build audience + SEO traffic.
**Sections:** Header (logo, category nav, search) → Homepage feed (featured + recent grid) → Category pages → Article page (title, author, date, read time, TOC, body, share) → Author bio → Related posts → Newsletter signup → Search → Tags page → Comments (optional embed).
**Stack:** **Astro + Markdown** (fastest, best SEO). Next.js + Sanity, Ghost, or WordPress are alternatives. CMS strongly recommended.
**Conversion focus:** Site speed is a ranking factor — static generation. "Conversion" = newsletter signup or return visit. Reading experience keeps people on-site.
**Leave out:** Auth (unless members), payment (unless paid newsletter), real-time.

## 5. Government / Institutional
**Goal:** Serve the public with accurate info + accessible forms. Compliance is legal, not optional.
**Sections:** Accessibility-first navbar → Service directory (searchable) → Service/info pages (plain language) → Multi-step forms (save & continue) → Document/download library → News & announcements → Site-wide search → FAQ/help → Contact directory → Multi-language.
**Stack:** Next.js (JAMstack) or Drupal/GovCMS. Accessibility plugins mandatory.
**Conversion focus:** "Conversion" = task completion (find info / submit form). Plain language and findability beat aesthetics.
**Leave out:** Flashy animation, social features, e-commerce (usually).
**Non-negotiable:** WCAG 2.1 AA. Run WAVE checker + a screen reader before launch — failures are legal liabilities.

---

## Presence Quality Floor
Fast (90+ Lighthouse, sub-1.5s) · Clear in 5 seconds · One repeated primary CTA · Working form (email arrives) · SEO + Open Graph + sitemap · Responsive + reduced-motion · CMS wired in if the client edits content.

## Presence Common Mistakes
No CMS when content changes often · too many animations tanking Lighthouse · missing SEO · plain `mailto:` instead of a real form · competing CTAs · over-engineering with a database it never needed.
