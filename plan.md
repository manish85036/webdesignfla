# plan.md

## 1. Objectives
- Redesign **webdesignfla.com** into a modern, premium, high-trust agency site while **preserving 100% of original content**.
- Keep **all original routes/permalinks** for SEO parity:
  - `/`, `/web-design/`, `/seo/`, `/social/`, `/portfolio/`, `/privacy-policy/`
- Ensure **multi-page navigation** (not a single-page scroll site) and each route is directly accessible.
- Make phone the primary conversion path (**no contact forms**): `tel:+15614646222` across site.
- Deliver responsive, accessible UI with **deep navy + electric blue/cyan accents** and tasteful rich/subtle motion.
- Implement per-route SEO meta with React Helmet.

## 2. Implementation Steps

### Phase 1: Core Workflow Validation (POC — routing + SEO parity)
Goal: prove the most failure-prone requirement: **route parity + SEO metas + deployability**.
1. Scaffold repo: React (Vite) + Tailwind + shadcn/ui + React Router + Helmet + Framer Motion; FastAPI backend with `/health`.
2. Implement the 6 routes with placeholder sections and confirm:
   - Works with trailing slashes (`/seo/`) and without (`/seo`) via router/redirect strategy.
   - Each route sets unique `<title>` + meta description via Helmet.
3. Add shared layout: top nav + footer, with phone CTA visible.
4. Run quick web research for best practice on:
   - React Router trailing slash handling
   - SPA vs MPA SEO tradeoffs; ensure practical mitigation using Helmet + prerender strategy (if needed)
5. POC acceptance check:
   - Directly opening each URL renders correct page
   - Helmet tags change per route
   - `/api/health` returns OK

**Phase 1 user stories**
1. As a visitor, I can open `/seo/` directly and see the SEO page.
2. As a visitor, I can open `/portfolio/` directly and see the portfolio page.
3. As a mobile user, I can tap the phone CTA to call immediately.
4. As a search engine, I see a unique title/description for each route.
5. As an operator, I can hit `/api/health` to confirm the service is up.

### Phase 2: V1 App Development (full build + content migration)
Goal: implement the full redesigned site with all content preserved, responsive, animated, and conversion-focused.
1. **Information architecture & navigation**
   - Primary nav: Home, Web Design, SEO, Social Media, Portfolio, Privacy Policy.
   - Persistent header CTA: “Call (561) 464-6222”.
2. **Design system**
   - Colors: deep navy base, cyan/electric blue accents, high-contrast text.
   - Typography: modern sans (e.g., Inter) with strong hierarchy.
   - Components (shadcn/ui): buttons, cards, badges, accordions (if needed), separators.
3. **Page builds (preserve all content)**
   - `/` Home
     - Hero with tagline + primary CTA (call)
     - Services overview (Web Design / SEO / Social)
     - Stats counters: 639 satisfied, 303 active (animated)
     - Testimonial block (Steve)
     - Portfolio preview grid (link to /portfolio/)
     - Contact info section (phone + address) (no form)
   - `/web-design/`
     - Service list (DNS transfer, WP install, DB, email, admin panel, hosting panel, unlimited pages, contact form *as described in original content but not implemented as a real form*, on-page SEO, submissions, social links)
     - CTA to call
   - `/seo/`
     - Migrate all structured content/sections and lists (internal vs external, puzzle, keyword research, copywriting, warnings)
     - CTA to call
   - `/social/`
     - Migrate social media marketing content + CTA to call
   - `/portfolio/`
     - Grid of all portfolio items (30+) using original image URLs
   - `/privacy-policy/`
     - Render the policy text with clean typography
4. **Portfolio assets**
   - Use original images from `webdesignfla.com/wp-content/uploads/...`.
   - Add graceful fallbacks if an image fails (blur placeholder + project title).
5. **Motion/interaction (Framer Motion)**
   - Scroll-reveal for sections, hover elevation on cards, animated counters on Home.
   - Keep it performant: avoid heavy parallax/3D.
6. **SEO & sharing**
   - Helmet titles/descriptions per route.
   - Canonical URLs, OpenGraph basics (title/description).
7. **Backend (FastAPI minimal)**
   - `/health` only; optionally serve a sitemap/static file if required by deployment.

**Phase 2 user stories**
1. As a visitor, I can navigate via header menu and always know where I am.
2. As a visitor, I can call the agency from any page in one click.
3. As a mobile user, the layout adapts cleanly (hero, grids, typography) without horizontal scroll.
4. As a visitor, I can browse the full portfolio grid and open images without layout breaking.
5. As a search engine, each route has consistent content + meta tags matching that page’s topic.

(Conclude Phase 2 with one full end-to-end testing pass: route access, responsive checks, image loading, meta tags verification.)

### Phase 3: Polish, QA, and SEO hardening
Goal: improve quality, stability, and SEO confidence without changing routes/content.
1. QA checklist across browsers (Chrome/Safari/Firefox) and breakpoints.
2. Accessibility pass: contrast, focus states, keyboard nav, skip-to-content.
3. Performance: image sizing, lazy-loading, minimize JS, ensure animations don’t jank.
4. SEO hardening:
   - Generate `sitemap.xml` and `robots.txt` (match routes)
   - Ensure trailing slash consistency + canonical tags
5. Content parity review vs original (no missing sections/portfolio items/phone/address/email).

**Phase 3 user stories**
1. As a visitor on Safari iOS, I can browse the site with correct spacing and readable text.
2. As a keyboard user, I can tab through nav and CTAs with clear focus indicators.
3. As a user on slow internet, images load progressively without blocking content.
4. As a search engine, I can discover all routes via sitemap.
5. As the business owner, I can trust that the redesign didn’t remove any original messaging.

## 3. Status (after Phase 2 build)
- Phase 1 (POC): SKIPPED — static marketing redesign, no risky integration. Validated routing + Helmet directly during Phase 2.
- Phase 2 (V1 build): COMPLETED. All 6 routes implemented, content migrated from original webdesignfla.com, design system applied (navy + cyan), portfolio uses original images via referrerPolicy=no-referrer (28 projects), per-route Helmet meta + canonicals, sitemap.xml + robots.txt served from FastAPI.
- Testing: testing_agent_v3 ran 43 tests — 42 passed (98%). Only minor issue was a 17px body width overflow at tablet (768px) — fixed with overflow-x:hidden on html/body. No regressions visible.

## 4. Next Actions
1. Optional Phase 3 polish: SSR/prerender (Vite + react-snap) for max SEO, additional micro-interactions, more project images for portfolio fallbacks.
2. Optional: replace blocked image filenames (a few of the later portfolio items fall back to gradient cards).

## 4. Success Criteria
- All 6 original routes work directly and preserve content.
- No contact forms anywhere; phone CTA is prominent and tap-to-call works.
- Responsive, modern design with navy/cyan scheme and tasteful motion.
- Unique Helmet meta title/description per route + canonical URLs.
- Portfolio shows all listed projects with original images and graceful fallbacks.
- QA passes: navigation, performance, accessibility, and cross-browser rendering.