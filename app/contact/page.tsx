import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contact Sutcliffe Trading | Timber Enquiries NZ" },
  description: "Send your timber grade, dimensions, volume, treatment and delivery point to Sutcliffe Trading. Our New Zealand timber team will respond directly.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Sutcliffe Trading | Timber Enquiries NZ", description: "Send Sutcliffe Trading your commercial timber requirement and our New Zealand timber team will respond directly.", url: "/contact", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Contact Sutcliffe Trading for timber enquiries" }] },
  twitter: { card: "summary_large_image", title: "Contact Sutcliffe Trading | Timber Enquiries NZ", description: "Send your commercial timber requirement to the Sutcliffe Trading team.", images: ["/og.png"] },
};

export default function Contact(){
  const schema={"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.sutcliffetrading.com/"},{"@type":"ListItem",position:2,name:"Contact",item:"https://www.sutcliffetrading.com/contact"}]},{"@type":"ContactPage",name:"Contact Sutcliffe Trading",url:"https://www.sutcliffetrading.com/contact",mainEntity:{"@id":"https://www.sutcliffetrading.com/#organization"}}]};
  return <main className="motion-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <section className="contact-hero shell"><div><p className="eyebrow light">Auckland · New Zealand</p><h1>Timber enquiries.<br/><em>Tell us the specification.</em></h1></div><div className="contact-direct"><p>Enquiries go straight to our timber team.</p><a href="mailto:sales@sutcliffetrading.com">sales@sutcliffetrading.com ↗</a><a href="tel:+642108473262">+64 21 084 73262 ↗</a></div></section>
  <section className="contact-layout shell section-pad reveal"><div><p className="eyebrow">We&apos;ll tell you what is possible</p><h2 className="display-serif">What to include in<br/>your timber enquiry.</h2><p>Include the product or grade, dimensions, volume, treatment and delivery point if you have them. If some details are still open, tell us the job and our team will help narrow the requirement.</p></div><ContactForm/></section>
  <section className="contact-links shell motion-stagger"><a href="/timber"><span>Looking for a product?</span><b>Explore timber ↗</b></a><a href="/sustainability"><span>Need certification information?</span><b>View sustainability ↗</b></a></section>
</main>}
