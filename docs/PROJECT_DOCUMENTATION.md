# Project Documentation — Gem Commerce

## Overview

This document provides developer-facing context for the `Gem Commerce` assessment project. It explains the main technologies used, architectural choices, accessibility decisions, and maps the key components so reviewers (AHR / technical reviewers) can quickly understand the code without running it.

## Tech stack and reasons

- Next.js (App Router)

  - Provides SSR/SSG and incremental static regeneration options.
  - Built-in optimizations for fonts and images.
  - Promotes a component-based structure that aids reuse and testing.

- Tailwind CSS

  - Utility-first approach makes styling fast and consistent.
  - Encourages composable, reusable UI patterns.

- SVGs for graphics
  - Vector graphics keep imagery crisp at any device pixel density and are typically smaller than multiple raster variants.

## Accessibility and semantic HTML

- Semantic elements are used where appropriate (e.g. `header`, `main`, `section`, `nav`, `footer`) instead of generic `div`s to provide structure for screen readers and assistive tech.
- Use meaningful `alt` text for decorative images when necessary; prefer `role="img"` + accessible title/desc inside inline SVG when appropriate.
- Maintain proper heading order (`h1` -> `h2` -> `h3`) and avoid skipping levels.

## Component map

- `app/layout.tsx` — Global layout, fonts and metadata are configured here. Avoid overwriting unless changing site-wide settings.
- `app/page.tsx` — The main route for the demo. Small and intentionally simple for the assessment.
- `components/Hero.tsx` — Top-of-page promotional area; demonstrates typographic scale and responsive layout.
- `components/Benefits.tsx` — Reusable list/grid demonstrating small presentational components.
- `components/Nutrition.tsx` — Example of a compact component that could be fed with data.

## Styling & conventions

- Prefer Tailwind utility classes for spacing, color, and layout. Keep components focused and avoid global side effects.
- Keep styles local to components unless a global utility is required — use `globals.css` for Tailwind base config and global utility rules.

## What to avoid when reviewing or extending

- Do not replace inline or carefully optimized SVGs with bitmap images unless necessary for the feature.
- Do not change `app/layout.tsx` font-loading behavior unless you are intentionally changing the global typography strategy.

## Running locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Notes for reviewers

- The codebase is intentionally minimal to highlight decisions rather than implementation breadth.
- If you want additional tests or TypeScript strictness changes, I can add them; I kept the scope focused on UI, structure, and accessibility.

---

If you want this documentation expanded into an ADR (architecture decision record) or a short CONTRIBUTING.md for future work, tell me which format you prefer and I will add it.
