<div align="center">
  <h1>JourneyNest · Mindful Travel Landing Page</h1>
  <p>A concept marketing site for a high-touch travel concierge.</p>
</div>

## Feature Highlights

- **Multi-page routing** with React Router for seamless navigation between pages
- **Lifestyle hero** with layered serif typography, luxury imagery, and dual CTAs ("Explore Collections" / "Plan a Custom Trip")
- **Curated destinations** grid showcasing Kyoto, Amalfi Coast, and Reykjavik with photography, descriptions, and indicative pricing
- **Collections page** featuring curated travel experiences organized by theme (Culture, Beach, Adventure, City, Wellness, Safari)
- **About page** with company mission, values, and team members
- **Contact page** with inquiry form and contact information
- **How-it-works timeline** walking through consultation, itinerary crafting, pre-trip prep, and on-trip support
- **Service feature cards** emphasizing bespoke itineraries, local experts, 24/7 concierge, and vetted partners
- **Testimonials section** with headshots and quotes to add social proof for premium clients
- **Scroll to top button** that appears when scrolling down for better navigation
- **Responsive layout** built entirely with utility classes so sections stack elegantly on any device

---

## Tech Stack

| Layer        | Details                           |
| ------------ | --------------------------------- |
| Framework    | React 19 + Vite                   |
| Language     | TypeScript                        |
| Routing      | React Router DOM v7               |
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

- Dev server defaults to `http://localhost:3000`.
- Production files output to `dist/` for hosting on Vercel, Netlify, Render, or static S3/CDN buckets.

---

## Pages & Routes

- `/` - Home page with hero, destinations, features, how it works, and testimonials
- `/collections` - Browse all curated travel collections
- `/about` - Learn about JourneyNest's mission, values, and team
- `/contact` - Contact form and company information

---

## Project Layout

### Pages
- `pages/Home.tsx` – Main landing page combining all hero sections
- `pages/Collections.tsx` – Showcase of all travel collections
- `pages/About.tsx` – Company information and team
- `pages/Contact.tsx` – Contact form and information

### Components
- `App.tsx` – Main app shell with routing configuration
- `components/Navbar.tsx` – Navigation bar with responsive menu and routing links
- `components/Footer.tsx` – Footer with links, newsletter, and social media
- `components/Hero.tsx` – Hero section with headline, copy, and CTAs
- `components/Destinations.tsx` – Featured destination cards
- `components/Features.tsx` – Service feature cards with icons
- `components/HowItWorks.tsx` – Step-by-step journey timeline
- `components/Testimonials.tsx` – Customer testimonials and stories
- `components/ScrollToTop.tsx` – Auto-scroll to top on route change
- `components/ScrollToTopButton.tsx` – Floating scroll-to-top button

### Utilities
- `components/ScrollToTop.tsx` – Handles automatic scroll to top on route changes
- `components/ScrollToTopButton.tsx` – Floating button for manual scroll to top

Sections are modular so you can reorder, reuse, or swap them for other campaigns without heavy refactors.

---

## Key Features

- **Smooth Navigation**: React Router provides seamless page transitions
- **Auto Scroll**: Automatically scrolls to top when navigating between pages
- **Scroll Button**: Floating button appears when user scrolls down 300px
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalist design with luxury travel aesthetic

---

© 2025 JourneyNest (concept project). All brand names are fictional and for demonstration only.
