import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import "./site-audit.css";
import "./brand-system.css";
import "./motion.css";
import "./mobile-navigation.css";
import MobileNavigation from "./components/MobileNavigation";
import AnalyticsConsent, { CookieSettingsButton } from "./components/AnalyticsConsent";
import "./legal.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sutcliffetrading.com"),
  title: {
    default: "Sutcliffe Trading | Sourcing New Zealand Timber Since 1988",
    template: "%s | Sutcliffe Trading",
  },
  description:
    "Sourcing and supplying New Zealand timber through sawmills and timber processors since 1988.",
  category: "Timber supply",
  robots: { index: true, follow: true },
  applicationName: "Sutcliffe Trading",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.sutcliffetrading.com/",
    siteName: "Sutcliffe Trading",
    title: "Sutcliffe Trading | Sourcing New Zealand Timber Since 1988",
    description:
      "Sutcliffe Trading sources New Zealand timber for manufacturers, merchants and commercial buyers in New Zealand and overseas.",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Sutcliffe Trading, New Zealand timber trading since 1988" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutcliffe Trading | Sourcing New Zealand Timber Since 1988",
    description:
      "Sutcliffe Trading sources New Zealand timber for manufacturers, merchants and commercial buyers in New Zealand and overseas.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <header className="site-header shell">
          <Link className="brand" href="/" aria-label="Sutcliffe Trading home">
            <Image src="/brand/sutcliffe-logo-original-horizontal.png" alt="Sutcliffe Trading" width={2048} height={682} sizes="(max-width: 900px) 142px, 188px" loading="eager" fetchPriority="low" />
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/timber">Timber</Link>
            <Link href="/sustainability">Sustainability</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="header-cta" href="https://app.fpx.nz/explore-fpx-sourcing?request=1" target="_blank" rel="noreferrer">Request Timber/Quote <span className="header-cta-arrow" aria-hidden="true"></span></a>
          <MobileNavigation />
        </header>
        <AnalyticsConsent />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.sutcliffetrading.com/#organization",
              name: "Sutcliffe Trading",
              legalName: "Sutcliffe Trading Limited",
              description: "Sourcing and supplying New Zealand timber through sawmills and timber processors since 1988.",
              url: "https://www.sutcliffetrading.com/",
              logo: "https://www.sutcliffetrading.com/brand/sutcliffe-logo-original-square.png",
              foundingDate: "1988",
              founder: { "@id": "https://www.sutcliffetrading.com/about#bill-sutcliffe" },
              employee: { "@id": "https://www.sutcliffetrading.com/about#george-harman" },
              email: "sales@sutcliffetrading.com",
              telephone: "+64 21 084 73262",
              address: { "@type": "PostalAddress", addressLocality: "Auckland", addressCountry: "NZ" },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: "+64 21 084 73262",
                email: "sales@sutcliffetrading.com",
                areaServed: "NZ",
                availableLanguage: "English"
              },
              areaServed: { "@type": "Country", name: "New Zealand" },
              knowsAbout: ["Radiata Pine", "timber supply", "manufacturing timber", "building and construction timber", "outdoor and landscaping timber", "timber dunnage"],
              sameAs: ["https://www.linkedin.com/company/sutcliffe-trading/"]
            },
            {
              "@type": "WebSite",
              "@id": "https://www.sutcliffetrading.com/#website",
              url: "https://www.sutcliffetrading.com/",
              name: "Sutcliffe Trading",
              publisher: { "@id": "https://www.sutcliffetrading.com/#organization" },
              inLanguage: "en-NZ"
            }
          ]
        }) }} />
        <footer className="site-footer shell">
          <div>
            <Image src="/brand/sutcliffe-logo-original-square.png" alt="Sutcliffe Trading logo" width={1254} height={1254} sizes="(max-width: 900px) 112px, 130px" loading="lazy" />
            <p>Sourcing and supplying New Zealand timber<br />Since 1988.</p>
          </div>
          <div>
            <span>Navigate</span>
            <Link href="/about">About</Link>
            <Link href="/timber">Timber groups</Link>
            <Link href="/sustainability">Sustainability</Link>
          </div>
          <div>
            <span>Contact</span>
            <a href="mailto:sales@sutcliffetrading.com">sales@sutcliffetrading.com</a>
            <a href="tel:+642108473262">+64 21 084 73262</a>
            <a href="https://share.google/KfADiFmeFpedG20pX" target="_blank" rel="noopener noreferrer">Auckland, New Zealand </a>
          </div>
          <div>
            <span>Elsewhere</span>
            <a href="https://www.linkedin.com/company/sutcliffe-trading/">LinkedIn </a>
            <a href="https://app.fpx.nz/explore-fpx-sourcing" target="_blank" rel="noreferrer">Browse Timber </a>
            <a href="https://app.fpx.nz/explore-fpx-sourcing?request=1" target="_blank" rel="noreferrer">Request Timber/Quote </a>
          </div>
          <div className="footer-bottom">
            <small>© 2026 Sutcliffe Trading</small>
            <div className="footer-legal-links" aria-label="Legal links">
              <Link href="/terms-of-trade">Terms of Trade</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/cookies">Cookie Policy</Link>
              <CookieSettingsButton />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
