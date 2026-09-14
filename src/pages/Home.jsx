import { useState } from 'react';

const slides = [
  {
    leftLabel: "Trusted Realty", leftValue: "300+",
    renderLeftSupport: () => (
      <>
        <div className="thumbs">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" />
        </div>
        <div className="bars-chart">
          <div className="bar-col"><div className="bar-fill" style={{height:"30%"}}></div><span>Aug</span></div>
          <div className="bar-col active"><div className="bar-fill" style={{height:"75%"}}></div><span>Sep</span></div>
          <div className="bar-col"><div className="bar-fill" style={{height:"45%"}}></div><span>Oct</span></div>
          <div className="bar-col"><div className="bar-fill" style={{height:"25%"}}></div><span>Nov</span></div>
          <div className="bar-col"><div className="bar-fill" style={{height:"15%"}}></div><span>Dec</span></div>
        </div>
      </>
    ),
    rightLabel: "Homes for sale", rightValue: "48 listings / 12 ready",
    renderRightSupport: () => (
      <img className="mini-house-top" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=240&q=80" alt="" loading="lazy" />
    )
  },
  {
    leftLabel: "Site visits this quarter", leftValue: "186",
    renderLeftSupport: () => (
      <div className="bars-chart">
        <div className="bar-col"><div className="bar-fill" style={{height:"40%"}}></div><span>Jul</span></div>
        <div className="bar-col"><div className="bar-fill" style={{height:"60%"}}></div><span>Aug</span></div>
        <div className="bar-col active"><div className="bar-fill" style={{height:"90%"}}></div><span>Sep</span></div>
        <div className="bar-col"><div className="bar-fill" style={{height:"50%"}}></div><span>Oct</span></div>
        <div className="bar-col"><div className="bar-fill" style={{height:"45%"}}></div><span>Nov</span></div>
      </div>
    ),
    rightLabel: "Average days to close", rightValue: "41",
    renderRightSupport: () => (
      <img className="mini-house-top" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=240&q=80" alt="" loading="lazy" />
    )
  },
  {
    leftLabel: "Residential share", leftValue: "65%",
    renderLeftSupport: () => (
      <div style={{marginTop: '24px'}}>
        <div style={{width: '100%', background: '#e5e7eb', height: '12px', borderRadius: '6px', overflow: 'hidden'}}>
          <div style={{width: '65%', background: 'var(--blue)', height: '100%'}}></div>
        </div>
        <div className="pill-group">
          <span className="pill-blue">Land</span>
          <span className="pill-blue">Industrial</span>
        </div>
      </div>
    ),
    rightLabel: "Plots live", rightValue: "27",
    renderRightSupport: () => (
      <img className="mini-house-top" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=240&q=80" alt="Aerial" loading="lazy" />
    )
  },
  {
    leftLabel: "Avg. residence value", leftValue: "₹1.85 Cr",
    renderLeftSupport: () => (
      <div className="thumbs" style={{position: 'relative', top: 0, left: 0, marginTop: '24px'}}>
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" />
      </div>
    ),
    rightLabel: "NRI enquiries", rightValue: "64",
    renderRightSupport: () => (
      <>
        <div className="icon-line" style={{alignItems: 'flex-end', width: '100%', marginBottom: 0}}>
          <div className="badge-icon">🌐</div>
        </div>
        <div className="pill-group" style={{justifyContent: 'flex-end'}}>
          <span className="pill-blue">Dubai</span>
          <span className="pill-blue">London</span>
        </div>
      </>
    )
  },
  {
    leftLabel: "Corridors we cover", leftValue: "12",
    renderLeftSupport: () => (
      <div className="mini-list">
        <span>Vijay Nagar</span>
        <span>Bypass</span>
        <span>Super Corridor</span>
        <span>BRTS</span>
      </div>
    ),
    rightLabel: "Apartments near you", rightValue: "128",
    renderRightSupport: () => (
      <div className="icon-line" style={{alignItems: 'flex-end', width: '100%'}}>
        <div className="badge-icon">📍</div>
      </div>
    )
  },
  {
    leftLabel: "3 BHK ready", leftValue: "19",
    renderLeftSupport: () => (
      <div className="thumbs" style={{position: 'relative', top: 0, left: 0, marginTop: '24px'}}>
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=100&q=80" alt="Floor plan" loading="lazy" />
      </div>
    ),
    rightLabel: "Villas & penthouses", rightValue: "08",
    renderRightSupport: () => (
      <img className="mini-house-top" src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=240&q=80" alt="Pool villa" loading="lazy" />
    )
  },
  {
    leftLabel: "RERA-tagged projects", leftValue: "22",
    renderLeftSupport: () => (
      <span className="pill-green">RERA Approved</span>
    ),
    rightLabel: "Families placed", rightValue: "320+",
    renderRightSupport: () => (
      <div className="thumbs" style={{position: 'absolute', top: '32px', right: '32px', left: 'auto'}}>
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" />
      </div>
    )
  },
  {
    leftLabel: "Boutique commercial", leftValue: "11",
    renderLeftSupport: () => (
      <div className="thumbs" style={{position: 'relative', top: 0, left: 0, marginTop: '24px'}}>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=100&q=80" alt="Office facade" loading="lazy" />
      </div>
    ),
    rightLabel: "Quoted rental yield", rightValue: "6.4%",
    renderRightSupport: () => (
      <div className="sparkline-chart" style={{justifyContent: 'flex-end', width: '100%'}}>
        <div className="sparkline-col" style={{height: '40%'}}></div>
        <div className="sparkline-col" style={{height: '60%'}}></div>
        <div className="sparkline-col" style={{height: '50%'}}></div>
        <div className="sparkline-col active" style={{height: '90%'}}></div>
      </div>
    )
  },
  {
    leftLabel: "Handovers this year", leftValue: "37",
    renderLeftSupport: () => (
      <div className="thumbs" style={{position: 'relative', top: 0, left: 0, marginTop: '24px'}}>
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=100&q=80" alt="Keys" loading="lazy" />
      </div>
    ),
    rightLabel: "Aftercare active", rightValue: "12 mo",
    renderRightSupport: () => (
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <span className="pill-blue" style={{marginTop: '32px'}}>Same advisor</span>
      </div>
    )
  }
];

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Realty');

  const tabImages = {
    'Financing': '/financing.jpg',
    'Realty': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
    'Commercial space': '/commercial_space.jpg'
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow">IT'S A LIFESTYLE</p>
          <h1>OPULENT<br />AREAS, ETERNAL<br />WORTH</h1>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#discover">Discover Now</a>
            <a className="btn btn-ghost" href="#listings">See Details</a>
          </div>
        </div>
        <div className="hero-visual">
          <img className="house" src="/house.jpg" alt="Sai Kripa luxury residence" style={{ mixBlendMode: 'darken' }} fetchpriority="high" />
          <div className="arc"></div>
        </div>
      </div>
    </div>

    <div className="stats-bar">
      <div className="stats-group">
        <p className="eyebrow" style={{color: '#9aa1b2', marginBottom: '24px'}}>PORTFOLIO MIX</p>
        <div className="stats-blocks" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
          <div className="stat-block">
            <h4>Residential</h4>
            <div className="stat-num">65%</div>
            <div className="bar"><span style={{width:"65%"}}></span></div>
          </div>
          <div className="stat-block">
            <h4>Land</h4>
            <div className="stat-num">25%</div>
            <div className="bar"><span style={{width:"25%"}}></span></div>
          </div>
          <div className="stat-block">
            <h4>Industrial</h4>
            <div className="stat-num">10%</div>
            <div className="bar"><span style={{width:"10%"}}></span></div>
          </div>
        </div>
      </div>
      <div className="stats-group">
        <p className="eyebrow" style={{color: '#9aa1b2', marginBottom: '24px'}}>LIVE INVENTORY</p>
        <div className="stats-counters" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', height: '100%', alignItems: 'start'}}>
          <div className="counter-item">
            <span className="count">12</span>
            <span className="label">Homes Ready</span>
          </div>
          <div className="counter-item">
            <span className="count">8</span>
            <span className="label">Plots Available</span>
          </div>
          <div className="counter-item">
            <span className="count" style={{color: '#4ade80'}}>✓</span>
            <span className="label">RERA Approved</span>
          </div>
        </div>
      </div>
    </div>

    <section className="living" id="about">
      <h2>Intelligent Living<br />Begins Now</h2>
      <p>Experience refined living through thoughtfully crafted properties that combine comfort.</p>
      <div className="living-grid">
        <div>
          <h3>Luxury Spaces</h3>
          <p className="desc">Curated environments designed for elegance and everyday ease.</p>
          <div className="chip-row">
            <button className={`chip ${activeTab === 'Financing' ? 'on' : ''}`} onClick={() => setActiveTab('Financing')}>Financing</button>
            <button className={`chip ${activeTab === 'Realty' ? 'on' : ''}`} onClick={() => setActiveTab('Realty')}>Realty</button>
            <button className={`chip ${activeTab === 'Commercial space' ? 'on' : ''}`} onClick={() => setActiveTab('Commercial space')}>Commercial space</button>
          </div>
        </div>
        <div>
          <h3>Trusted Realty</h3>
          <div className="trust-card">
            <img key={activeTab} src={tabImages[activeTab]} alt="Trusted property" className="fade-in-image" loading="lazy" />
            <div className="handshake">🤝</div>
          </div>
        </div>
        <div>
          <h3>Residential Property</h3>
          <div className="stack" style={{"marginTop":"16px"}}>
            <span className="pill">Apartments</span>
            <span className="pill">Investment</span>
          </div>
        </div>
      </div>
    </section>

    <section className="allocate" id="services">
      <div className="allocate-head">
        <div>
          <span className="section-kicker" style={{borderRadius: '999px', padding: '10px 24px'}}>Land for sale</span>
        </div>
        <h2>Allocate Resources<br/>to Important Areas</h2>
        <p className="allocate-aside">We help you discover properties<br/>with real value—designed for<br/>living, built for growth</p>
      </div>

      <div className="metric-grid-two slide-fade-in" key={currentSlide}>
        <article className="metric-card">
          <div className="metric-sub-left">
            <div className="label">{slides[currentSlide].leftLabel}</div>
            <div className="value">{slides[currentSlide].leftValue}</div>
            {slides[currentSlide].renderLeftSupport()}
          </div>
        </article>

        <article className="metric-card small">
          <div className="icon-line">
            <div className="circle-icon">∞</div>
            <div className="drop-line"></div>
          </div>
          {slides[currentSlide].renderRightSupport()}
          <div className="bottom-row" style={{marginTop: 'auto', paddingTop: '32px'}}>
            <div>
              <div className="label">{slides[currentSlide].rightLabel}</div>
              <div className="value">{slides[currentSlide].rightValue}</div>
            </div>
            <div className="big-idx">{String(currentSlide + 1).padStart(2, '0')}</div>
          </div>
        </article>
      </div>

      <div className="pager-new">
        <div><strong>{String(currentSlide + 1).padStart(2, '0')}</strong><span>/09</span></div>
        <div className="pager-arrows">
          <button className="arr-left" onClick={prevSlide}>&lt;</button>
          <button className="arr-right" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </section>

    <section className="invest" id="listings">
      <div className="top-pills">
        <span className="on">📊 Property insights</span>
        <span>🏠 Homes for sale</span>
      </div>
      <div className="invest-grid">
        <article className="prop-mini">
          <h4>Profitable properties</h4>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Commercial building" loading="lazy" />
          <p className="meta">Commercial &nbsp; 12,0999</p>
        </article>
        <div className="invest-copy">
          <h2>Invest Smart<br />Live Better</h2>
          <p>Find properties that match your lifestyle, from cozy homes.</p>
          <a className="round-btn" href="#discover" aria-label="Continue">→</a>
        </div>
        <article className="prop-mini">
          <h4>Property listing</h4>
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="Apartment listing" loading="lazy" />
        </article>
      </div>
      <div className="wide-shot">
        <img src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1600&q=80" alt="Featured Sai Kripa home" loading="lazy" />
      </div>
    </section>

    <section className="discover" id="discover">
      <h2>Discover Your Perfect Property</h2>
      <p>Experience a seamless and trusted real estate journey with us.</p>
      <div className="disc-grid">
        <article className="disc-card">
          <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80" alt="Premium home" loading="lazy" />
          <div className="body">
            <h4>Premium Homes</h4>
            <div className="dot"></div>
          </div>
        </article>
        <article className="disc-card">
          <img src="https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=800&q=80" alt="Modern tower home" loading="lazy" />
          <div className="body">
            <p className="meta">Discover premium real estate options in prime locations, modern living.</p>
          </div>
        </article>
        <article className="disc-card">
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" alt="Evening villa" loading="lazy" />
          <div className="body">
            <h4>Profitable properties</h4>
            <p className="meta">Commercial &nbsp; 12,0999</p>
          </div>
        </article>
      </div>
    </section>

    <section className="clients" id="faqs">
      <div>
        <h2>What Our Clients Say</h2>
        <p>We provide comprehensive real estate services including property buying.</p>
        <div className="stars">★★★★☆</div>
        <div className="client-label">Client</div>
      </div>
      <div className="client-photos">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80" alt="Living room" />
        <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=700&q=80" alt="Interior seating" />
      </div>
      <aside className="cta-dark" id="contact">
        <span className="pill soft">Learn More</span>
        <h4>Guided closings</h4>
        <p>Our agents will guide you through property research, negotiations, and closing process.</p>
        <a className="btn btn-outline" href="mailto:hello@saikripa.example">Explore More →</a>
      </aside>
    </section>
    </>
  );
}
