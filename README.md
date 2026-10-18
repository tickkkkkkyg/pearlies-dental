# Pearlies Dental Clinic

Premium dental clinic website for Pearlies Dental Clinic in Kalanki, Kathmandu, Nepal.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, framer-motion, react-hook-form, zod, and lucide-react. Hand-rolled UI primitives — no shadcn or radix.

## Features

- Homepage with nav, hero ("Your Smile, Our Passion"), trust indicators, 8 service cards, dentist profiles with credentials, why-choose-us, testimonials, gallery, FAQ accordion, appointment form, contact section with Google Maps embed, and footer.
- Responsive, accessible, smooth animations, optimized images, working appointment form with client-side validation.
- Appointment requests hand off to WhatsApp with prefilled details (static hosting has no booking server — nothing is ever claimed as "booked" unless a real backend accepts it).

## Tech Stack

- Next.js 16.4.2 (App Router)
- React 19, TypeScript
- Tailwind CSS v4 (`@theme`, `src` dir, `@/*` alias)
- framer-motion, lucide-react, clsx, tailwind-merge
- react-hook-form + zod validation

## Getting Started

```bash
pnpm install
pnpm dev          # dev server at http://localhost:3000
pnpm build        # production build (next start)
pnpm build:pages  # static export for GitHub Pages (out/)
pnpm lint         # ESLint
```

## Deployment — GitHub Pages

The site is deployed as a static export from the `gh-pages` branch to https://tickkkkkkyg.github.io/pearlies-dental/.

```bash
pnpm build:pages           # builds `out/` with GITHUB_PAGES=1 (basePath /pearlies-dental)
cd out
git init
git add -A && git commit -m "deploy"
git push -f <repo-url> HEAD:gh-pages
```

GitHub Pages source is set to the `gh-pages` branch. The `public/.nojekyll` file prevents Jekyll processing.

Images are loaded directly from Unsplash (`images.unoptimized: true`) since the default Next.js image optimizer is unavailable in a static export.

## Appointment Form

The form validates with zod and, on submit, opens a WhatsApp chat prefilled with the visitor's name, phone, service, date/time, and note. This works entirely on static hosting and never fakes a booking confirmation.
