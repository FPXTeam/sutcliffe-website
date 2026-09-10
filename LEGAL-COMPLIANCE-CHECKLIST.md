# Sutcliffe Trading Website Compliance Checklist

This is an operational website compliance checklist, not a substitute for legal advice on Sutcliffe Trading's specific contracts or business practices.

## Implemented by this patch

- Privacy Policy page at `/privacy`.
- Cookie Policy page at `/cookies`.
- First-visit privacy choice for analytics.
- Google Analytics 4 blocked until analytics permission is given.
- Essential-only option with no GA4 loading.
- Cookie settings control in the footer so visitors can change their choice.
- Advertising storage, Google Signals and personalised advertising signals disabled in the website GA4 configuration.
- Contact-form privacy notice linking to the Privacy Policy.
- Privacy Policy, Cookie Policy and Cookie settings links in the footer.
- Privacy and Cookie pages added to the XML sitemap.
- Optional Google Search Console HTML verification support through a Vercel environment variable.

## Business actions still required

### 1. Appoint a Privacy Officer
New Zealand organisations need a privacy officer. Record internally who holds the role and make sure that person knows how to handle access, correction, complaints and breach response. The public privacy contact can remain `sales@sutcliffetrading.com` if that is the address the business wants to monitor for privacy requests.

### 2. Confirm the actual GA4 Measurement ID
In GA4, open Admin -> Data streams -> Web and copy the Measurement ID beginning with `G-`. Add it to Vercel as `NEXT_PUBLIC_GA_MEASUREMENT_ID` for Production and Preview as appropriate.

### 3. Confirm Search Console verification method
- Domain property verified through DNS TXT: keep the DNS TXT record. No website code is required.
- URL-prefix property verified through an HTML meta tag: add only the verification token to Vercel as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

### 4. Review third-party processing
Confirm the business is comfortable using Vercel, Resend and Google Analytics and keep records of the relevant service terms/data processing arrangements. Review where data is processed and how the arrangements satisfy New Zealand Privacy Act obligations for overseas processing or disclosure.

### 5. Set a retention practice
Decide how long timber enquiries and customer correspondence should be retained. Personal information should not be kept longer than necessary for the lawful purpose, subject to any separate accounting, tax, contract or legal record obligations.

### 6. Have a privacy-breach process
Maintain an internal process for investigating data incidents. A breach that has caused or is likely to cause serious harm may need to be reported to the Office of the Privacy Commissioner and affected people as soon as practicable.

### 7. Keep enquiry data separate from marketing consent
A timber enquiry should not automatically subscribe someone to newsletters or promotional email. If marketing email is introduced, record the appropriate consent basis, identify the sender and provide a working unsubscribe facility.

### 8. Substantiate website claims
Keep evidence for factual claims, especially:
- established/supplying since 1988;
- nationwide supply or delivery statements;
- product, grade and treatment descriptions;
- FSC certification and licence statements;
- sustainability and carbon-sequestration statistics;
- any availability, pricing or performance statements.

### 9. Verify FSC trademark and certificate use
Before launch, confirm the displayed FSC licence/certificate details are current and that logo/trademark use on the website follows the applicable FSC trademark approval requirements.

### 10. Confirm rights to website assets
Keep permission/licences for all photographs, logos, fonts, illustrations and other third-party creative assets used on the site.

### 11. Review Terms of Trade separately
The existing Terms of Trade are retained unchanged. Have the business or its lawyer confirm they remain current for Sutcliffe Trading Limited, especially payment, retention of title, PPSA, returns, warranty limitations and any consumer/small-trade contract implications.

### 12. Accessibility and security
Accessibility is also good compliance and risk practice. Keep keyboard navigation, readable contrast, meaningful alt text, labelled forms, HTTPS, dependency updates, restricted Vercel access and secure handling of API keys. Never expose `RESEND_API_KEY` in browser-side code.

## Launch test

- Test privacy banner in a fresh browser session.
- Confirm no `_ga` cookie before analytics permission.
- Confirm Essential only keeps GA4 inactive.
- Confirm Allow analytics creates the expected GA4 activity.
- Confirm Cookie settings can change the choice later.
- Test `/privacy`, `/cookies`, `/terms-of-trade` and footer links.
- Test the contact form and its privacy notice.
- Check GA4 Realtime.
- Check Google Tag Assistant.
- Check Search Console ownership after the DNS/domain cutover.
- Confirm the production domain uses HTTPS and redirects consistently to the preferred canonical host.
