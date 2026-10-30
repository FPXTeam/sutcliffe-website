import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import "../pages.css";

export const metadata: Metadata = {
  title: { absolute: "Contact Sutcliffe Trading | General Enquiries" },
  description: "Contact Sutcliffe Trading for general enquiries. For timber requests and quotes, use the FPX request workflow.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Sutcliffe Trading | General Enquiries", description: "Contact Sutcliffe Trading for general enquiries. Timber requests and quotes can be sent through FPX.", url: "/contact", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Contact Sutcliffe Trading for timber enquiries" }] },
  twitter: { card: "summary_large_image", title: "Contact Sutcliffe Trading | General Enquiries", description: "Contact the Sutcliffe Trading team for general enquiries.", images: ["/og.png"] },
};

export default function Contact(){
  const schema={"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.sutcliffetrading.com/"},{"@type":"ListItem",position:2,name:"Contact",item:"https://www.sutcliffetrading.com/contact"}]},{"@type":"ContactPage",name:"Contact Sutcliffe Trading",url:"https://www.sutcliffetrading.com/contact",mainEntity:{"@id":"https://www.sutcliffetrading.com/#organization"}}]};
  return <main className="motion-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <section className="contact-hero shell"><Image className="page-hero-image contact-hero-image" src="/contact-timber-desk.jpg" alt="" fill priority fetchPriority="high" decoding="sync" sizes="100vw" /><div><p className="eyebrow light">Auckland · New Zealand</p><h1>Contact Sutcliffe.<br/><em>General enquiries.</em></h1></div><div className="contact-direct"><p>For timber requests and quotes, use FPX. For general enquiries, contact our team directly.</p><a href="mailto:sales@sutcliffetrading.com">sales@sutcliffetrading.com ↗</a><a href="tel:+642108473262">+64 21 084 73262 ↗</a></div></section>
  <section className="contact-layout shell section-pad reveal"><div><p className="eyebrow">We&apos;ll tell you what is possible</p><h2 className="display-serif">How can we help?</h2><p>Use this form for general questions about Sutcliffe Trading. To request timber or ask for a quote, send your requirements through FPX.</p><a className="text-link" href="https://app.fpx.nz/explore-fpx-sourcing?request=1" target="_blank" rel="noreferrer">Request Timber / Request a Quote ↗</a></div><ContactForm/></section>
  <section className="contact-links shell motion-stagger"><a href="https://app.fpx.nz/explore-fpx-sourcing" target="_blank" rel="noreferrer"><span>Looking for timber?</span><b>Browse Timber ↗</b></a><a href="/sustainability"><span>Need certification information?</span><b>View sustainability ↗</b></a></section>
</main>}
