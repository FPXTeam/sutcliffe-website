import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./pages.css";
import "./site-audit.css";

export const metadata: Metadata = {
  title:"Sutcliffe Trading | New Zealand Timber Supplier Since 1988",
  description:"New Zealand Radiata Pine supplied to manufacturers, merchants and construction, backed by timber trading experience since 1988.",
  openGraph:{title:"Sutcliffe Trading",description:"New Zealand timber, sourced with certainty.",images:["/og.png"]},
  twitter:{card:"summary_large_image",title:"Sutcliffe Trading",description:"New Zealand timber, sourced with certainty.",images:["/og.png"]}
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>
  <header className="site-header shell"><Link className="brand" href="/" aria-label="Sutcliffe Trading home"><img src="/sutcliffe-logo.png" alt="Sutcliffe Trading"/></Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/timber">Timber</Link><Link href="/sustainability">Sustainability</Link><Link href="/contact">Contact</Link></nav><Link className="header-cta" href="/contact">Request timber <span>↗</span></Link></header>
  {children}
  <footer className="site-footer shell"><div><img src="/sutcliffe-logo.png" alt="Sutcliffe Trading"/><p>New Zealand timber brokers<br/>Supplying since 1988.</p></div><div><span>Navigate</span><Link href="/about">About</Link><Link href="/timber">Timber</Link><Link href="/sustainability">Sustainability</Link></div><div><span>Contact</span><a href="mailto:sales@sutcliffetrading.com">sales@sutcliffetrading.com</a><a href="tel:+642108473262">+64 21 084 73262</a><p>Auckland, New Zealand</p></div><div><span>Elsewhere</span><a href="https://www.linkedin.com/company/sutcliffe-trading/">LinkedIn ↗</a><a href="https://www.fpx.nz/">FPX Sourcing ↗</a><Link href="/terms-of-trade">Terms of Trade</Link></div><small>© 2026 Sutcliffe Trading</small></footer>
</body></html>}
