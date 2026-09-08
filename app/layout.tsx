import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./pages.css";
import "./site-audit.css";
import "./brand-system.css";
import "./motion.css";
import ScrollExperience from "./components/ScrollExperience";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sutcliffetrading.com"),
  title: {
    default: "Sutcliffe Trading | New Zealand Timber Supplier Since 1988",
    template: "%s | Sutcliffe Trading",
  },
  description:
    "New Zealand timber knowledge, trusted relationships and practical supply experience since 1988.",
  category: "Timber supply",
  robots: { index: true, follow: true },
  applicationName: "Sutcliffe Trading",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.sutcliffetrading.com/",
    siteName: "Sutcliffe Trading",
    title: "Sutcliffe Trading | New Zealand Timber Supplier Since 1988",
    description:
      "New Zealand-grown Radiata Pine backed by timber knowledge and established industry relationships since 1988.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sutcliffe Trading, New Zealand timber trading since 1988",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutcliffe Trading | New Zealand Timber Supplier Since 1988",
    description:
      "New Zealand-grown Radiata Pine backed by timber knowledge and established industry relationships since 1988.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ">
      <body>
        <header className="site-header shell">
          <Link className="brand" href="/" aria-label="Sutcliffe Trading home">
            <img src="/brand/sutcliffe-logo-original-horizontal.png" alt="Sutcliffe Trading" />
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/timber">Timber</Link>
            <Link href="/sustainability">Sustainability</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link className="header-cta" href="/contact">Request timber <span>↗</span></Link>
        </header>
        <ScrollExperience />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.sutcliffetrading.com/#organization",
              name: "Sutcliffe Trading",
              url: "https://www.sutcliffetrading.com/",
              logo: "https://www.sutcliffetrading.com/brand/sutcliffe-logo-original-square.png",
              foundingDate: "1988",
              email: "sales@sutcliffetrading.com",
              telephone: "+64 21 084 73262",
              areaServed: { "@type": "Country", name: "New Zealand" },
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
            <img src="/brand/sutcliffe-logo-original-square.png" alt="Sutcliffe Trading" />
            <p>New Zealand timber brokers<br />Supplying since 1988.</p>
          </div>
          <div>
            <span>Navigate</span>
            <Link href="/about">About</Link>
            <Link href="/timber">Timber</Link>
            <Link href="/sustainability">Sustainability</Link>
          </div>
          <div>
            <span>Contact</span>
            <a href="mailto:sales@sutcliffetrading.com">sales@sutcliffetrading.com</a>
            <a href="tel:+642108473262">+64 21 084 73262</a>
            <p>Auckland, New Zealand</p>
          </div>
          <div>
            <span>Elsewhere</span>
            <a href="https://www.linkedin.com/company/sutcliffe-trading/">LinkedIn ↗</a>
            <a href="https://www.fpx.nz/">FPX Sourcing ↗</a>
            <Link href="/terms-of-trade">Terms of Trade</Link>
          </div>
          <small>© 2026 Sutcliffe Trading</small>
        </footer>
      </body>
    </html>
  );
}
