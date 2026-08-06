# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Locals and visitors in Parramatta / Western Sydney searching for Greek food — typically on mobile, often mid-decision ("Greek restaurant Parramatta", "souvlaki near me"). Their job: decide this is the place, then book a table. Secondary: existing customers checking the menu, hours, or location before visiting.

## Product Purpose

Marketing and reservations website for The Souvlucky Country, a family-run Greek restaurant at 316 Church St, Parramatta NSW 2150 (trading since 2015). The site exists first to drive **table reservations** via the email reservation form (confirmed); local search visibility and walk-in/phone conversions support that goal. Live at https://thesouvluckycountry.com.au.

## Positioning

Confirmed differentiators a competitor could not truthfully copy:
- **Family recipes and heritage** — authentic flavours from the islands of Greece, made from the family's own recipes.
- **Hospitality and atmosphere** — the warm, family-run dining experience itself.

Existing site copy consistent with this: "A family-run Greek eatery in Parramatta. We serve authentic flavours from the islands of Greece, made with heart and heritage."

## Operating Context

- Visitors arrive largely via local organic search; the blog exists to win local-SEO comparison queries.
- Reservations flow: form on site → `/app/api/sendMail/route.ts` (nodemailer + Gmail SMTP) → restaurant's inbox. Requires `GMAIL_USER`, `GMAIL_PASS`, `GMAIL_EMAIL` env vars.
- Social presence is real and linked: Facebook (SouvLuckyCountryParra), Instagram (@the_souvlucky_country).
- Site is built and maintained by OnTheDot (footer credit links to onthedot.au — a confirmed commitment, keep it).

## Capabilities and Constraints

- Next.js 15 App Router, TypeScript, React 19; Mantine + Tailwind + shadcn/ui. Routes: home, menu, about-us, souvlaki, reservations, blog (`/blog/[slug]`), plus sitemap/robots.
- Comprehensive SEO already in place (Restaurant JSON-LD, Open Graph, en_AU locale, canonical URLs) — future work must preserve it.
- Note: CLAUDE.md describes a parallel-route `/app/homepage/@slot` architecture that no longer exists; the homepage is now plain sections in `components/sections/` composed by `app/page.tsx`.
- Online ordering/takeaway: not built; not confirmed as a goal. Undecided — do not assume.

## Brand Commitments

- Name: The Souvlucky Country (also styled "SouvLucky Country").
- Logo and brand assets in `/public` (Logo.jpg, Logo1.png, logo.png).
- Established colour identity: primary blue `#0D71C9`, dark blue `#03233C` (Greek blue-and-white association).
- Voice in incumbent copy: warm, family, tradition ("made with heart and heritage").

## Evidence on Hand

- **Real food and venue photography** (confirmed genuine): hero, about, popular-dish, and Instagram shots in `/public`.
- **Real Google/Facebook customer reviews exist** (confirmed) and may be quoted on the site — source them from the actual listings; never invent review text, names, or star counts.
- No confirmed press or awards — do not fabricate any.
- "Since 2015" and the Church St address appear in site metadata and footer; treat as factual.

## Product Principles

1. Every page should shorten the path to a reservation — booking is the site's one conversion.
2. Lead with what is real: genuine photos, genuine reviews, the family's actual story. Never fabricate proof.
3. Family heritage and warm hospitality are the brand's substance, not decoration — copy and imagery should carry them concretely (recipes, people, the room).
4. Protect local-SEO equity: structured data, metadata, canonical URLs, and blog content are load-bearing; don't regress them for visual changes.
5. Mobile-first: the deciding visitor is on a phone, often nearby and hungry.
