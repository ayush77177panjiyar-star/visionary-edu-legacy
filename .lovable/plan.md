## Goal

A cinematic, premium personal website for Mr. Ankush Bansal — "The Visionary Behind Transforming Education" — with the polish of Apple/Harvard-class institutional sites.

## Two things to flag up front

1. **Framework**: this project runs on TanStack Start (React 19 + Vite + TypeScript), not Next.js. It gives the same SSR, routing, code-splitting and SEO capabilities, so nothing in your brief is lost — but I'll build with TanStack Router instead of the Next app router. Tailwind, Framer Motion, GSAP, Lenis and shadcn/ui all work as requested.
2. **Content accuracy**: I'll research the official Geeta University site, public profiles and press coverage, and use only what I can verify. Where a number, date, award or quote can't be sourced, I'll leave a clearly-marked `TODO` placeholder rather than invent it. Expect some sections (awards, exact milestone years, quotations) to arrive partly placeholdered.

Three.js/Spline are heavy and would put the performance target at risk; I'll get the same depth using layered parallax, canvas particles, mouse-reactive portrait tilt and animated gradient meshes — much lighter, same feel. If you specifically want a 3D scene later, we can add it behind lazy-load.

## Design system

- Navy `#0A1F44`, blue `#1D4ED8`, gold `#D4AF37`, white/deep-navy backgrounds — as semantic tokens in `src/styles.css`, with a full dark mode.
- Playfair Display for display type, Inter for body, loaded via `<link>` in the root route.
- Glassmorphism cards, gold hairline accents, generous whitespace, restrained motion.

## Pages and sections

Separate routes (each with its own SEO metadata), not one hash-anchored page:

- `/` — loading screen (animated logo + tagline), hero, vision cards, achievements counters, selected news, closing CTA
- `/about` — biography + leadership philosophy + quotes
- `/journey` — animated vertical timeline
- `/university` — Geeta University deep section (history, schools, research, campus, placements, collaborations, admissions)
- `/gallery` — masonry photo gallery with lightbox and category filters (your 10 uploaded photos, categorised)
- `/media` — news cards + embedded video gallery
- `/awards` — animated award cards
- `/impact` — reach, partnerships, collaborations (stylised map, not a heavy geo library)
- `/contact` — form, address, map embed, social links

Shared premium header with scroll-aware glass nav, theme toggle, and an elegant footer with quick links, privacy/terms, social icons.

### Hero
Full-screen. Animated wave-gradient background, canvas particle field, floating educational glyphs. Left: oversized "ANKUSH BANSAL", role line, rotating role words (Visionary Leader → Education Reformer → Institution Builder → Innovation Advocate → Nation Builder), three CTAs. Right: portrait with glow, soft float, and mouse-parallax depth layers.

### Motion
Lenis smooth scroll; GSAP ScrollTrigger for reveals, parallax, split-text and pinned sequences; Framer Motion for component transitions, 3D tilt cards, counters and the lightbox. All motion respects `prefers-reduced-motion`.

## Technical

- Reusable component library under `src/components/` (sections, ui primitives, motion helpers), content in typed data modules under `src/content/` so text is easy to update later.
- Uploaded photos uploaded as CDN assets (not committed binaries) and referenced by pointer.
- Per-route title/description/OG/Twitter tags, JSON-LD (`Person` for Ankush Bansal, `CollegeOrUniversity` for Geeta University, `BreadcrumbList` on deep routes), `robots.txt`, dynamic `sitemap.xml`.
- Lazy-loaded heavy sections, responsive images, code-split routes, semantic landmarks, keyboard-accessible gallery/lightbox/nav, visible focus rings.

## Out of scope for v1

Admin/CMS dashboard (you chose the marketing site only). The content layer is structured so a Cloud-backed CMS can be layered on later without rewriting components.

## Build order

1. Research + content collection; design tokens, fonts, layout shell
2. Loading screen + hero + motion foundation (Lenis/GSAP)
3. Home sections, About, Journey
4. University, Gallery, Media, Awards, Impact
5. Contact, footer, SEO, accessibility and performance pass
