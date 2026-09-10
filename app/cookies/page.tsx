import type { Metadata } from "next";
import { CookieSettingsButton } from "../components/AnalyticsConsent";

export const metadata: Metadata = {
  title: "Cookie Policy | Sutcliffe Trading",
  description: "Information about essential browser storage and optional Google Analytics cookies used by the Sutcliffe Trading website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicy() {
  return (
    <main className="legal-page">
      <section className="legal-hero shell">
        <p className="eyebrow">Privacy choices</p>
        <h1>Cookie Policy</h1>
        <p className="legal-updated">Last updated 10 September 2026</p>
      </section>

      <section className="legal-content shell">
        <p>
          This website uses a small amount of browser storage for essential privacy functionality and, if you allow it, Google Analytics cookies for website measurement.
        </p>

        <h2>Essential storage</h2>
        <p>
          We store your privacy choice in your browser so that the website remembers whether you allowed analytics or selected essential use only. This storage is necessary to remember your choice and does not track you across websites.
        </p>

        <h2>Analytics cookies</h2>
        <p>
          If you choose Allow analytics, the website loads Google Analytics 4. Google Analytics uses identifiers and cookies to help us understand website visits and usage, such as which pages are viewed, how visitors arrive at the site, and general browser and device information.
        </p>
        <p>
          Analytics is optional. Google Analytics does not load through this website until you allow it. Advertising storage, personalised advertising signals and Google Signals are disabled by our website configuration.
        </p>

        <h2>Your choice</h2>
        <p>
          You can allow analytics, choose essential use only, or change your choice later. Changing your preference stops future analytics loading. Cookies already stored by your browser may remain until they expire or you remove them through your browser settings.
        </p>
        <div className="legal-settings-control"><CookieSettingsButton /></div>

        <h2>Google Search Console</h2>
        <p>
          We use Google Search Console to understand how this website appears in Google Search. Search Console site verification and search reporting do not require us to place analytics cookies on visitors through this website.
        </p>

        <h2>More information</h2>
        <p>
          See our <a href="/privacy">Privacy Policy</a> for information about personal information, service providers, overseas processing and your access and correction rights.
        </p>
      </section>
    </main>
  );
}
