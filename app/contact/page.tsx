import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import "../pages.css";

export const metadata: Metadata = {
  title: { absolute: "Contact Sutcliffe Trading | Timber Supply Enquiries" },
  description: "Discuss timber sourcing and supply with Sutcliffe Trading. Send your requirements through FPX, or contact our team by phone, email or enquiry form.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Sutcliffe Trading | Timber Supply Enquiries", description: "Discuss timber sourcing and supply with Sutcliffe Trading. Send your requirements through FPX, or contact our team by phone, email or enquiry form.", url: "/contact", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Contact Sutcliffe Trading for timber enquiries" }] },
  twitter: { card: "summary_large_image", title: "Contact Sutcliffe Trading | Timber Supply Enquiries", description: "Discuss timber sourcing and supply with Sutcliffe Trading by FPX, phone, email or enquiry form.", images: ["/og.png"] },
};

export default function Contact(){
  const schema={"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.sutcliffetrading.com/"},{"@type":"ListItem",position:2,name:"Contact",item:"https://www.sutcliffetrading.com/contact"}]},{"@type":"ContactPage",name:"Contact Sutcliffe Trading",url:"https://www.sutcliffetrading.com/contact",mainEntity:{"@id":"https://www.sutcliffetrading.com/#organization"}}]};
  return <main className="motion-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <section className="contact-hero shell"><Image className="page-hero-image contact-hero-image" src="/contact-timber-desk.jpg" alt="" fill priority fetchPriority="high" decoding="sync" sizes="100vw" /><div><p className="eyebrow light">New Zealand · International supply</p><h1>Talk to us<br/><em>about timber supply.</em></h1></div><div className="contact-direct"><p>Use FPX to send a detailed timber request, or contact our team to discuss what you need.</p><a href="mailto:sales@sutcliffetrading.com">sales@sutcliffetrading.com</a><a href="tel:+642108473262">+64 21 084 73262</a></div></section>
  <section className="contact-layout shell section-pad reveal"><div><p className="eyebrow">We&apos;ll tell you what is possible</p><h2 className="display-serif">How can we help?</h2><p>Use FPX to send a detailed timber request, or contact our team to discuss what you need.</p><p>For New Zealand deliveries, our minimum order is generally one full packet. For export, it is generally one 40-foot high-cube container. Packet sizes vary by product. Send your specification, quantity and delivery destination and we will confirm supply options.</p><a className="button button-dark" href="https://app.fpx.nz/explore-fpx-sourcing?request=1" target="_blank" rel="noreferrer">Request a quote</a><small className="request-helper">Submit your timber requirements through FPX Sourcing.</small></div><ContactForm/></section>
  <section className="contact-links shell motion-stagger"><a href="https://app.fpx.nz/explore-fpx-sourcing" target="_blank" rel="noreferrer"><span>Looking for timber?</span><b>Browse timber on FPX</b></a><a href="/sustainability"><span>Need certification information?</span><b>View sustainability</b></a></section>
</main>}
