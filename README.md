# Sutcliffe Trading Website

Production-ready Next.js website for Sutcliffe Trading.

## Stack
- Next.js 16
- React 19
- TypeScript

## Local setup
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run start
```

## Vercel environment variables
The contact form uses Resend. Configure these in the Vercel project:

- `RESEND_API_KEY`
- `CONTACT_EMAIL=sales@sutcliffetrading.com`
- `CONTACT_FROM=website@sutcliffetrading.com`

Do not commit the real API key.

## Timber carousel assets
Manufacturing carousel images:
`public/images/product-groups/manufacturing/carousel/`

Outdoor & Landscaping product carousel images:
`public/images/product-groups/outdoor-landscaping/products/`

The Timber page uses individual image files. The old atlas/sprite approach is not used.

Manufacturing uses 12 carousel images total: 2 existing site images plus 10 revamped product images.
Outdoor & Landscaping uses 9 actual product images.
