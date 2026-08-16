# 03 — Retail Shop (Obsidian)

Premium fashion label demo site: filterable shop, statically-generated product pages,
and a client-side cart drawer. Part of the 10-site agency portfolio. See
`../00-docs/03-retail-shop.md` for the planning document and non-functional checklist report.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Radix UI (Dialog, Accordion)
- Client cart via React context + localStorage (no checkout — demo only)
- `next/image` with picsum.photos placeholder imagery (deterministic seeds)
- Archivo + Work Sans via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (typecheck + lint + compile)
```

## Structure

- `src/app` — routes (`/`, `/shop`, `/shop/[slug]`, `/collections`, `/about`, `/contact`)
  plus `sitemap.ts` (includes product URLs), `robots.ts`, 404/error pages
- `src/components` — header (with cart drawer), product card/explorer/details, hero, marquee
- `src/lib` — `products.ts` (catalog), `cart-context.tsx` (cart state), site/images/validate
- Product pages are statically generated from the catalog (`generateStaticParams`).

## Deployment

Target: Vercel. Update `SITE.url` in `src/lib/site.ts` to the production domain
before deploying (used by metadata, sitemap, robots, and JSON-LD).
