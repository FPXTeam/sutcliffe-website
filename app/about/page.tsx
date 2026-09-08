import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sutcliffe Trading | NZ Timber Merchant Since 1988",
  description: "Sutcliffe Trading is a New Zealand timber merchant founded in 1988, supplying commercial buyers through long-standing mill relationships and practical timber knowledge.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sutcliffe Trading | NZ Timber Merchant Since 1988",
    description: "Meet Sutcliffe Trading, a New Zealand timber merchant supplying commercial buyers since 1988.",
    url: "/about",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "About Sutcliffe Trading" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sutcliffe Trading | NZ Timber Merchant Since 1988",
    description: "New Zealand timber knowledge and supply relationships built since 1988.",
    images: ["/og.png"],
  },
};
export default function About(){const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.sutcliffetrading.com/"},{"@type":"ListItem",position:2,name:"About",item:"https://www.sutcliffetrading.com/about"}]};return <main className="motion-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}}/>
  <section className="inner-hero shell"><p className="eyebrow light">Our story</p><h1>About Sutcliffe Trading.<br/><em>Since 1988.</em></h1><p>New Zealand timber knowledge, long-standing relationships and straight answers since 1988.</p></section>
  <section className="story-long shell section-pad reveal"><aside><p className="eyebrow">The beginning</p><h2 className="display-serif">How Sutcliffe Trading<br/>started in 1988.</h2></aside><article><p>Sutcliffe Trading was founded in 1988 by Bill Sutcliffe, a stalwart of New Zealand&apos;s timber industry. Before that he spent 23 years in sales at New Zealand Forest Products at Kinleith, finishing as Remanufacturing Sales Manager with five factories under him. That role put him inside the packaging trades: kiwifruit and squash, the Dairy Board, ABC crates, wharf dunnage, and the pallet manufacturers.</p><p>He left the corporate world for a sawmill job near his land at Katikati. When that mill went into receivership, the receiver began retailing from the mill site despite the word Bill had given the local timber merchants. Bill walked out the same day.</p><p>The phone rang almost immediately. One of the country&apos;s largest timber packaging buyers, a customer Bill knew inside out, needed a full season&apos;s supply found for him. Bill fronted up to the mills with the shopping list, borrowed car and lunch money in pocket, and put his own name behind the account. Sutcliffe Trading started there, in 1988.</p><p>Nearly four decades on, the business still works much the same way. We know the mills, we know what our customers need, and both sides deal with people who have been in the industry long enough to give a straight answer.</p></article></section>
  <section className="legacy shell section-pad reveal"><figure className="legacy-photo"><img src="/bill-and-george.jpg" alt="George Harman and Bill Sutcliffe"/><figcaption>George Harman and Bill Sutcliffe</figcaption></figure><div className="legacy-copy"><p className="eyebrow">Passing the torch</p><h2 className="display-serif">Sutcliffe Trading today.<br/><em>Experience carried forward.</em></h2><p>Now retired, Bill has passed the torch to George Harman, Sutcliffe Trading&apos;s CEO. George started in timber on the floor of New Zealand sawmills, grading lumber and pulling off the dry chain, then spent years trading timber out of New Zealand and South America.</p><p>He spent his first months in the job on the road, visiting mills and merchants around the country. What stood out was how little the mechanics of buying and selling timber had changed. That eventually led to FPX.</p><p>Bill&apos;s relationships and the way he did business still shape the company. The tools around them have changed.</p><Link className="text-link" href="/contact">Talk to our team <span>↗</span></Link></div></section>
  <section className="values shell motion-stagger" aria-labelledby="how-we-work"><div className="values-heading"><p className="eyebrow">How we work</p><h2 id="how-we-work" className="section-heading">Practical timber supply, handled by one team.</h2></div><div><span>01</span><h3>One team</h3><p>From enquiry to delivery.</p></div><div><span>02</span><h3>Mill knowledge</h3><p>Products matched to the requirement.</p></div><div><span>03</span><h3>Order ownership</h3><p>Scheduling, freight and follow-up.</p></div><div><span>04</span><h3>Repeat business</h3><p>Relationships built over years.</p></div></section>
</main>}
