# COMMERCE Sites — Category Profile

**The website processes something.** A transaction is the core user action — buy, book, enrol, or list. These are full-stack: frontend + backend API + database + payments + an admin dashboard for the business owner.

**Core principle:** Security and reliability beat aesthetics. **Never trust the client/frontend** — validate every price, total, and availability server-side. Never build your own card form; use the gateway's hosted checkout. Always handle async payment events via webhooks.

**Free MCPs/services for this category:** Base four (Context7, Playwright, GitHub, Vercel) + **Supabase MCP** (database + auth + storage, free tier) + **Stripe** or **Paystack** (payments; Paystack is ideal for Nigeria/NGN) + **Resend** (transactional email). All have free/test tiers.

**Build complexity:** Advanced · **Timeline:** 4 weeks – 4 months · **Price band:** $3,000 – $25,000+.

**Architecture (shared):** Full-stack with auth required (users transact), payment gateway with webhooks, a database for users/orders/products/bookings, transactional email, and an admin dashboard the owner uses to run operations.

---

## 1. E-commerce / Online Store
**Goal:** Sell physical or digital products. Every feature reduces friction to purchase.
**Sections:** Navbar + live cart badge + search → Homepage/featured → Category pages (filter by price, size, colour, rating) → Product Detail Page (gallery, variants, price, reviews, add-to-cart, related) → Cart drawer/page → Checkout (shipping → delivery → payment → review → confirm) → Order confirmation + email → Account pages (login, order history, addresses, wishlist) → Search results → Admin dashboard (products, orders, inventory, shipping).
**Stack:** Next.js + Supabase + Stripe/Paystack + Resend. Shopify, WooCommerce, or Medusa.js (open-source headless) are alternatives.
**Conversion focus:** The checkout flow is where revenue is won or lost. Keep it under 3 steps. Every extra field or loading second costs sales. Optimise mobile checkout first.
**Critical features:** Payment gateway, inventory tracking, tax/shipping calc, order emails, reviews, promo codes, return flow, server-side price validation.

## 2. Booking / Reservation
**Goal:** Let customers schedule appointments/slots online without calling. Real-time availability is the core challenge.
**Sections:** Service/provider listings → Real-time availability calendar (greys out taken slots) → Booking flow (service → date/time → details → pay optional) → Confirmation + email (add-to-calendar, cancel link) → My bookings (cancel, reschedule, history) → Owner dashboard (all bookings, block time, staff, schedule) → Automated reminders → Post-visit review prompt.
**Stack:** Next.js + Supabase + Stripe/Paystack. **Cal.com** (open-source, self-host) for the availability engine. Twilio for SMS reminders.
**Conversion focus:** The availability engine is where teams get stuck — use Cal.com rather than building slot logic from scratch. Prevent double-booking at the database level.
**Critical features:** Real-time slots, double-booking prevention, calendar sync (Google/iCal), email + SMS confirmations, cancellation/reschedule policies, no-show handling, waitlist.

## 3. Marketplace / Directory
**Goal:** Aggregate listings from many providers and present them searchably to buyers. Revenue = commissions, listing fees, or subscriptions.
**Sections:** Homepage/search hero → Search results (filter by category, price, location, rating) → Listing detail (description, photos, provider, reviews, CTA) → Provider profile → Listing submission form → Reviews/ratings → Messaging/inquiry (without sharing emails) → Booking/purchase flow → Buyer & seller dashboards → Admin (approve listings, disputes, featured spots, fraud).
**Stack:** Next.js + Supabase + **Algolia** (free tier search) + **Stripe Connect** (multi-vendor payment splitting). Sharetribe is a purpose-built alternative.
**Conversion focus:** Two customers — buyers AND sellers. Solve supply first: onboard sellers (even manually) before building full self-service, or buyers find an empty site.
**Critical features:** Advanced/geo search, multi-vendor payment splitting, escrow/payouts, seller verification, review + dispute system, featured-listing ads.

## 4. Educational / eLearning
**Goal:** Deliver structured learning online — single courses or a full LMS. Progress tracking is core.
**Sections:** Course catalog (filter by topic, level, price) → Course detail (curriculum, instructor, preview, reviews, enrol) → Course player (video + curriculum nav + progress) → Quiz/assessment engine → Student dashboard (progress, deadlines, certificates) → Progress tracking + module unlocking → Certificate PDF generation → Instructor dashboard → Per-course Q&A → Billing/enrolment.
**Stack:** Next.js + Supabase + **Mux or Cloudinary** (video — free tiers) + Stripe/Paystack. Teachable/Thinkific (no-code) or Moodle (open-source LMS) are alternatives.
**Conversion focus:** Never host raw video yourself — use Mux/Cloudinary for adaptive streaming, thumbnails, and CDN delivery. Content drip and certificates drive completion.
**Critical features:** Video streaming, content drip, quiz scoring, per-user progress, certificate PDFs, payment + coupons, enrolment/access management, completion emails.

---

## Commerce Quality Floor
Working payment flow confirmed by webhook · admin dashboard the client can actually run · server-side validation on every transaction · confirmation emails that arrive · failed-payment handling · mobile-optimised critical path · SEO on public product/listing pages.

## Commerce Common Mistakes
Trusting prices from the frontend (security hole) · building a custom card form instead of hosted checkout · no admin panel · forgetting webhook handling for async payment events · not testing the full checkout on mobile before launch.
