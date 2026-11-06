import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../pages.css";

type Group = {
  name: string;
  eyebrow: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  categories: string[];
  intent: string;
  ogTitle: string;
  metaDescription: string;
};

const groups: Record<string, Group> = {
  manufacturing: {
    name: "Manufacturing",
    eyebrow: "Radiata Pine for manufacturing",
    description: "Radiata pine for manufacturers and wood processors, supplied green or kiln-dried to your required grade, dimensions and sawn finish.",
    intro: "We source timber for manufacturers and wood processors, including customer-specific dimensions, lengths, volumes and processing requirements. Mills differ in grades, products, cut plans and processing capability, so we work across producers to find suitable supply options.",
    image: "/images/product-groups/manufacturing/industrial-stack-on-conveyor.jpg",
    imageAlt: "New Zealand Radiata Pine manufacturing timber stacked on a processing conveyor.",
    categories: ["Clear 1","Clear 2","Mixed Clears","Dressing","Premium","Cuttings 1–3","COL","Merch","Industrial"],
    intent: "Send the project’s specified grade, treatment, sizes and lengths. If the specification is still being confirmed, include the intended use and we can discuss suitable supply options.",
    ogTitle: "Manufacturing Timber Sourcing | Sutcliffe Trading",
    metaDescription: "Radiata pine for manufacturers and wood processors, supplied green or kiln-dried to the required grade, dimensions and sawn finish."
  },
  "building-construction": {
    name: "Building & Construction",
    eyebrow: "Radiata Pine for construction",
    description: "Timber products for structural, building, finishing and specialist construction applications.",
    intro: "Sutcliffe Trading sources New Zealand-grown Radiata Pine for commercial building and construction requirements, from structural timber through to finishing and specialist applications.",
    image: "/images/product-groups/building-construction/sunlit-timber-frame-corridor.jpg",
    imageAlt: "Radiata Pine framing inside a building under construction.",
    categories: ["Structural Timber","Weatherboards","House Piles","Ceiling Battens","Tile Battens","Mouldings","Fascia","Scaffold Planks","Soleboards","Kickboards","Stair Treads"],
    intent: "Send the product or application, dimensions, volume, treatment requirement if known and delivery point. That gives our team enough context to confirm what is practical and what is currently available.",
    ogTitle: "Building & Construction Timber NZ | Sutcliffe Trading",
    metaDescription: "New Zealand Radiata Pine for structural, building, finishing and specialist construction applications through Sutcliffe Trading."
  },
  "outdoor-landscaping": {
    name: "Outdoor & Landscaping",
    eyebrow: "Radiata Pine for outdoor use",
    description: "Treated and purpose-made timber for landscaping, fencing, retaining and outdoor construction.",
    intro: "Sutcliffe Trading supplies Radiata Pine for outdoor and landscaping applications throughout New Zealand, including fencing, retaining, decking and purpose-made outdoor timber.",
    image: "/images/product-groups/outdoor-landscaping/modern-timber-fenced-backyard-garden.jpg",
    imageAlt: "Modern backyard with timber fencing and landscaped garden beds.",
    categories: ["Outdoor","Posts","Rails","Palings","Decking","Retaining Boards","Sleepers, Squares & Beams","Screening","Pickets","Capping","Fence Battens","Trellis Battens","Roundwood","Pegs"],
    intent: "For outdoor supply, include the application, treatment requirement, dimensions and packet quantity. Add the delivery location so we can check suitable options.",
    ogTitle: "Outdoor & Landscaping Timber NZ | Sutcliffe Trading",
    metaDescription: "Treated Radiata Pine for fencing, retaining, decking, landscaping and outdoor construction through Sutcliffe Trading."
  },
  dunnage: {
    name: "Dunnage",
    eyebrow: "Radiata Pine for freight and load support",
    description: "Timber dunnage for freight, shipping, load support and industrial transport applications.",
    intro: "Dunnage timber is used to support, separate and protect loads during freight and industrial transport. Sutcliffe Trading sources Radiata Pine dunnage for commercial requirements throughout New Zealand.",
    image: "/images/product-groups/dunnage/industrial-cargo-on-timber-dunnage.jpg",
    imageAlt: "Radiata Pine dunnage supporting wrapped industrial cargo.",
    categories: ["Timber Dunnage","Freight Load Support","Industrial Transport"],
    intent: "For dunnage, include the sizes, load-support use, quantity, destination and any required treatment or documentation. We will confirm available supply options.",
    ogTitle: "Timber Dunnage NZ | Radiata Pine | Sutcliffe Trading",
    metaDescription: "New Zealand Radiata Pine dunnage for freight, shipping, load support and industrial transport applications through Sutcliffe Trading."
  }
};

export function generateStaticParams() {
  return Object.keys(groups).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const group = groups[slug];
  if (!group) return {};
  const url = `/timber/${slug}`;
  return {
    title: { absolute: group.ogTitle },
    description: group.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: group.ogTitle,
      description: group.metaDescription,
      images: [{ url: group.image, alt: group.imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: group.ogTitle,
      description: group.metaDescription,
      images: [group.image]
    }
  };
}

export default async function TimberGroupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = groups[slug];
  if (!group) notFound();

  const related = Object.entries(groups).filter(([key]) => key !== slug);
  const canonical = `https://www.sutcliffetrading.com/timber/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sutcliffetrading.com/" },
          { "@type": "ListItem", position: 2, name: "Timber", item: "https://www.sutcliffetrading.com/timber" },
          { "@type": "ListItem", position: 3, name: group.name, item: canonical }
        ]
      },
      {
        "@type": "Service",
        name: `${group.name} timber supply`,
        serviceType: `${group.name} Radiata Pine timber supply`,
        description: group.description,
        provider: { "@id": "https://www.sutcliffetrading.com/#organization" },
        areaServed: { "@type": "Country", name: "New Zealand" },
        url: canonical
      }
    ]
  };

  return <main className="motion-page timber-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <section className="timber-detail-hero shell">
      <div>
        <p className="eyebrow">{group.eyebrow}</p>
        <h1>{group.name}<br/><em>timber supply.</em></h1>
        <p>{group.intro}</p>
        <div className="actions"><a className="button button-dark" href="https://app.fpx.nz/explore-fpx-sourcing?request=1" target="_blank" rel="noreferrer">Request a quote</a><Link className="text-link" href="/timber">View our timber range</Link></div>
      </div>
      <figure><Image src={group.image} alt={group.imageAlt} fill priority fetchPriority="high" decoding="sync" sizes="(max-width: 900px) 100vw, 48vw"/></figure>
    </section>

    <section className="timber-detail-grid shell section-pad reveal">
      <div><p className="eyebrow">What we supply</p><h2 className="display-serif">{group.name} timber.</h2><p>{group.description}</p></div>
      <div className="timber-detail-categories">{group.categories.map((item)=><span key={item}>{item}</span>)}</div>
    </section>

    {slug === "manufacturing" && <section className="timber-detail-answer shell section-pad reveal"><div><p className="eyebrow">Manufacturing supply</p><h2 className="display-serif">Manufacturing timber to your specification.</h2></div><div><p>We can source:</p><ul><li>Rough sawn timber.</li><li>Green and kiln-dried timber.</li><li>Industrial, utility, cuttings and appearance grades.</li><li>Customer-specific dimensions, lengths, volumes and processing requirements.</li></ul><p>Grade descriptions and allowable characteristics can vary by producer. Send your required grade and end use so we can confirm a suitable specification.</p><p>Sawmills process different logs and have different cut plans, equipment and capabilities. We work across producers to identify suitable products and supply options for your specification.</p></div></section>}

    <section className="timber-detail-answer shell section-pad reveal">
      <div><p className="eyebrow">Send us your requirements</p><h2 className="display-serif">What to include in your enquiry.</h2></div>
      <div><p>{group.intent}</p><p>You can send an initial enquiry before every detail is final.</p><ol><li>Product or application; grade and treatment, if specified</li><li>Thickness × width × length</li><li>Green or kiln-dried condition, if relevant</li><li>Pieces, lineal metres, m³ or packets</li><li>Delivery town and required timing</li><li>Unloading and truck-access constraints</li></ol><p>For New Zealand deliveries, the minimum order is generally one full packet. For export, it is generally one 40-foot high-cube container. Packet sizes vary by product. Send your delivery destination and we will confirm supply options.</p></div>
    </section>

    <section className="timber-detail-answer shell section-pad rule-top reveal">
      <div><p className="eyebrow">How Sutcliffe works</p><h2 className="display-serif">One team from requirement to delivery.</h2></div>
      <div><p>Sutcliffe Trading has sourced and supplied New Zealand timber since 1988. We work across sawmills and processors to identify options that fit the requirement, then coordinate supply, freight and order updates from enquiry through to delivery.</p><p>FPX Sourcing lets you browse available timber and send your requirements in one place. Sutcliffe Trading is the supplier for orders placed through FPX Sourcing.</p><div className="actions"><a className="button button-dark" href="https://app.fpx.nz/explore-fpx-sourcing" target="_blank" rel="noreferrer">Browse timber on FPX</a><a className="button button-dark" href="https://app.fpx.nz/explore-fpx-sourcing?request=1" target="_blank" rel="noreferrer">Request a quote</a><Link className="text-link" href="/about">About Sutcliffe Trading</Link></div></div>
    </section>

    <section className="related-timber shell section-pad">
      <p className="eyebrow">Related timber groups</p>
      <div className="related-links">{related.map(([key,item])=><Link href={`/timber/${key}`} key={key}><span>{item.name}</span><b>Explore →</b></Link>)}</div>
      <p className="related-context">For certification and responsible sourcing information, see our <Link href="/sustainability">sustainability commitment</Link>.</p>
    </section>
  </main>;
}
