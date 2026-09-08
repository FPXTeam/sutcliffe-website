import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./pages.css";
import "./site-audit.css";
import "./brand-system.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sutcliffe-website.vercel.app"),
  title: {
    default: "Sutcliffe Trading | New Zealand Timber Supplier Since 1988",
    template: "%s | Sutcliffe Trading",
  },
  description:
    "New Zealand timber knowledge, trusted relationships and practical supply experience since 1988.",
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
    url: "https://sutcliffe-website.vercel.app/",
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
        {children}
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
