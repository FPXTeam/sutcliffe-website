# Sutcliffe Trading Website

Brand-aligned Next.js website for Sutcliffe Trading.

## Stack
- Next.js 16
- React 19
- TypeScript

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Image organisation
Generated images added for the product-range sections live under:

- `public/images/product-groups/manufacturing/`
- `public/images/product-groups/building-construction/`
- `public/images/product-groups/outdoor-landscaping/`
- `public/images/product-groups/dunnage/`

Current page usage:
- Homepage product group cards use the new generated category images.
- `/timber` uses the new generated images for Manufacturing, Building & Construction, Outdoor & Landscaping, and Dunnage.
- Additional generated variants are kept in their matching product-group folders for future swaps or expansion.
