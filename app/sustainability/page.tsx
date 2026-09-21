import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustainable Timber & FSC® Certification NZ",
  description:
    "Learn about Sutcliffe Trading's FSC® certified timber, carbon sequestration and sustainable resource management in New Zealand.",
  alternates: {
    canonical: "/sustainability",
  },
  openGraph: {
    title: "Sustainable Timber & FSC® Certification NZ | Sutcliffe Trading",
    description:
      "Learn about Sutcliffe Trading's FSC® certified timber, carbon sequestration and sustainable resource management in New Zealand.",
    url: "/sustainability",
    type: "website",
    images: [{ url: "/sustainability-canopy.jpg", alt: "New Zealand plantation forest canopy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainable Timber & FSC® Certification NZ | Sutcliffe Trading",
    description:
      "Learn about Sutcliffe Trading's FSC® certified timber, carbon sequestration and sustainable resource management in New Zealand.",
  },
};

export default function Sustainability(){
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://www.sutcliffetrading.com/"},
      {"@type":"ListItem",position:2,name:"Sustainability",item:"https://www.sutcliffetrading.com/sustainability"}
    ]},
    {"@type":"WebPage","@id":"https://www.sutcliffetrading.com/sustainability#webpage",url:"https://www.sutcliffetrading.com/sustainability",name:"Sustainable Timber & FSC® Certification NZ",about:{"@id":"https://www.sutcliffetrading.com/#organization"},inLanguage:"en-NZ"}
  ]};
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <section className="inner-hero shell sustainability-hero"><Image className="page-hero-image sustainability-hero-image" src="/sustainability-canopy.jpg" alt="" fill priority fetchPriority="high" sizes="100vw" /><p className="eyebrow light">Sustainability at Sutcliffe Trading</p><h1>Sustainable timber.<br/><em>Responsible by requirement.</em></h1><p>Sustainably sourced forest products, responsible management and a renewable New Zealand resource.</p></section>
  <section className="approved-copy shell section-pad"><aside><p className="eyebrow">01 · Certification</p><h2 className="display-serif">FSC® Certified Timber</h2><Image className="fsc-certification-logo" src="/fsc-c189678-green-white.png" alt="FSC® certification mark, licence FSC C189678" width={1024} height={1673} sizes="210px" loading="lazy" /></aside><article><p>Sutcliffe Trading is committed to sustainably sourcing forest products from responsible forest management.</p><p>The timber we provide, bearing the FSC label, is cultivated, processed, and transported in strict adherence to the rigorous standards set by the FSC.<sup><a className="source-ref" href="#source-fsc" aria-label="Source 1">1</a></sup></p><p>By obtaining FSC certification, our clients have the opportunity to designate their products accordingly, empowering consumers to make conscious decisions in favor of sustainably governed forests.</p><p>We have a policy to show our commitment to core labour requirements which is available on request as well as our FSC certificate.<sup><a className="source-ref" href="#source-fsc" aria-label="Source 1">1</a></sup></p><div className="actions"><Link className="button button-dark" href="/contact">Request our FSC Certificate</Link><Link className="text-link" href="/contact">Request our Core Labour Requirements Policy <span>↗</span></Link></div></article></section>
  <section className="approved-copy shell section-pad rule-top"><aside><p className="eyebrow">02 · Carbon</p><h2 className="display-serif">Carbon Sequestration</h2></aside><article><p>Radiata pine plantations serve as valuable &quot;carbon sinks&quot; as trees store carbon. Approximately 50% of the wood&apos;s dry matter consists of carbon, predominantly cellulose (around 65%) and lignin (around 30%). Depending on the growth rate and wood density, a hectare of pine trees can sequester four to seven tonnes of elemental carbon annually, which is equivalent to absorbing 15–26 tonnes of carbon dioxide from the atmosphere. A forest spanning 1,000 hectares has the potential to absorb 15,000–26,000 tonnes of carbon dioxide each year.<sup><a className="source-ref" href="#source-teara" aria-label="Source 2">2</a></sup></p><p>Wood products derived from New Zealand&apos;s logs contribute to delaying the release of carbon that was previously sequestered by the trees, often for decades. In the case of long-lasting wood products, carbon is gradually released as the product naturally decays. This &quot;delayed emission&quot; plays a role in achieving our climate change targets. In 2019, the carbon stored in wood products contributed approximately 9 million tonnes of carbon dioxide equivalent (Mt CO2-e).<sup><a className="source-ref" href="#source-mpi" aria-label="Source 3">3</a></sup></p></article></section>
  <section className="approved-copy shell section-pad rule-top"><aside><p className="eyebrow">03 · Resource</p><h2 className="display-serif">Sustainable Resource Management</h2></aside><article><p>Radiata Pine in New Zealand is cultivated in sustainably managed plantation forests, presenting a perfect substitute for endangered tropical timbers. The continuous growth of pine resources in New Zealand guarantees sustainable levels of harvesting for our future generation. As a result, we offer a natural wood product derived from a replenishable resource.</p><p>In an era where the global shift from fossil fuels to a sustainable, bio-based economy is underway, the significance of forestry as a primary provider of renewable and sustainable resources for New Zealand will only grow. Global demand for sustainable wood fibre is expected to quadruple by 2050 as countries seek to use wood and woody biomass to decarbonise their economies.<sup><a className="source-ref" href="#source-mpi" aria-label="Source 3">3</a></sup></p><p>The role forest products play in our society and economy will gain even greater importance.</p></article></section>
  <section className="sustainability-sources shell section-pad rule-top">
    <div><p className="eyebrow">Sources & references</p><h2 className="display-serif">Verifiable information.</h2><p>Key sustainability statements on this page are linked to primary or authoritative New Zealand and FSC sources.</p></div>
    <ol>
      <li id="source-fsc"><b>1 · Forest Stewardship Council</b><a href="https://anz.fsc.org/chain-of-custody-certification" target="_blank" rel="noopener noreferrer">FSC Chain of Custody certification and core labour requirements ↗</a></li>
      <li id="source-teara"><b>2 · Te Ara — Encyclopedia of New Zealand</b><a href="https://teara.govt.nz/en/radiata-pine/page-5" target="_blank" rel="noopener noreferrer">Radiata pine carbon sinks and sequestration ranges ↗</a></li>
      <li id="source-mpi"><b>3 · Ministry for Primary Industries</b><a href="https://www.mpi.govt.nz/dmsdocument/55684/direct/" target="_blank" rel="noopener noreferrer">Forestry and Wood Processing Industry Transformation Plan ↗</a></li>
    </ol>
  </section>
  <section className="related-timber shell section-pad rule-top"><p className="eyebrow">Related information</p><div className="related-links"><Link href="/timber"><span>New Zealand Radiata Pine</span><b>View timber range →</b></Link><Link href="/about"><span>Experience since 1988</span><b>About Sutcliffe →</b></Link><Link href="/contact"><span>Need certified timber?</span><b>Send an enquiry →</b></Link></div></section>
  <section className="closing shell"><p className="eyebrow light">Join our commitment to the environment</p><h2>Source with<br/>confidence.</h2><Link className="button button-light" href="/contact">Talk to our team</Link></section>
</main>}
