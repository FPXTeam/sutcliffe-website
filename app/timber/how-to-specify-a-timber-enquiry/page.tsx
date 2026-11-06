import type { Metadata } from "next";
import Link from "next/link";
import "../../pages.css";

export const metadata: Metadata = {
  title: { absolute: "Timber Enquiry Guide | Sutcliffe Trading" },
  description: "What to include in a timber enquiry: product, grade, sizes, moisture condition, quantity, delivery timing and receiving constraints.",
  alternates: { canonical: "/timber/how-to-specify-a-timber-enquiry" },
  openGraph: {
    type: "article",
    url: "/timber/how-to-specify-a-timber-enquiry",
    title: "Timber Enquiry Guide | Sutcliffe Trading",
    description: "What to include in a timber enquiry: product, grade, sizes, moisture condition, quantity, delivery timing and receiving constraints.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sutcliffe Trading timber enquiry guide" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Timber Enquiry Guide | Sutcliffe Trading",
    description: "What to include in a timber enquiry: product, grade, sizes, moisture condition, quantity, delivery timing and receiving constraints.",
    images: ["/og.png"]
  }
};

const steps = [
  ["Product or application", "Include the product or intended use, and the grade and treatment if specified."],
  ["Dimensions and condition", "Give thickness × width × length, and whether you need green or kiln-dried timber if relevant."],
  ["Quantity", "Use pieces, lineal metres, m³ or packets. If the quantity is not final, an estimate is useful."],
  ["Delivery timing and place", "Include the delivery town and required timing so freight and supply options can be considered."],
  ["Receiving constraints", "Let us know about unloading equipment, truck access or other site constraints."]
];

export default function TimberEnquiryGuide(){
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://www.sutcliffetrading.com/"},
      {"@type":"ListItem",position:2,name:"Timber",item:"https://www.sutcliffetrading.com/timber"},
      {"@type":"ListItem",position:3,name:"How to specify a timber enquiry",item:"https://www.sutcliffetrading.com/timber/how-to-specify-a-timber-enquiry"}
    ]},
    {"@type":"Article","@id":"https://www.sutcliffetrading.com/timber/how-to-specify-a-timber-enquiry#article",headline:"Timber enquiry guide",description:"A practical guide to the information commercial timber buyers should include in an enquiry.",datePublished:"2026-09-21",dateModified:"2026-09-21",author:{"@id":"https://www.sutcliffetrading.com/#organization"},publisher:{"@id":"https://www.sutcliffetrading.com/#organization"},mainEntityOfPage:"https://www.sutcliffetrading.com/timber/how-to-specify-a-timber-enquiry",inLanguage:"en-NZ"}
  ]};

  return <main className="motion-page knowledge-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="knowledge-hero shell">
      <p className="eyebrow">Timber buyer guide · Sutcliffe Trading</p><p className="knowledge-date">Published 21 September 2026</p>
      <h1>How to specify<br/><em>a timber request.</em></h1>
      <p className="knowledge-lede">Include the product or application, grade and treatment if specified, dimensions, green or kiln-dried condition if relevant, quantity, delivery town and timing, and receiving constraints. For export, include your destination. If some details are still open, describe the application and our team can help narrow the requirement.</p>
      <div className="actions"><a className="button button-dark" href="https://app.fpx.nz/explore-fpx-sourcing?request=1" target="_blank" rel="noreferrer">Request a quote</a><a className="text-link" href="https://app.fpx.nz/explore-fpx-sourcing" target="_blank" rel="noreferrer">Browse timber on FPX</a></div>
    </header>

    <section className="knowledge-layout shell section-pad">
      <aside><p className="eyebrow">The five essentials</p><h2 className="display-serif">What information should a timber enquiry include?</h2></aside>
      <div className="knowledge-steps">{steps.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="knowledge-layout shell section-pad rule-top">
      <aside><p className="eyebrow">When the specification is not final</p><h2 className="display-serif">Start with the job, not a guess.</h2></aside>
      <div className="knowledge-copy"><p>An initial enquiry can be useful before every detail is final. If you know the intended application, approximate volume, delivery location and the constraints that matter, include those first.</p><p>That gives the team enough context to review practical supply options rather than forcing a product choice before the requirement is clear.</p></div>
    </section>

    <section className="knowledge-layout shell section-pad rule-top">
      <aside><p className="eyebrow">Example</p><h2 className="display-serif">A useful first enquiry.</h2></aside>
      <div className="enquiry-example"><p>Please quote one full packet of 100 × 50 mm radiata pine in 4.8 m lengths for industrial packaging. Delivery to Hamilton, ideally during November. Please confirm grade, moisture condition, pieces per packet, availability and freight. We can unload by forklift.</p><p className="example-note">Illustrative enquiry, not a stock offer.</p></div>
    </section>

    <section className="knowledge-layout shell section-pad rule-top"><aside><p className="eyebrow">Minimum order</p><h2 className="display-serif">Order quantities.</h2></aside><div className="knowledge-copy"><p>For New Zealand deliveries, our minimum order is generally one full packet. For export, it is generally one 40-foot high-cube container. Packet sizes vary by product. Send your specification, quantity and delivery destination and we will confirm supply options.</p></div></section>

    <section className="related-timber shell section-pad rule-top">
      <p className="eyebrow">Explore by requirement</p>
      <div className="related-links">
        <Link href="/timber/manufacturing"><span>Manufacturing timber</span><b>Explore →</b></Link>
        <Link href="/timber/building-construction"><span>Building & construction</span><b>Explore →</b></Link>
        <Link href="/timber/outdoor-landscaping"><span>Outdoor & landscaping</span><b>Explore →</b></Link>
      </div>
      <p className="related-context">Need freight and load-support timber? See <Link href="/timber/dunnage">Radiata Pine dunnage</Link>.</p>
    </section>
  </main>;
}
