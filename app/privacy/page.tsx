import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Sutcliffe Trading",
  description: "How Sutcliffe Trading Limited collects, uses, stores and protects personal information when you use our website or contact our team.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <section className="legal-hero shell">
        <p className="eyebrow">Sutcliffe Trading Limited</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated 10 September 2026</p>
      </section>

      <section className="legal-content shell">
        <p>
          Sutcliffe Trading Limited respects your privacy and handles personal information in accordance with the New Zealand Privacy Act 2020. This policy explains what information we collect through this website, why we collect it, how we use it and the choices available to you.
        </p>

        <h2>1. Information we collect</h2>
        <p>We may collect personal information when you contact us or use this website, including:</p>
        <ul>
          <li>your name, work email address and company;</li>
          <li>information you include in a timber enquiry or other correspondence;</li>
          <li>technical information about your browser, device and use of the website when you allow analytics; and</li>
          <li>your cookie and analytics preference.</li>
        </ul>

        <h2>2. Why we collect and use information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>respond to enquiries and communicate with customers and prospective customers;</li>
          <li>understand and fulfil timber sourcing and supply requirements;</li>
          <li>operate, protect and improve our website and services;</li>
          <li>measure website performance and usage where analytics has been allowed; and</li>
          <li>meet legal, accounting, security and business record requirements.</li>
        </ul>
        <p>
          If information requested in our enquiry form is marked as required, we need that information to respond properly to your enquiry. You can contact us directly by email or phone if you prefer not to use the form.
        </p>

        <h2>3. Google Analytics and cookies</h2>
        <p>
          We use Google Analytics 4 only when you choose to allow analytics. Google Analytics may collect information such as pages viewed, approximate location, browser and device information, referral information and interaction data. Analytics cookies are not loaded until you give permission on this website.
        </p>
        <p>
          We do not use the website consent mechanism to enable advertising cookies, Google Signals or personalised advertising. You can change your analytics choice at any time using the Cookie settings control in the website footer. See our <Link href="/cookies">Cookie Policy</Link> for more detail.
        </p>

        <h2>4. Service providers and overseas processing</h2>
        <p>
          We use third-party service providers to operate this website and handle communications. These may include Vercel for website hosting and delivery, Resend for delivery of website enquiry emails, and Google for analytics when you have allowed it. These providers may process or store information outside New Zealand.
        </p>
        <p>
          Where personal information is handled outside New Zealand, we take reasonable steps to use providers and arrangements that protect information appropriately and to meet our obligations under the Privacy Act 2020, including the requirements that apply to overseas disclosures where relevant.
        </p>

        <h2>5. Disclosure of information</h2>
        <p>
          We do not sell personal information. We may share information with service providers acting for us, with professional advisers where necessary, or where disclosure is required or permitted by law. We limit disclosure to what is reasonably necessary for the relevant purpose.
        </p>

        <h2>6. Retention and security</h2>
        <p>
          We keep personal information only for as long as it is reasonably required for the purpose for which it was collected, for legitimate business records, or to meet legal obligations. We take reasonable technical and organisational steps to protect personal information from loss, misuse, unauthorised access, alteration or disclosure.
        </p>

        <h2>7. Access and correction</h2>
        <p>
          You can ask us for access to personal information we hold about you and request correction if you believe it is inaccurate. We may need to verify your identity before responding to a request.
        </p>

        <h2>8. Links to other websites</h2>
        <p>
          Our website may link to third-party websites, including FPX and LinkedIn. Their privacy practices are governed by their own policies. We are not responsible for the privacy practices of third-party websites.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy when our website, service providers or legal obligations change. The current version will be published on this page with the date of the latest update.
        </p>

        <h2>10. Contact us</h2>
        <p>
          For privacy questions, access or correction requests, contact Sutcliffe Trading Limited at <a href="mailto:sales@sutcliffetrading.com">sales@sutcliffetrading.com</a> or phone <a href="tel:+642108473262">+64 21 084 73262</a>.
        </p>
      </section>
    </main>
  );
}
