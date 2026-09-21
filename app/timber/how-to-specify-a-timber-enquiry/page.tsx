import type { Metadata } from "next";
import Link from "next/link";
import "../../pages.css";

export const metadata: Metadata = {
  title: { absolute: "How to Specify a Timber Enquiry | Sutcliffe Trading NZ" },
  description: "A practical guide to the product, grade, dimensions, volume, treatment and delivery information to include in a commercial timber enquiry.",
  alternates: { canonical: "/timber/how-to-specify-a-timber-enquiry" },
  openGraph: {
    type: "article",
    url: "/timber/how-to-specify-a-timber-enquiry",
    title: "How to Specify a Timber Enquiry | Sutcliffe Trading NZ",
    description: "What to include in a commercial timber enquiry so a timber supplier can respond with practical options.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sutcliffe Trading timber enquiry guide" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Specify a Timber Enquiry | Sutcliffe Trading NZ",
    description: "What to include in a commercial timber enquiry so a timber supplier can respond with practical options.",
    images: ["/og.png"]
  }
};

const steps = [
  ["1. Product, grade or application", "If you know the product or grade, include it. If you do not, describe what the timber needs to do or the finished application so the requirement can be narrowed from there."],
  ["2. Dimensions", "Give the required thickness, width and length, including any flexibility that would still work for the job."],
  ["3. Quantity or volume", "State the number of pieces, packets or commercial volume you expect to require. If the quantity is not final, an estimated range is still useful."],
  ["4. Treatment requirement", "If treatment is required or already specified for the project, include that requirement. If it is still open, make the intended application clear."],
  ["5. Delivery point", "Include the delivery town, city or project location so freight and practical supply options can be considered from the start."]
];

export default function TimberEnquiryGuide(){
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://www.sutcliffetrading.com/"},
      {"@type":"ListItem",position:2,name:"Timber",item:"https://www.sutcliffetrading.com/timber"},
      {"@type":"ListItem",position:3,name:"How to specify a timber enquiry",item:"https://www.sutcliffetrading.com/timber/how-to-specify-a-timber-enquiry"}
    ]},
    {"@type":"Article","@id":"https://www.sutcliffetrading.com/timber/how-to-specify-a-timber-enquiry#article",headline:"How to specify a commercial timber enquiry",description:"A practical guide to the information commercial timber buyers should include in an enquiry.",datePublished:"2026-09-21",dateModified:"2026-09-21",author:{"@id":"https://www.sutcliffetrading.com/#organization"},publisher:{"@id":"https://www.sutcliffetrading.com/#organization"},mainEntityOfPage:"https://www.sutcliffetrading.com/timber/how-to-specify-a-timber-enquiry",inLanguage:"en-NZ"}
  ]};

  return <main className="motion-page knowledge-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="knowledge-hero shell">
      <p className="eyebrow">Timber buyer guide · Sutcliffe Trading</p><p className="knowledge-date">Published 21 September 2026</p>
      <h1>How to specify<br/><em>a timber enquiry.</em></h1>
      <p className="knowledge-lede">For a useful first response, include the product or grade, dimensions, quantity or volume, treatment requirement and delivery point. If some of those details are still open, describe the application and our team can help narrow the requirement.</p>
      <div className="actions"><Link className="button button-dark" href="/contact">Send an enquiry</Link><Link className="text-link" href="/timber">View timber range <span>→</span></Link></div>
    </header>

    <section className="knowledge-layout shell section-pad">
      <aside><p className="eyebrow">The five essentials</p><h2 className="display-serif">What information should a timber enquiry include?</h2></aside>
      <div className="knowledge-steps">{steps.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="knowledge-layout shell section-pad rule-top">
      <aside><p className="eyebrow">When the specification is not final</p><h2 className="display-serif">Start with the job, not a guess.</h2></aside>
      <div className="knowledge-copy"><p>You do not need every field finalised before contacting Sutcliffe Trading. If you know the intended application, approximate volume, delivery location and the constraints that matter, send those first.</p><p>That gives the timber team enough context to discuss practical supply options rather than forcing a product choice before the requirement is clear.</p></div>
    </section>

    <section className="knowledge-layout shell section-pad rule-top">
      <aside><p className="eyebrow">Example</p><h2 className="display-serif">A useful first enquiry.</h2></aside>
      <div className="enquiry-example"><p><b>Application:</b> Commercial outdoor project</p><p><b>Product:</b> Treated Radiata Pine posts and rails</p><p><b>Dimensions:</b> Required sizes and lengths listed</p><p><b>Volume:</b> Estimated commercial quantity</p><p><b>Treatment:</b> Project requirement included if known</p><p><b>Delivery:</b> Town, city or site location</p><p className="example-note">The point is not the format. It is giving enough context for the supplier to understand the requirement.</p></div>
    </section>

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
