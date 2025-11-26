# Gem Commerce — Technical Assessment

This repository is a compact storefront UI implemented as part of a technical assessment. The goal of the project is to demonstrate clear technical decisions, good component structure, and accessibility-minded markup so reviewers (AHR / technical reviewers) can quickly evaluate design choices and trade-offs.

**Primary goals:**

- Show component-driven UI built with `Next.js`.
- Use modern tooling for performance (font/image optimizations) and developer productivity (Tailwind CSS).
- Prioritize semantic HTML and accessibility best practices.

## Why these choices (technical rationale)

- **Next.js (App Router)**: chosen for fast iteration and production-ready defaults.

  - Built-in SSR/SSG/ISR options let you choose the right rendering strategy per page or component.
  - `next/font` and `next/image` provide automatic optimizations (font subsetting, preloading, image sizing, and modern formats) with minimal configuration.
  - Component-first architecture encourages small, reusable pieces which improves maintainability and reduces accidental duplication.

- **Tailwind CSS**: utility-first styling reduces custom CSS surface area and makes it simple to express responsive layouts and small variations without creating new stylesheets. This speeds development and encourages consistent spacing and visual rhythm.

- **SVGs for graphics**: vectors keep icons and illustrations sharp across devices and avoid maintaining multiple raster sizes for retina displays. Inline SVGs can also be made accessible via title/desc.

- **Semantic HTML & accessibility**: using `header`, `main`, `section`, `nav`, and `footer` provides meaningful structure for assistive tech. This improves screen-reader navigation and reduces the need for ARIA overrides.

## What to look for as a reviewer (AHR)

- Component boundaries: components under `components/` are intentionally small and focused. This makes it easier to reason about props, isolation, and reusability.
- Layout & global scope: `app/layout.tsx` is the global entry — it sets metadata and font loading. Avoid changing it unless you are intentionally changing global behavior (fonts, meta tags, or global styles).
- Asset choices: SVGs were selected for clarity and size. Replace them only if a feature requires raster imagery.
- Accessibility: confirm the use of semantic sections, proper heading order, and presence of `alt` text or accessible SVG titles.

## Project layout (high-level)

- `app/`
  - `layout.tsx` — global layout, font optimization and metadata. Keep changes here minimal.
  - `page.tsx` — primary route for the demo content.
  - `globals.css` — Tailwind base and global utilities.
- `components/` — presentational and small composition components: `Hero.tsx`, `Benefits.tsx`, `Nutrition.tsx`.
- `public/` — static assets and SVGs.

## Running and developing locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

Notes: this project was created with the standard `create-next-app` layout and uses the `app/` router conventions.

## Developer guidance / conventions

- Prefer small components with explicit props — this encourages reuse and makes behavior easier to test.
- Use Tailwind utilities for layout, spacing, and responsive rules. Avoid large amounts of custom CSS where utilities suffice.
- For images that must be raster, use `next/image` to get built-in optimizations and explicit size handling.
- Keep `app/layout.tsx` as the place for global font and top-level metadata — this file is intentionally minimal to avoid accidental global side effects.

## Accessibility checklist

- Use semantic elements (`header`, `main`, `section`, `nav`, `footer`) instead of plain `div`s where it improves meaning.
- Maintain heading order and semantic grouping (`h1` → `h2` → `h3`).
- Provide `alt` text for images. For inline SVGs, include an accessible `title` and `desc` when the graphic conveys meaning.
- Ensure interactive controls are keyboard-accessible and have visible focus styles.

## Do not overwrite (unless intentional)

- Avoid changing `app/layout.tsx` font-loading and metadata unless you are intentionally altering the global typography or meta strategy.
- Do not substitute SVGs for raster images without justification — the project relies on vector graphics for fidelity.

## Suggested follow-ups (optional)

- Add a short `CONTRIBUTING.md` with coding conventions and commit guidelines.
- Add a small accessibility test script (axe or Playwright + axe) to perform automated checks on the main page.
- Add unit tests for components (React Testing Library) to validate minimal behaviors and accessibility attributes.

---

For deeper developer notes and component mapping see `docs/PROJECT_DOCUMENTATION.md`.

If you'd like the README formatted differently for non-technical stakeholders, I can generate a short executive summary in addition to this technical README.

# Gem Commerce — Technical Assessment

This repository is a small storefront-style UI built with `Next.js`. It was created as part of a technical assessment. See `docs/PROJECT_DOCUMENTATION.md` for detailed rationale and component mapping.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
