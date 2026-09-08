const groups = [
  {
    id: "manufacturing",
    number: "01",
    title: "Manufacturing",
    description: "Timber feedstock for wood processors and timber manufacturers to remanufacture into finished products.",
    image: "/category-manufacturing.png",
    secondary: "/category-untreated.png",
    categories: ["Clear 1", "Clear 2", "Mixed Clears", "Dressing", "Premium", "Cuttings 1–3", "COL", "Merch", "Industrial"],
    linkLabel: "View Manufacturing on FPX"
  },
  {
    id: "building",
    number: "02",
    title: "Building & Construction",
    description: "Timber products for structural, building, finishing and specialist construction applications.",
    image: "/category-stress.png",
    secondary: "/category-treated.png",
    categories: ["Structural Timber", "Weatherboards", "House Piles", "Ceiling Battens", "Tile Battens", "Mouldings", "Fascia", "Scaffold Planks", "Soleboards", "Kickboards", "Stair Treads"],
    linkLabel: "Browse Building & Construction on FPX"
  },
  {
    id: "outdoor",
    number: "03",
    title: "Outdoor & Landscaping",
    description: "Treated and purpose-made timber for landscaping, fencing, retaining and outdoor construction.",
    image: "/category-outdoor.png",
    secondary: "/category-retaining.png",
    categories: ["Outdoor", "Posts", "Rails", "Palings", "Decking", "Retaining Boards", "Sleepers, Squares & Beams", "Screening", "Pickets", "Capping", "Fence Battens", "Trellis Battens", "Roundwood", "Pegs"],
    linkLabel: "Browse Outdoor & Landscaping on FPX"
  },
  {
    id: "dunnage",
    number: "04",
    title: "Dunnage",
    description: "Timber dunnage for freight, shipping, load support and industrial transport applications.",
    image: "/timber-packet.png",
    secondary: "/category-treated.png",
    categories: ["Dunnage"],
    linkLabel: "View Dunnage on FPX"
  }
];

const applications = [
  ["Fencing", "Palings · Posts · Rails · Capping · Pegs"],
  ["Retaining", "Posts · Retaining Boards · Sleepers · Beams"],
  ["Decking", "Decking Boards · Balustrade Timber · Posts · Rails"],
  ["Commercial Projects", "Bridges · Boardwalks · Specialist outdoor work"]
];

const pageCss = `
.range-lead{display:grid;grid-template-columns:.72fr 1.28fr;gap:9vw;align-items:end;padding:92px 0 58px}.range-lead h2{margin:16px 0 0}.range-lead p:last-child{font:18px/1.7 Georgia,serif;color:var(--muted);max-width:720px;margin:0}.range-nav{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:118px}.range-nav a{min-height:76px;padding:18px 22px;border-right:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:20px}.range-nav a:first-child{border-left:1px solid var(--line)}.range-nav b{font-size:12px;text-transform:uppercase;letter-spacing:.08em}.range-nav span{font:18px Georgia,serif;color:var(--brass)}
.product-band{scroll-margin-top:90px;border-top:1px solid var(--line);padding:34px 0 118px}.band-top{display:grid;grid-template-columns:.7fr 1.3fr;gap:9vw;align-items:start;margin-bottom:42px}.band-title{display:flex;gap:24px;align-items:flex-start}.band-no{font:19px Georgia,serif;color:var(--brass);padding-top:9px}.band-title h2{font:56px/1.02 Georgia,serif;margin:0}.band-top>p{font-size:17px;line-height:1.7;color:var(--muted);margin:0;max-width:690px}.band-body{display:grid;grid-template-columns:1.18fr .82fr;gap:34px}.band-gallery{display:grid;grid-template-columns:1.45fr .55fr;gap:12px;min-height:520px}.band-gallery figure{margin:0;overflow:hidden;background:#e1ded6;position:relative}.band-gallery img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}.band-gallery figure:hover img{transform:scale(1.02)}.band-gallery figure:last-child img{filter:saturate(.88)}.band-caption{position:absolute;left:14px;bottom:14px;background:rgba(4,31,24,.88);color:#fff;padding:8px 10px;font-size:10px;text-transform:uppercase;letter-spacing:.08em}.band-info{border:1px solid var(--line);background:var(--paper);padding:30px;display:flex;flex-direction:column}.band-label{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin:0 0 18px}.category-list{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line)}.category-list span{min-height:48px;display:flex;align-items:center;border-bottom:1px solid var(--line);font-size:13px;font-weight:700;padding:10px 12px 10px 0}.category-list span:nth-child(odd){border-right:1px solid var(--line);padding-right:14px}.category-list span:nth-child(even){padding-left:14px}.band-link{margin-top:auto;padding-top:26px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:18px}.band-link small{max-width:260px;font:13px/1.45 Georgia,serif;color:var(--muted)}.band-link a{white-space:nowrap}.product-band:nth-of-type(even) .band-body{grid-template-columns:.82fr 1.18fr}.product-band:nth-of-type(even) .band-gallery{order:2}.product-band:nth-of-type(even) .band-info{order:1}
.application-section{background:var(--deep);color:var(--paper);padding:86px 0}.application-head{display:grid;grid-template-columns:.7fr 1.3fr;gap:9vw;align-items:end;margin-bottom:46px}.application-head h2{font:50px/1.02 Georgia,serif;margin:14px 0 0}.application-head p{font:17px/1.65 Georgia,serif;color:#d9d6ce;max-width:700px;margin:0}.application-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,.22);border-left:1px solid rgba(255,255,255,.22)}.application-card{min-height:185px;padding:26px;border-right:1px solid rgba(255,255,255,.22);border-bottom:1px solid rgba(255,255,255,.22)}.application-card span{font:15px Georgia,serif;color:#c8a865}.application-card h3{font:27px/1.08 Georgia,serif;margin:40px 0 12px}.application-card p{font-size:13px;line-height:1.55;color:#d6d3cb;margin:0}.fpx-bridge{display:grid;grid-template-columns:1.25fr .75fr;gap:8vw;align-items:center;padding:80px 0 95px}.fpx-bridge h2{font:46px/1.05 Georgia,serif;margin:14px 0 18px}.fpx-bridge p{font-size:16px;line-height:1.7;color:var(--muted);margin:0}.fpx-bridge aside{border-left:1px solid var(--line);padding-left:38px}.fpx-bridge aside p{font:17px/1.6 Georgia,serif;margin-bottom:24px}
@media(max-width:980px){.range-lead,.band-top,.application-head,.fpx-bridge{grid-template-columns:1fr;gap:28px}.range-nav{grid-template-columns:1fr 1fr}.range-nav a:nth-child(3){border-left:1px solid var(--line)}.band-body,.product-band:nth-of-type(even) .band-body{grid-template-columns:1fr}.product-band:nth-of-type(even) .band-gallery,.product-band:nth-of-type(even) .band-info{order:initial}.application-grid{grid-template-columns:1fr 1fr}.fpx-bridge aside{border-left:0;border-top:1px solid var(--line);padding:28px 0 0}}
@media(max-width:620px){.range-lead{padding-top:64px}.range-nav{grid-template-columns:1fr;margin-bottom:82px}.range-nav a,.range-nav a:nth-child(3){border-left:1px solid var(--line);border-bottom:1px solid var(--line)}.band-title h2{font-size:41px}.product-band{padding-bottom:86px}.band-gallery{grid-template-columns:1fr;min-height:0}.band-gallery figure{height:270px}.band-gallery figure:last-child{height:180px}.category-list{grid-template-columns:1fr}.category-list span:nth-child(odd){border-right:0;padding-right:0}.category-list span:nth-child(even){padding-left:0}.band-link{align-items:flex-start;flex-direction:column}.application-grid{grid-template-columns:1fr}.application-head h2{font-size:40px}}
`;

export default function Timber(){return <main>
  <style>{pageCss}</style>

  <section className="inner-hero shell timber-hero">
    <p className="eyebrow light">Our timber range</p>
    <h1>Timber for<br/><em>what you build next.</em></h1>
    <p>New Zealand-grown timber for manufacturing, construction, landscaping and freight, sourced through established mill and manufacturing relationships.</p>
  </section>

  <section className="shell">
    <div className="range-lead">
      <div><p className="eyebrow">Our range</p><h2 className="display-serif">Four product groups.<br/>One clear path to stock.</h2></div>
      <p>Use this site to see what Sutcliffe Trading supplies. When you want current products, stock or specifications, the category links will take you through to FPX.</p>
    </div>
    <nav className="range-nav" aria-label="Product groups">
      {groups.map((group)=><a href={`#${group.id}`} key={group.id}><b>{group.title}</b><span>{group.number}</span></a>)}
    </nav>
  </section>

  <div className="shell">
    {groups.map((group)=><section className="product-band" id={group.id} key={group.id}>
      <div className="band-top">
        <div className="band-title"><span className="band-no">{group.number}</span><h2>{group.title}</h2></div>
        <p>{group.description}</p>
      </div>
      <div className="band-body">
        <div className="band-gallery">
          <figure><img src={group.image} alt={`${group.title} timber`}/><figcaption className="band-caption">{group.title}</figcaption></figure>
          <figure><img src={group.secondary} alt={`${group.title} timber detail`}/></figure>
        </div>
        <div className="band-info">
          <p className="band-label">{group.id === "manufacturing" ? "Grades we commonly supply" : "Product categories"}</p>
          <div className="category-list">{group.categories.map((item)=><span key={item}>{item}</span>)}</div>
          <div className="band-link">
            <small>{group.id === "manufacturing" ? "These grades show the breadth of what we supply. Current specifications and availability sit in FPX." : "Final category links will point straight to the matching FPX category."}</small>
            <a className="button" href="https://app.fpx.nz/" target="_blank" rel="noreferrer">{group.linkLabel} ↗</a>
          </div>
        </div>
      </div>
    </section>)}
  </div>

  <section className="application-section">
    <div className="shell">
      <div className="application-head">
        <div><p className="eyebrow light">End uses / applications</p><h2>Know the job,<br/>not the product name?</h2></div>
        <p>Some customers know the job first and the product second. These application groups give them another way to find the right part of the range.</p>
      </div>
      <div className="application-grid">{applications.map(([name,detail],index)=><article className="application-card" key={name}><span>{String(index+1).padStart(2,"0")}</span><h3>{name}</h3><p>{detail}</p></article>)}</div>
    </div>
  </section>

  <section className="shell fpx-bridge">
    <div><p className="eyebrow">From range to stock</p><h2>See the range here.<br/>Check the detail in FPX.</h2><p>Sutcliffe Trading shows what we can source and supply. FPX is where you can check current products, stock, specifications and make an enquiry.</p></div>
    <aside><p>Once the final FPX categories are set, each relevant category on this page can link directly to the right FPX view.</p><a className="button" href="https://app.fpx.nz/" target="_blank" rel="noreferrer">Explore FPX ↗</a></aside>
  </section>

  <section className="closing shell"><p className="eyebrow light">Need something specific?</p><h2>Tell us what<br/>you need.</h2><a className="button button-light" href="/contact">Start an enquiry</a><span className="closing-mark">Sutcliffe Trading</span></section>
</main>}
