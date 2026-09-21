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
    description: "Timber feedstock for wood processors and timber manufacturers to remanufacture into finished products.",
    intro: "Sutcliffe Trading supplies New Zealand-grown Radiata Pine for processors and manufacturers. We work from the required grade, dimensions, volume and delivery point, then match the requirement through established sawmill and manufacturing relationships.",
    image: "/images/product-groups/manufacturing/industrial-stack-on-conveyor.jpg",
    imageAlt: "New Zealand Radiata Pine manufacturing timber stacked on a processing conveyor.",
    categories: ["Clear 1","Clear 2","Mixed Clears","Dressing","Premium","Cuttings 1–3","COL","Merch","Industrial"],
    intent: "If you know the grade or finished product you are working toward, include it in the enquiry. If the specification is still open, tell us the intended use and our team can help narrow the requirement.",
    ogTitle: "Manufacturing Radiata Pine Timber NZ | Sutcliffe Trading",
    metaDescription: "New Zealand Radiata Pine manufacturing timber for wood processors and remanufacturers, supplied through Sutcliffe Trading's established mill relationships."
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
    intent: "Outdoor timber requirements vary by application. Include the intended use, dimensions, volume, treatment requirement if known and delivery point so the team can narrow the suitable options.",
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
    intent: "For a dunnage enquiry, include the dimensions, quantity or volume, treatment requirement if applicable, intended use and delivery point. We will confirm what can be supplied.",
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
        <div className="actions"><Link className="button button-dark" href="/contact">Send a timber enquiry</Link><Link className="text-link" href="/timber">View full timber range <span>→</span></Link></div>
      </div>
      <figure><Image src={group.image} alt={group.imageAlt} fill priority fetchPriority="high" decoding="sync" sizes="(max-width: 900px) 100vw, 48vw"/></figure>
    </section>

    <section className="timber-detail-grid shell section-pad reveal">
      <div><p className="eyebrow">What we supply</p><h2 className="display-serif">Products and categories.</h2><p>{group.description}</p></div>
      <div className="timber-detail-categories">{group.categories.map((item)=><span key={item}>{item}</span>)}</div>
    </section>

    <section className="timber-detail-answer shell section-pad reveal">
      <div><p className="eyebrow">For a useful first response</p><h2 className="display-serif">What should you include in a timber enquiry?</h2></div>
      <div><p>{group.intent}</p><ol><li>Product, grade or intended application</li><li>Required dimensions</li><li>Quantity or commercial volume</li><li>Treatment requirement, if applicable</li><li>Delivery point</li></ol></div>
    </section>

    <section className="timber-detail-answer shell section-pad rule-top reveal">
      <div><p className="eyebrow">How Sutcliffe works</p><h2 className="display-serif">One team from requirement to delivery.</h2></div>
      <div><p>Sutcliffe Trading has supplied New Zealand timber buyers since 1988. Our team works through established sawmill and manufacturing relationships, matching the requirement to practical supply options and carrying specification, scheduling, freight and follow-up through the order.</p><p>For current products, stock and specifications, use FPX Sourcing or talk directly with the Sutcliffe team.</p><div className="actions"><a className="button button-dark" href="https://app.fpx.nz/" target="_blank" rel="noreferrer">Explore current timber on FPX ↗</a><Link className="text-link" href="/about">About Sutcliffe Trading <span>→</span></Link></div></div>
    </section>

    <section className="related-timber shell section-pad">
      <p className="eyebrow">Related timber groups</p>
      <div className="related-links">{related.map(([key,item])=><Link href={`/timber/${key}`} key={key}><span>{item.name}</span><b>Explore →</b></Link>)}</div>
      <p className="related-context">For certification and responsible sourcing information, see our <Link href="/sustainability">sustainability commitment</Link>.</p>
    </section>
  </main>;
}
