# Kiara – The House of Love

A one-page marketing site for Kiara, an intimate neighborhood restaurant in Antipolo, Philippines. Kiara is a family home opened up for dining, and the site is built to feel the same way: warm, unhurried, and personal.

## Tech Stack

- Next.js 15 (App Router) · TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, hero entrance, hover motion)
- lucide-react
- Deployed on Vercel
- Prettier with prettier-plugin-tailwindcss

## Live Site

Coming soon.

## Project Context

Designed and developed end-to-end for a family-owned restaurant. The brand identity (burgundy / cream palette, typography, "The House of Love" voice) and the print menu system were designed from scratch, then carried through into the site. This repo is the web side of that system: a single long page that introduces the house, shows a taste of the menu, and points guests toward the door.

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx         Root layout, Google Fonts, metadata
  page.tsx           Composes the one-pager
  globals.css        Tailwind theme + Kiara color tokens
components/
  Hero.tsx           Burgundy hero, logo, tagline
  About.tsx          "Kumain ka na" welcome
  MenuHighlights.tsx Lola's Kitchen · Love-a-Burger · Para sa Barkada
  Atmosphere.tsx     House gallery with subtle parallax
  VisitUs.tsx        Location, phone numbers, hours
  Footer.tsx         Logo, socials, sign-off
  Reveal.tsx         Shared scroll-reveal wrapper
  Logo.tsx           Wraps the Kiara SVG
public/
  svg/               Kiara logo assets
```

## Brand Tokens

| Token             | Hex       | Used for                                |
| ----------------- | --------- | --------------------------------------- |
| `kiara-burgundy`  | `#673146` | Primary background (hero, footer), text |
| `kiara-cream`     | `#FFF6E2` | Secondary background, contrast text     |
| `kiara-motif`     | `#AB5F64` | Accents, iconography, quiet highlights  |

Available as Tailwind classes (`bg-kiara-burgundy`, `text-kiara-cream`, `text-kiara-motif`).
