import Link from "next/link";

const featured = [
  {
    name:"Manufacturing",
    description:"Timber feedstock for wood processors and manufacturers.",
    image:"/category-manufacturing.png",
    href:"/timber#manufacturing"
  },
  {
    name:"Building & Construction",
    description:"Structural, building, finishing and specialist construction timber.",
    image:"/category-stress.png",
    href:"/timber#building"
  },
  {
    name:"Outdoor & Landscaping",
    description:"Treated and purpose-made timber for outdoor construction and landscaping.",
    image:"/category-outdoor.png",
    href:"/timber#outdoor"
  },
  {
    name:"Dunnage",
    description:"Timber for freight, shipping, load support and industrial transport.",
    image:"/timber-packet.png",
    href:"/timber#dunnage"
  },
];
const faqs = [
  ["What species do you trade?","We specialise in New Zealand-grown Radiata Pine across appearance, manufacturing, packaging, outdoor and structural grades."],
  ["Do you own a mill?","No. Sutcliffe Trading is an independent timber merchant. We source through established relationships with New Zealand sawmills and manufacturers."],
  ["What is the minimum order?","Orders are generally supplied by packet or commercial volume. Send us the grade, dimensions, volume and delivery point and we will confirm what is possible."],
  ["Can you supply certified timber?","Yes. FSC® certified timber and chain-of-custody documentation are available for qualifying orders. Our certificate and core labour requirements policy are available on request."],
  ["How does this relate to FPX?","FPX Sourcing is supported by Sutcliffe Trading. You can work with our team directly or explore available timber through FPX."],
];

export default function Home() { return <main>
  <section className="hero hero-wide"><div className="hero-inner shell"><div className="hero-copy reveal"><p className="eyebrow light">New Zealand timber trading</p><h1>Timber trading.<br/><em>Since 1988.</em></h1><p className="hero-lede">New Zealand-grown Radiata Pine sourced through established mill and manufacturing relationships.</p><div className="actions"><Link className="button button-light" href="/timber">What we supply</Link><Link className="text-link light-link" href="/contact">Talk to us <span>↗</span></Link></div></div><div className="hero-index">EST. 1988 · NZ</div></div></section>
  <div className="timber-ticker" aria-label="Timber supply capabilities"><div className="ticker-track"><span>Radiata Pine</span><i>•</i><span>Manufacturing</span><i>•</i><span>Building & Construction</span><i>•</i><span>Outdoor & Landscaping</span><i>•</i><span>Dunnage</span><i>•</i><span>Nationwide Supply</span><i>•</i><span>Radiata Pine</span><i>•</i><span>Manufacturing</span><i>•</i><span>Building & Construction</span><i>•</i><span>Outdoor & Landscaping</span><i>•</i><span>Dunnage</span><i>•</i><span>Nationwide Supply</span><i>•</i></div></div>

  <section className="manifesto shell section-pad"><p className="eyebrow reveal">The merchant behind the order</p><div className="manifesto-grid"><h2 className="display-serif reveal">Nearly four decades<br/>of the same handshake.</h2><div className="prose reveal"><p>Sutcliffe Trading supplies New Zealand-grown Radiata Pine direct from leading sawmills and manufacturers.</p><p>From manufacturing feedstock through to structural and construction timber, outdoor and landscaping products, dunnage and custom specifications, we know the mills, the grades and what to avoid for a given requirement.</p><Link className="text-link" href="/about">Read our story <span>↗</span></Link></div></div></section>

  <section className="range section-pad"><div className="shell range-heading"><div><p className="eyebrow reveal">Our timber range</p><h2 className="display-serif reveal">Four product groups.</h2></div><p className="range-note reveal">Start with the type of timber you need. Current products, stock and specifications are available through FPX.</p></div><div className="category-rail">{featured.map((item,index)=><Link className="category reveal" href={item.href} key={item.name}><span className="category-no">{String(index+1).padStart(2,"0")}</span><div className="category-art" aria-hidden="true"><img src={item.image} alt=""/></div><h3>{item.name}</h3><p className="category-summary">{item.description}</p><span className="category-link">Explore product group →</span></Link>)}</div><div className="shell range-footer"><Link className="button button-dark" href="/timber">Explore our full range</Link></div></section>

  <section className="merchant-proof shell section-pad"><p className="eyebrow">Why buyers stay with Sutcliffe</p><div className="proof-grid"><div><span>01</span><h3>One team</h3><p>You deal with the same people from enquiry to delivery.</p></div><div><span>02</span><h3>Mill knowledge</h3><p>We know which mills cut which grades well and which ones suit a particular specification.</p></div><div><span>03</span><h3>We carry the order</h3><p>Specification, scheduling, freight and follow-up sit with us, not with you.</p></div><div><span>04</span><h3>Repeat business</h3><p>Most of our volume goes to buyers we have supplied for years.</p></div></div></section>

  <section className="fpx-editorial shell section-pad reveal"><div className="fpx-copy"><p className="eyebrow">Digital sourcing</p><h2 className="display-serif">Traditional timber knowledge.<br/><em>Now easier to access.</em></h2><p>FPX Sourcing brings Sutcliffe Trading&apos;s product knowledge and supply relationships into a simpler way to find and source timber.</p><a className="button button-dark" href="https://www.fpx.nz/" target="_blank" rel="noreferrer">Explore FPX Sourcing ↗</a></div><div className="fpx-emblem"><img src="/fpx-sourcing-logo.png" alt="FPX Sourcing"/><span>Search current stock · Post a requirement · Work with experienced traders</span></div></section>

  <section className="sustain-teaser sustain-wide reveal"><div className="forest-lines" aria-hidden="true"/><div className="sustain-inner shell"><div className="sustain-copy"><p className="eyebrow light">Responsible sourcing</p><h2>Certified timber.<br/><em>Clear accountability.</em></h2><p>We are committed to sustainably sourcing forest products from responsible forest management, with FSC® documentation available on request.</p><Link className="button button-light" href="/sustainability">Our sustainability commitment</Link></div><span className="sustain-side-note">New Zealand-grown Radiata Pine · Responsible forest management</span></div></section>

  <section className="faq shell section-pad"><div className="faq-heading reveal"><p className="eyebrow">FAQ</p><h2 className="display-serif">Common questions.</h2></div><div className="faq-list">{faqs.map(([question,answer],index)=><details className="reveal" key={question} open={index===0}><summary><span>{String(index+1).padStart(2,"0")}</span>{question}<b>＋</b></summary><p>{answer}</p></details>)}</div></section>
  <section className="closing shell"><p className="eyebrow light">Get in touch</p><h2>Tell us the specification.<br/>We&apos;ll tell you what&apos;s possible.</h2><Link className="button button-light" href="/contact">Start an enquiry</Link><span className="closing-mark">Direct to our team</span></section>
</main> }

// Visual QA pass is loaded globally from site-audit.css.
