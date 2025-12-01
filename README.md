<div align="center">
  <h1>JourneyNest · Mindful Travel Landing Page</h1>
  <p>A concept marketing site for a high-touch travel concierge.</p>
</div>

## Feature Highlights

- **Lifestyle hero** with layered serif typography, luxury imagery, and dual CTAs (“Explore Collections” / “Plan a Custom Trip”).
- **Curated destinations** grid that showcases Kyoto, Amalfi Coast, and Reykjavik with photography, descriptions, and indicative pricing.
- **How-it-works timeline** that walks through consultation, itinerary crafting, pre-trip prep, and on-trip support.
- **Service feature cards** emphasizing bespoke itineraries, local experts, 24/7 concierge, and vetted partners.
- **Testimonials carousel** with headshots and quotes to add social proof for premium clients.
- **Responsive layout** built entirely with utility classes so sections stack elegantly on any device.

---

## Tech Stack

| Layer        | Details                           |
| ------------ | --------------------------------- |
| Framework    | React 19 + Vite                   |
| Language     | TypeScript                        |
| Styling      | Tailwind-esque utility classes    |
| Icons        | [`lucide-react`](https://lucide.dev) |

All content is front-end only, making it easy to deploy to any static host.

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production (optional)
npm run build
```

- Dev server defaults to `http://localhost:5173`.
- Production files output to `dist/` for hosting on Vercel, Netlify, Render, or static S3/CDN buckets.

---

## Project Layout

- `App.tsx` – Page shell, section order, and shared theme tokens.
- `components/Navbar.tsx` – Transparent navigation with brand mark and CTA.
- `components/Hero.tsx` – Headline, supporting copy, CTAs, and hero imagery.
- `components/Features.tsx` – Icon-backed service feature cards.
- `components/Destinations.tsx` – Featured location cards with copy + pricing.
- `components/HowItWorks.tsx` – Step-by-step journey timeline. *(Add if not yet created.)*
- `components/Testimonials.tsx` – Guest stories and ratings slider.
- `components/Footer.tsx` – Contact links, social handles, and legal copy.

Sections are modular so you can reorder, reuse, or swap them for other campaigns without heavy refactors.

---

© 2025 JourneyNest (concept project). All brand names are fictional and for demonstration only.
