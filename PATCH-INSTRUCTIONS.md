# Sutcliffe Trading Legal Compliance Patch

This patch adds website privacy and cookie controls without modifying Timber product content or carousel files.

## Files changed or added

- `.env.example`
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/legal.css`
- `app/components/AnalyticsConsent.tsx`
- `app/components/ContactForm.tsx`
- `app/privacy/page.tsx`
- `app/cookies/page.tsx`

## Upload

Extract this ZIP and merge its contents into the root of the existing Sutcliffe Trading repository. Allow files with the same path to replace the existing version.

## Vercel environment variables

Add the following in Vercel Project Settings -> Environment Variables, then redeploy:

`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

Use the exact GA4 Web Data Stream Measurement ID for `sutcliffetrading.com`.

If Google Search Console verification uses an HTML verification tag, also add:

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=verification-token-only`

Use only the token from `content="..."`, not the whole meta tag.

If Search Console uses a Domain property verified with a DNS TXT record, do not add the second variable. The DNS verification continues when the website is moved to Vercel as long as the TXT record remains in DNS.

## Consent behaviour

- Essential browser storage remembers the visitor's privacy choice.
- Google Analytics 4 does not load before permission.
- `Allow analytics` enables GA4.
- `Essential only` leaves GA4 disabled.
- Advertising storage, Google Signals and personalised advertising signals remain disabled.
- Visitors can reopen Cookie settings from the footer.

## Final checks after deployment

1. Open the site in an incognito/private browser window.
2. Confirm the privacy choice dialog appears.
3. Before making a choice, confirm no `_ga` cookie exists and no Google Analytics request is sent.
4. Choose Essential only. Confirm GA4 remains inactive.
5. Clear site data, reload and choose Allow analytics. Confirm the GA4 request is sent and GA4 Realtime records the visit.
6. Open `/privacy` and `/cookies`.
7. Submit a test contact form and confirm delivery to `sales@sutcliffetrading.com`.
8. In Google Search Console, confirm ownership still shows as verified after DNS cutover.
9. Run Google Tag Assistant to verify the GA4 tag and consent behaviour.
