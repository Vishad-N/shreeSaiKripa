export default function About() {
  return (
    <>
      <div className="page-hero">
      <div className="page-hero-grid">
        <div>
          <p className="eyebrow">OUR STORY</p>
          <h1>GRACE IN<br />EVERY HOME<br />WE BUILD</h1>
          <p className="lead">Sai Kripa exists to turn shelter into blessing — pairing considered architecture with honest counsel so families invest in places that hold their worth.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="services.html">Explore Services</a>
            <a className="btn btn-ghost" href="#values">Our Values</a>
          </div>
        </div>
        <div className="page-hero-visual">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" alt="Sai Kripa residence" />
          <div className="arc"></div>
        </div>
      </div>
    </div>

    <div className="inner-dark">
      <h2>A house is land and light.<br />A home is trust.</h2>
      <p>Named for grace received, Sai Kripa is a boutique real-estate house focused on residential, plotted, and select commercial work. We do not flood the market. We curate addresses that stay valuable when trends move on.</p>
      <div className="stat-row">
        <div className="stat-box"><div className="num">18+</div><div className="lbl">Years of practice</div></div>
        <div className="stat-box"><div className="num">320+</div><div className="lbl">Families placed</div></div>
        <div className="stat-box"><div className="num">65%</div><div className="lbl">Residential focus</div></div>
        <div className="stat-box"><div className="num">12</div><div className="lbl">Prime corridors</div></div>
      </div>
    </div>

    <section>
      <div className="split">
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80" alt="Crafted living space" />
        <div>
          <span className="section-kicker">Who we are</span>
          <h2>Quiet luxury. Clear paperwork. Lasting addresses.</h2>
          <p>We began as advisors who refused to separate architecture from aftercare. Today the same team that walks a plot at dawn also sits through registration, interiors, and the first year of living in the home.</p>
          <p>Every listing is visited, every title is reviewed, and every recommendation is something we would offer our own family. That is the standard the name Sai Kripa requires.</p>
          <a className="btn btn-primary" href="sai-kripa.html#listings">View residences</a>
        </div>
      </div>
    </section>

    <section id="values" style={{"paddingTop":"0"}}>
      <span className="section-kicker">What guides us</span>
      <h2 style={{"fontSize":"36px","letterSpacing":"-0.035em","marginBottom":"24px"}}>Values that outlast a sale</h2>
      <div className="card-grid four">
        <article className="info-card">
          <div className="icon">01</div>
          <h3>Integrity first</h3>
          <p>No hidden loadings, no surprise clauses. If a title is unclear, we walk away before you do.</p>
        </article>
        <article className="info-card">
          <div className="icon">02</div>
          <h3>Crafted selection</h3>
          <p>Fewer listings, better ones. We filter for light, access, legal hygiene, and resale strength.</p>
        </article>
        <article className="info-card">
          <div className="icon">03</div>
          <h3>Long counsel</h3>
          <p>The relationship does not end at handover. We stay on for fit-outs, tenants, and next moves.</p>
        </article>
        <article className="info-card">
          <div className="icon">04</div>
          <h3>Grace in process</h3>
          <p>Timelines, site visits, and negotiations are handled with calm — never pressure.</p>
        </article>
      </div>
    </section>

    <section style={{"paddingTop":"10px"}}>
      <span className="section-kicker">Milestones</span>
      <h2 style={{"fontSize":"36px","letterSpacing":"-0.035em","marginBottom":"8px"}}>How the house grew</h2>
      <div className="timeline">
        <div className="tl">
          <strong>2008</strong>
          <div>
            <h3>The first desk</h3>
            <p>Sai Kripa opens as a two-person advisory for families buying their first independent home.</p>
          </div>
        </div>
        <div className="tl">
          <strong>2014</strong>
          <div>
            <h3>Residential studio</h3>
            <p>In-house planning support is added so clients can read drawings before they sign.</p>
          </div>
        </div>
        <div className="tl">
          <strong>2019</strong>
          <div>
            <h3>Land &amp; commercial</h3>
            <p>Select plotted and boutique commercial mandates join the book — still invitation-led.</p>
          </div>
        </div>
        <div className="tl">
          <strong>2026</strong>
          <div>
            <h3>Intelligent living</h3>
            <p>A curated digital studio launches so clients can study inventory with the same calm they get in person.</p>
          </div>
        </div>
      </div>
    </section>

    <section style={{"paddingTop":"10px"}}>
      <span className="section-kicker">People</span>
      <h2 style={{"fontSize":"36px","letterSpacing":"-0.035em","marginBottom":"24px"}}>The room that represents you</h2>
      <div className="team">
        <article className="member">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80" alt="Abelia Rao" />
          <div className="body">
            <h3>Abelia Rao</h3>
            <p className="role">Principal advisor</p>
          </div>
        </article>
        <article className="member">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80" alt="Kabir Mehta" />
          <div className="body">
            <h3>Kabir Mehta</h3>
            <p className="role">Land &amp; legal</p>
          </div>
        </article>
        <article className="member">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80" alt="Meera Iyer" />
          <div className="body">
            <h3>Meera Iyer</h3>
            <p className="role">Residences &amp; interiors</p>
          </div>
        </article>
      </div>
    </section>

    <div className="cta-band" id="contact">
      <div>
        <h2>Walk a home with us.</h2>
        <p>Private viewings by appointment. We reply within one working day.</p>
      </div>
      <a className="btn btn-primary" href="mailto:hello@saikripa.example">Write to Sai Kripa</a>
    </div>
    </>
  );
}