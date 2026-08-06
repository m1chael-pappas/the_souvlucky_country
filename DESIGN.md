---
name: The Souvlucky Country
description: Family-run Greek taverna warmth in Aegean blue and white, hand-lettered like a taverna signboard.
colors:
  aegean-blue: "#0D71C9"
  deep-aegean: "#0A4E8C"
  midnight-harbour: "#03233C"
  sea-mist: "#F2FDFF"
  sky-wash: "#DFF4FF"
  white: "#FFFFFF"
  ink: "#111827"
  story-grey: "#4B5563"
typography:
  display:
    fontFamily: "Sedgwick Ave, cursive"
    fontSize: "clamp(3rem, 6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.25
  headline:
    fontFamily: "Sedgwick Ave, cursive"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.5
  article-subhead:
    fontFamily: "Sedgwick Ave, cursive"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.3
  article-table:
    fontFamily: "Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  card: "24px"
  section: "64px"
  btn-y: "12px"
  btn-x: "32px"
components:
  button-primary:
    backgroundColor: "{colors.aegean-blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.deep-aegean}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.aegean-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-outline-hover:
    backgroundColor: "{colors.aegean-blue}"
    textColor: "{colors.white}"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.card}"
---

# Design System: The Souvlucky Country

## Overview

**Creative North Star: "The Family Table"**

Everything on this site is an invitation to sit down with the family. The blue-and-white of Greece is present everywhere — one bright Aegean blue against whitewashed backgrounds — but it serves the welcome rather than leading it. The hand-lettered Sedgwick Ave headings read like the family's own handwriting on the taverna signboard; the photography is the actual food and the actual room; the copy speaks plainly about heart and heritage. Nothing is corporate, nothing is minimal-chic: the design is generous, direct, and a little informal, the way a family-run eatery on Church Street actually is.

The committed feel for interactive elements is **hearty and grounded** — taverna-table sturdiness. Note for future work: the current implementation is somewhat airier than this commitment (springy hover scales, a floating hero image). New work should favour solid, confident interactions over bounce, and refinements may quietly ground the existing motion rather than amplify it.

**Key Characteristics:**
- One blue, everywhere: a single bright accent carries the whole identity.
- Hand-lettered headings over a plain, honest body face.
- Whitewashed, light-filled backgrounds; icy blue section washes instead of grey.
- Pill-shaped, full-bodied buttons; softly rounded cards.
- Real photography of real food — never stock, never illustration-as-substitute.

## Colors

A single Greek blue in three depths against whitewash and sea-light neutrals — the palette of a taverna's painted shutters.

### Primary
- **Aegean Blue** (#0D71C9): The one voice of the brand. Section headings, prices, primary buttons, links, the footer's full-bleed background, and the Instagram hover overlay all speak this exact blue.
- **Deep Aegean** (#0A4E8C): The hover/pressed depth of Aegean Blue on buttons and links. Never used at rest.
- **Midnight Harbour** (#03233C): Near-black blue for nav links over light hero backgrounds and as an alternate dark hover on solid buttons.

### Neutral
- **White** (#FFFFFF): Whitewashed walls — page background, card surfaces, outline-button fill, footer social circles.
- **Sea Mist** (#F2FDFF): Icy, faintly cyan wash used as full-section background (Popular, Social sections) to alternate rhythm with white.
- **Sky Wash** (#DFF4FF): Mid-stop of the hero's white-to-blue gradient; sky light behind the hero imagery.
- **Ink** (#111827): Default body text.
- **Story Grey** (#4B5563): Supporting paragraphs and captions.

### Named Rules
**The One Blue Rule.** Aegean Blue is the only accent. No secondary accent colour exists or may be introduced — warmth comes from photography, lettering, and copy, not from adding colours.

Two sanctioned exceptions, both because the colour carries *meaning* rather than decoration:
- **Platform colours.** The footer's social icons may flash their own brand colours on hover.
- **Semantic indicators.** Dietary, status, and validation signals use conventional colours because the convention *is* the information — the menu's vegetarian badge is green because a green leaf is legible at a glance and a blue one is not. Semantic colour is a separate axis from the brand accent and does not count against this rule. It may never be used decoratively.

## Typography

**Display Font:** Sedgwick Ave (with cursive fallback)
**Body Font:** Roboto (weights 300/400/500, with sans-serif fallback)

**Character:** A hand-painted taverna signboard over plain honest print. Sedgwick Ave's marker-drawn letterforms carry all the personality; Roboto stays neutral and legible underneath, in light-to-medium weights only.

### Hierarchy
- **Display** (700, clamp 3–3.75rem, 1.25): Hero headline ("Taste of Greece") and page titles.
- **Headline** (700, 2.25rem / text-4xl, 1.2): Section headings — "Our Story", "Popular Dishes". Almost always set in Aegean Blue.
- **Body** (400, 1.125rem, 1.625): Paragraph copy, max-width constrained (`max-w-lg` in hero); Story Grey or Ink.
- **Label** (500, 1.125rem): Button text, prices, nav emphasis.
- **Nav** (400, 1.5rem, letter-spacing 0.025em): Roboto, wide-tracked, Midnight Harbour over light heroes; Aegean Blue on the scrolled white header.

### Long-form article scale

Blog posts need steps the marketing pages don't. These are part of the system, implemented once in `.article-prose` (`app/globals.css`) and never hand-rolled per post:

- **Article H2** (2.25rem, Sedgwick Ave, Aegean Blue): section breaks within a post — the Headline step reused.
- **Article H3** (1.5rem, Sedgwick Ave, Midnight Harbour): sub-sections inside a section. The one step between Headline and Body, added because long posts genuinely need three levels.
- **Article body** (1.125rem / 1.75, Story Grey): the Body step at a looser line-height for sustained reading, capped at a 68ch measure.
- **Table text** (1rem, Roboto): dense comparison tables only, one step below Body so a wide table fits. Tables scroll inside their own container.

### Named Rules
**The Signboard Rule.** Sedgwick Ave belongs to headings (h1–h3) only — applied globally via the base layer. It never sets body copy, buttons, nav, or prices; hand-lettering everywhere would turn the signboard into noise.

## Layout

Centered container capped at 80rem (`max-w-7xl`) with 16–32px responsive gutters. Sections stack with generous 64px vertical padding (`py-16`), alternating White and Sea Mist backgrounds for rhythm. Content splits into two-column grids on large screens (`lg:grid-cols-2`, 48px gap) and collapses to a single column on mobile — text column first, imagery second.

The header is fixed and transparent over the hero (32px vertical padding), condensing on scroll to a white bar with a medium shadow and 16px padding; nav links shift from Midnight Harbour to Aegean Blue as the background lightens. The footer is a full-bleed Aegean Blue band containing white text, white circular social buttons, and a rounded-3xl embedded map.

## Elevation & Depth

Depth is conveyed primarily by colour washes and layered photography, not shadow drama. Surfaces sit close to the page: cards rest on a soft diffuse shadow, and the scrolled header earns a medium shadow to separate from content. Hover states change colour or settle the shadow rather than lifting elements higher.

### Shadow Vocabulary

**Implementation: utility classes in `app/globals.css`** — `.shadow-card`, `.shadow-card-hover`, `.shadow-cta`, `.shadow-cta-hover`, `.shadow-panel`. Use these rather than inline arbitrary `shadow-[...]` values. All five are tinted with Midnight Harbour (`rgb(3 35 60)`) rather than neutral black, so depth stays inside the palette.

- **Card rest** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2)` — Tailwind `shadow-lg/20`): Dish cards, the reservation panel, footer social circles, the map frame.
- **Header scrolled** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` — `shadow-md`): The condensed white header bar only.

### Named Rules
**The Settled Table Rule.** Elements rest where they are. Hover feedback deepens colour or softens shadow; it does not float things away — consistent with the hearty, grounded feel.

## Shapes

Full-bodied, friendly geometry. Primary and outline CTAs are complete pills (9999px). Content cards round at 16px (`rounded-2xl`), image wells inside them at 12px (`rounded-xl`), the footer map at 24px (`rounded-3xl`), and small utility elements at 8px (`rounded-lg`). Borders are rare: the outline button's confident 2px Aegean Blue stroke is the only structural border in the system — everything else separates by background colour and shadow.

## Components

### Buttons

**Implementation: `components/ui/PillButton.tsx`.** All primary and outline CTAs render through this one component — do not hand-roll another pill. Props: `variant` (`primary` | `outline`), `size` (`md` = the documented 12px/32px pill, `lg` = the hero's amplified 16px/40px), `external` (renders an `<a>` with `target="_blank"` and the correct `rel`), plus `href`, `className`, and `aria-label`. It always renders a single anchor; never nest a `<button>` inside a `<Link>`.

- **Shape:** Complete pill (9999px radius), generous padding (12px 32px).
- **Primary:** Aegean Blue (#0D71C9) fill, white Label text (Roboto 500, 1.125rem).
- **Hover:** Deepens to Deep Aegean (#0A4E8C) — or Midnight Harbour (#03233C) on rectangular form-context buttons — over a 200ms colour transition.
- **Outline:** White fill, 2px Aegean Blue border, Aegean Blue text; hover inverts to solid Aegean Blue with white text.
- **shadcn variants:** Error/404 pages use the shadcn `Button` styled inline to the same Aegean palette (`bg-[#0D71C9] hover:bg-[#03233C]`).

### Cards / Containers
- **Corner Style:** 16px (`rounded-2xl`).
- **Background:** White, on White or Sea Mist sections.
- **Shadow Strategy:** Card-rest shadow (see Elevation); dish cards *soften* their shadow on hover rather than lifting.
- **Internal Padding:** 24px (`p-6`); larger panels 32px (`p-8`).
- **Image wells:** 12px radius, `bg-gray-100` placeholder behind photography, 256px tall in dish cards.

### Navigation
- **Style:** Fixed transparent header over the hero; white bar + shadow on scroll.
- **Typography:** Roboto 1.5rem, wide tracking.
- **States:** Midnight Harbour → Deep Aegean hover (transparent state); Aegean Blue → dark blue hover with underline (scrolled state). Desktop nav hides below `lg`, replaced by a three-bar toggle.

### Footer (signature component)
Full-bleed Aegean Blue band: Sedgwick Ave white heading, address block ("316 Church st."), a row of white circular social buttons (48px, card-rest shadow) that flash their platform colour on hover, and the rounded-3xl Google Maps embed. The "Built by OnTheDot." credit is a binding commitment and stays.

### Social grid (signature component)
Instagram tiles reveal a 90%-opacity Aegean Blue overlay sliding up over the photo on hover, white caption text centred — the one place the brand colour covers photography.

## Do's and Don'ts

### Do:
- **Do** set every section heading in Sedgwick Ave, Aegean Blue (#0D71C9) — it is the brand's voice.
- **Do** alternate White and Sea Mist (#F2FDFF) section backgrounds to create rhythm without borders.
- **Do** keep buttons as full pills with 12px 32px padding and colour-deepening hovers (200ms).
- **Do** use the family's real photography at generous sizes; food imagery is the primary decoration.
- **Do** keep Roboto at weights 300–500; the system never goes bolder than medium in body contexts.

### Don't:
- **Don't** introduce a second accent colour — The One Blue Rule.
- **Don't** use Sedgwick Ave outside headings — The Signboard Rule.
- **Don't** add floaty or bouncy motion (large hover scales, infinite float loops); the committed feel is hearty and grounded, and existing springy touches are to be quietly settled, not multiplied.
- **Don't** replace real restaurant photography with stock imagery or illustration.
- **Don't** darken the site: no dark sections other than the Aegean Blue footer band; the world is whitewashed and light-filled.
