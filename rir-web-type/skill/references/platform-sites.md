# PLATFORM Sites — Category Profile

**The website IS a software product.** Users return daily to do real work, consume content, or interact with each other. This is a product, not a website — it needs ongoing engineering, monitoring, product thinking, and often a separate business model.

**Core principle:** Think in systems, not pages. Build the core loop first (sign up → do the one key action → see value), validate it, then add billing, teams, and settings. Set up monitoring BEFORE launch — you fly blind without it. Secure every database table with Row Level Security from day one.

**Free MCPs/services for this category:** Base four (Context7, Playwright, GitHub, Vercel) + **Supabase MCP** (database + auth + realtime + storage) + **Stripe** (subscription billing) + **Sentry MCP** (error monitoring, free tier) + **Resend** (transactional email) + **Mux/Cloudinary** (media, for social/news). All have free tiers.

**Build complexity:** Enterprise · **Timeline:** 3 months – 2 years · **Price band:** $15,000 – $150,000+ (or equity).

**Architecture (shared):** Sophisticated full-stack + multiple services, real-time (WebSockets / Supabase Realtime / Pusher), role-based access control, background jobs, CDN media delivery, monitoring + alerting from day one, and a CI/CD pipeline.

---

## 1. SaaS / Web Application
**Goal:** Deliver a software product in the browser — accounts, data, subscriptions, multi-user.
**Sections:** Marketing site (separate, public) → Auth pages (signup, login, forgot, magic link, OAuth) → Onboarding flow → Dashboard/home (data, activity, KPIs) → Core feature pages (tables, editors, canvases) → Settings/account → Team/members (invite, roles, permissions) → Billing (plan, upgrade, invoices) → Notifications (in-app + email) → Internal admin panel.
**Stack:** Next.js App Router + Supabase + Stripe + Sentry + Resend. (React + Node + PostgreSQL, or Next + Prisma + PlanetScale are alternatives.)
**Conversion focus:** Build the core loop first: sign up → do the one key action → see value. Everything else comes after you validate it. A strong onboarding flow drives activation more than any feature.
**Critical features:** Auth + sessions, RBAC, real-time data, Stripe billing + webhooks, transactional email, file upload, search, audit logs, 2FA, user-facing API/webhooks, rate limiting, error monitoring.

## 2. Community / Social Platform
**Goal:** Connect users around shared interests. Users create content, follow each other, interact in real time. The network of people IS the product.
**Sections:** Auth + onboarding (profile, interests, follow suggestions) → User profiles (avatar, bio, stats, content) → Home feed (algorithmic/chronological, infinite scroll) → Create/post (rich editor, media upload, drafts) → Comment threads → Reactions/likes (optimistic UI) → Follow system → Direct messages (real-time, read receipts) → Notifications centre → Groups/spaces → Moderation tools → Search & discovery.
**Stack:** Next.js + Supabase Realtime + PostgreSQL. (React + Node + Socket.io + MongoDB, or Next + Pusher + Prisma are alternatives.) React Native if mobile-first.
**Conversion focus:** Solve the cold-start problem before building — a platform with no users is worthless. Bring 100 users who'll post on day one, or it feels empty forever. Real-time responsiveness and moderation are essential, not optional.
**Critical features:** Real-time feeds, media upload to cloud storage, push notifications, moderation pipeline, spam detection, privacy controls, block/mute/report, feed algorithm, email digests, OAuth, 2FA.

## 3. News / Media at Scale
**Goal:** Publish large volumes of editorial content from many writers across many categories. Performance, SEO, and editorial workflow are the concerns at scale.
**Sections:** Homepage (featured hero, trending, latest grid, category tabs) → Category/section pages → Article page (headline, byline, date, read time, body, author, share, ads) → Author profiles → Live blog/breaking news (auto-refresh) → Video/multimedia → Newsletter signup → Full-text search → Editorial CMS (write, edit, schedule, approve) → Advertising/sponsorship slots.
**Stack:** Next.js + Sanity (most scalable). WordPress, Drupal, Ghost, or Contentful are alternatives by scale. Algolia for search.
**Conversion focus:** Performance is non-negotiable — a 5-second load loses the reader to the next tab. Use static generation + aggressive caching. "Conversion" = subscription, newsletter signup, or return visit.
**Critical features:** Multi-author CMS with editorial workflow, role-based access, scheduling/drafts, infinite scroll/pagination, full-text search, RSS, Open Graph, paywall (optional), comment moderation, breaking-news push.

---

## Platform Quality Floor
Sentry error monitoring live before launch · Row Level Security on every table · a real onboarding flow · Stripe subscription webhooks handled (created, updated, deleted, payment_failed) · database indexes on every list/search query · a user support channel.

## Platform Common Mistakes
Treating it like a fixed-deadline website · no monitoring before launch · too many features before validating the core loop · ignoring the cold-start problem (social) · no onboarding flow · skipping Row Level Security so users see each other's data.

## Important framing
Platform sites require **product thinking, not just engineering**: validate before building, measure after. They are never "done" — they evolve in sprints based on usage. Be honest with the client that this is an ongoing product, not a one-time deliverable.
