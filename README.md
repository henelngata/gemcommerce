# **Gem Commerce — Technical Assessment**

This project is a small storefront-style UI built as part of a technical assessment.
The purpose of this README is to clearly explain the technical decisions

---

## **🔎 Summary**

* Built using **Next.js** for fast performance, reusable components, and built-in optimizations (fonts, images, routing).
* Styled with **Tailwind CSS** to keep styles consistent, scalable, and easy to maintain.
* All images use **SVGs** to ensure crisp visuals on all screens without pixelation.
* Accessibility improved through **semantic HTML**, proper heading structure, and meaningful `alt` text.
* Codebase organized into small, reusable components to make reasoning and extension easier.

---

## **Why I Chose This Stack**

### **Next.js**

I selected **Next.js** because it provides strong defaults and lets me build fast, maintainable UIs with minimal configuration.

Key benefits:

* **Reusable component architecture** for clean and scalable UI design.
* **Built-in performance features** like `next/image` and `next/font`.
* **App Router** simplifies layouts and routing logic.
* **Automatic optimizations** reduce manual setup and ensure best-practice defaults.

This lets me focus on building clear, well-structured components instead of handling low-level configuration.

---

## **Tailwind CSS**

Tailwind CSS was used to write clean, consistent styles quickly.

Reasons:

* **Utility-first classes** speed up development and reduce custom CSS.
* **Responsive utilities** simplify layout on all screen sizes.
* **Design consistency** is maintained without manually repeating styles.
* Encourages **reusable and scalable UI patterns**.

---

## **SVG Graphics**

All icons and illustrations use **SVGs**.

Why:

* They stay **sharp at any resolution** — no pixelation.
* They are **lighter** than PNG/JPG.
* They support **accessible titles and descriptions** when used inline.

---

## **Accessibility & Semantic HTML**

Accessibility was a priority. I used:

* **Semantic elements** (`header`, `main`, `nav`, `section`, `footer`) instead of generic `<div>` wrappers.
* **Proper heading hierarchy** (`h1 → h2 → h3`) for screen readers.
* **Meaningful alt text** and accessible SVG metadata.
* Keyboard accessibility with visible focus states.

This creates a cleaner, more navigable document structure.

---

## **Project Structure**

```
app/
  layout.tsx      → Global layout, metadata, fonts
  page.tsx        → Main demo UI
  globals.css     → Tailwind base styles
components/
  Hero.tsx
  Benefits.tsx
  Nutrition.tsx
public/
  (SVG assets)
```

Components are intentionally small and focused to show clear separation of concerns.

---

## **Running the Project**

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn  dev
```

Open:

```
http://localhost:3000
```

Build and run production:

```bash
yarn build
yarn run start
```

---

## **Development Conventions**

* Prefer **small, reusable components**.
* Use **Tailwind utilities** before writing custom CSS.
* Keep `app/layout.tsx` minimal and clean.
* Use `next/image` for raster images.
* Maintain **semantic HTML** for accessibility and readability.
