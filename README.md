# WebWrite Restaurant SaaS — Marketing Website

Public marketing website for the **WebWrite Restaurant SaaS** platform, deployed at
`https://saas.webwrite.in/`.

This is the **marketing site only**. It is intentionally isolated from the Super Admin
dashboard, the Restaurant Dashboard and the customer Flutter app, and shares no runtime
code or credentials with them.

## Stack

- Next.js 15 (App Router, React Server Components by default)
- TypeScript (strict)
- Tailwind CSS v4 with CSS custom-property design tokens
- No runtime dependencies beyond React / Next.js (icons are inline SVG)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Script              | Purpose                        |
| ------------------- | ------------------------------ |
| `npm run dev`       | Development server             |
| `npm run build`     | Production build               |
| `npm run start`     | Serve the production build     |
| `npm run lint`      | ESLint (next/core-web-vitals)  |
| `npm run typecheck` | `tsc --noEmit`                 |

## Architecture

```
app/                     Routes (one folder per page) + SEO routes
  api/leads/             Server-side lead capture endpoint
  layout.tsx             Root shell: fonts, header, footer, toast provider
  sitemap.ts robots.ts   Generated SEO routes
components/
  sections/              Page sections (Hero, Pricing, FAQ, …)
  mockups/               Realistic product UI mockups (dashboard, phones)
  cards/                 Feature, product and pricing cards
  ui/                    Button, SectionHeading, Reveal, Toast
  icons.tsx              Inline SVG icon set
lib/
  content/               Structured content: nav, features, products, pricing, faqs
  site.ts                Brand, URLs and contact configuration
  seo.ts                 Metadata helper
  validation/lead.ts     Shared lead schema (client + server)
```

### Design tokens

The palette lives in `app/globals.css` under `:root` (`--ww-red`, `--ww-ink`,
`--ww-surface`, …) and is exposed to Tailwind via `@theme inline`. Adjust the brand
centrally there — components use semantic utilities (`bg-brand`, `text-muted`,
`border-line`) rather than hard-coded colours.

### Content

Marketing copy is data-driven. Edit `lib/content/*.ts` to change navigation, features,
products, pricing tiers and FAQs without touching components.

## Contact form / lead capture

- `components/ContactForm.tsx` validates client-side for fast feedback.
- `app/api/leads/route.ts` **re-validates on the server** (client validation is never
  trusted) and includes a honeypot field for basic bot filtering.
- Delivery is a **clearly-marked placeholder**: set `LEAD_WEBHOOK_URL` to forward leads
  to your CRM/email/automation provider. Until then, validated leads are logged
  server-side so nothing is silently lost.

Copy `.env.example` to `.env.local` and set the values you need:

```
NEXT_PUBLIC_SITE_URL=https://saas.webwrite.in
LEAD_WEBHOOK_URL=
```

## Content accuracy

Per the project brief, the site avoids unverifiable claims:

- No invented statistics, testimonials, ratings or uptime figures.
- Pricing shows "Talk to Sales" / "Custom" — no fabricated commercial figures.
- Payment copy describes the architecture generically; no provider is named.
- Product mockups use clearly-labelled demo data.
- Planned functionality is not presented as already live.

## SEO

Per-page metadata, canonical URLs, Open Graph and Twitter tags are generated via
`lib/seo.ts`. `Organization`, `WebSite`, `SoftwareApplication` and `FAQPage` structured
data are emitted from `components/StructuredData.tsx`. `sitemap.xml` and `robots.txt` are
generated from `app/sitemap.ts` and `app/robots.ts`.

## Accessibility & performance

- Semantic landmarks, a skip link, visible focus states and labelled form fields.
- Accessible accordion (`aria-expanded` / `aria-controls`) and mobile dialog menu.
- Server components by default; client components only where interaction requires it.
- Animations are CSS-based and progressive-enhancement only — content renders without
  JavaScript, and `prefers-reduced-motion` is respected throughout.
