# Genuvaly — Brand Landing Page

A modern streetwear/fashion brand landing page for Genuvaly.

"disclaimer" This is just a dummy project, not tied to any brand, purely to improve skills and add to the portfolio.

---

## Features

- Responsive navigation with mobile burger menu
- Cinematic hero section with video background and poster fallback
- Hero content positioned bottom-left with a fade-in-from-below entrance animation
- Featured Collection section with editorial 3-card layout and scroll-reveal animation
- New Arrival section with a 4-product grid, image-first cards, and scroll-reveal animation
- Modern, minimal UI
- Mobile-first layout

---

## Tech Stack

- HTML5
- CSS3 (custom properties, no framework)
- JavaScript (Vanilla, no dependencies)
- Google Fonts: Bebas Neue, Inter, Space Mono

---

## Project Status

- ✅ Navigation
- ✅ Hero Section
- ✅ Featured Collection
- ✅ New Arrival
- ⏳ Best Seller
- ⏳ About Brand
- ⏳ Footer

---

## Changelog

### New Arrival (latest)
- Added a new `#new-arrival` section, placed directly after Featured Collection.
- Introduces 4 individual products — Everyday Oversized Tee, Terrace Nylon Jacket, Essential Cargo Pant, Matchday Cap — each with a number, name, category, and price. Unlike Featured Collection (which presents curated collections), this section focuses on single products.
- Product cards use large, image-first visual placeholders (structured so real product photography can be dropped in later) with a subtle number watermark, matching the Featured Collection visual language.
- Hover interaction: a restrained image scale only — no motion on text, no flashy effects.
- Reuses the existing scroll-reveal `IntersectionObserver` already powering Featured Collection, rather than introducing a new animation system.
- Responsive grid: 2 columns on mobile and tablet, 4 columns on desktop (1024px+).
- Navbar, Hero, and Featured Collection were not modified — their layout, colors, typography, spacing, and animation timing are unchanged.

### Featured Collection
- Added an editorial 3-card layout (`Everyday`, `Terrace`, `Essentials`) directly below the Hero, replacing the earlier section placeholder.
- Section heading and cards fade in on scroll via `IntersectionObserver`.

### Hero
- Repositioned Hero text from centered to bottom-left, with generous edge spacing, so the background video stays the main visual focus.
- Entrance animation changed to a subtle fade-up, staggered across the eyebrow, headline, description, and button.

---

## Folder Structure

```
genuvaly/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── images/
    └── videos/
```

---

## Running Locally

Static site, no build step. Open `index.html` in a browser, or serve the folder with any static server:

```
npx serve .
```
