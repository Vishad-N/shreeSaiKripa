import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

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

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
    <div ref={containerRef}>
      <motion.div 
        className="hero" 
        id="home"
        style={{ y: yBg, opacity: opacityHero }}
      >
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p className="eyebrow" variants={fadeInUp}>IT'S A LIFESTYLE</motion.p>
            <motion.h1 variants={fadeInUp}>OPULENT<br />AREAS, ETERNAL<br />WORTH</motion.h1>
            <motion.div className="hero-actions" variants={fadeInUp}>
              <a className="btn btn-primary" href="#discover">Discover Now</a>
              <a className="btn btn-ghost" href="#listings">See Details</a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img className="house" src="/house.png" alt="Sai Kripa luxury residence" fetchpriority="high" />
          </motion.div>
        </div>
      </motion.div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <motion.div 
        className="stats-bar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="stats-group">
          <motion.p className="eyebrow" style={{color: '#9aa1b2', marginBottom: '24px'}} variants={fadeInUp}>PORTFOLIO MIX</motion.p>
          <div className="stats-blocks" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
            <motion.div className="stat-block" variants={fadeInUp}>
              <h4>Residential</h4>
              <div className="stat-num">65%</div>
              <div className="bar"><span style={{width:"65%"}}></span></div>
            </motion.div>
            <motion.div className="stat-block" variants={fadeInUp}>
              <h4>Land</h4>
              <div className="stat-num">25%</div>
              <div className="bar"><motion.span initial={{width: 0}} whileInView={{width: "25%"}} transition={{duration: 1, delay: 0.3}}></motion.span></div>
            </motion.div>
            <motion.div className="stat-block" variants={fadeInUp}>
              <h4>Industrial</h4>
              <div className="stat-num">10%</div>
              <div className="bar"><motion.span initial={{width: 0}} whileInView={{width: "10%"}} transition={{duration: 1, delay: 0.5}}></motion.span></div>
            </motion.div>
          </div>
        </div>
        <div className="stats-group">
          <motion.p className="eyebrow" style={{color: '#9aa1b2', marginBottom: '24px'}} variants={fadeInUp}>LIVE INVENTORY</motion.p>
          <div className="stats-counters" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', height: '100%', alignItems: 'start'}}>
            <motion.div className="counter-item" variants={fadeInUp} whileHover={{ y: -5, scale: 1.05 }}>
              <span className="count">12</span>
              <span className="label">Homes Ready</span>
            </motion.div>
            <motion.div className="counter-item" variants={fadeInUp} whileHover={{ y: -5, scale: 1.05 }}>
              <span className="count">8</span>
              <span className="label">Plots Available</span>
            </motion.div>
            <motion.div className="counter-item" variants={fadeInUp} whileHover={{ y: -5, scale: 1.05 }}>
              <span className="count" style={{color: '#4ade80'}}>✓</span>
              <span className="label">RERA Approved</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.section 
        className="living" 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
      <motion.h2 variants={fadeInUp}>Intelligent Living<br />Begins Now</motion.h2>
      <motion.p variants={fadeInUp}>Experience refined living through thoughtfully crafted properties that combine comfort.</motion.p>
      <div className="living-grid">
        <motion.div variants={fadeInUp}>
          <h3>Luxury Spaces</h3>
          <p className="desc">Curated environments designed for elegance and everyday ease.</p>
          <div className="chip-row">
            <button className={`chip ${activeTab === 'Financing' ? 'on' : ''}`} onClick={() => setActiveTab('Financing')}>Financing</button>
            <button className={`chip ${activeTab === 'Realty' ? 'on' : ''}`} onClick={() => setActiveTab('Realty')}>Realty</button>
            <button className={`chip ${activeTab === 'Commercial space' ? 'on' : ''}`} onClick={() => setActiveTab('Commercial space')}>Commercial space</button>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h3>Trusted Realty</h3>
          <motion.div className="trust-card" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <img key={activeTab} src={tabImages[activeTab]} alt="Trusted property" className="fade-in-image" loading="lazy" />
            <div className="handshake">🤝</div>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h3>Residential Property</h3>
          <div className="stack" style={{"marginTop":"16px"}}>
            <span className="pill">Apartments</span>
            <span className="pill">Investment</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
    </div>


    <motion.section 
      className="allocate" 
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="allocate-head">
        <motion.div variants={fadeInUp}>
          <span className="section-kicker" style={{borderRadius: '999px', padding: '10px 24px'}}>Land for sale</span>
        </motion.div>
        <motion.h2 variants={fadeInUp}>Allocate Resources<br/>to Important Areas</motion.h2>
        <motion.p className="allocate-aside" variants={fadeInUp}>We help you discover properties<br/>with real value—designed for<br/>living, built for growth</motion.p>
      </div>

      <motion.div className="metric-grid-two slide-fade-in" key={currentSlide} variants={fadeInUp}>
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
      </motion.div>

      <motion.div className="pager-new" variants={fadeInUp}>
        <div><strong>{String(currentSlide + 1).padStart(2, '0')}</strong><span>/09</span></div>
        <div className="pager-arrows">
          <button className="arr-left" onClick={prevSlide}>&lt;</button>
          <button className="arr-right" onClick={nextSlide}>&gt;</button>
        </div>
      </motion.div>
    </motion.section>

    <motion.section 
      className="invest" 
      id="listings"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div className="top-pills" variants={fadeInUp}>
        <span className="on">📊 Property insights</span>
        <span>🏠 Homes for sale</span>
      </motion.div>
      <div className="invest-grid">
        <motion.article className="prop-mini" variants={fadeInUp} whileHover={{ y: -5 }}>
          <h4>Profitable properties</h4>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Commercial building" loading="lazy" />
          <p className="meta">Commercial &nbsp; 12,0999</p>
        </motion.article>
        <motion.div className="invest-copy" variants={fadeInUp}>
          <h2>Invest Smart<br />Live Better</h2>
          <p>Find properties that match your lifestyle, from cozy homes.</p>
          <motion.a className="round-btn" href="#discover" aria-label="Continue" whileHover={{ scale: 1.1 }}>→</motion.a>
        </motion.div>
        <motion.article className="prop-mini" variants={fadeInUp} whileHover={{ y: -5 }}>
          <h4>Property listing</h4>
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="Apartment listing" loading="lazy" />
        </motion.article>
      </div>
      <motion.div className="wide-shot" variants={fadeInUp}>
        <img src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1600&q=80" alt="Featured Sai Kripa home" loading="lazy" />
      </motion.div>
    </motion.section>

    <motion.section 
      className="discover" 
      id="discover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeInUp}>Discover Your Perfect Property</motion.h2>
      <motion.p variants={fadeInUp}>Experience a seamless and trusted real estate journey with us.</motion.p>
      <div className="disc-grid">
        <motion.article className="disc-card" variants={fadeInUp} whileHover={{ scale: 1.03 }}>
          <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80" alt="Premium home" loading="lazy" />
          <div className="body">
            <h4>Premium Homes</h4>
            <div className="dot"></div>
          </div>
        </motion.article>
        <motion.article className="disc-card" variants={fadeInUp} whileHover={{ scale: 1.03 }}>
          <img src="https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=800&q=80" alt="Modern tower home" loading="lazy" />
          <div className="body">
            <p className="meta">Discover premium real estate options in prime locations, modern living.</p>
          </div>
        </motion.article>
        <motion.article className="disc-card" variants={fadeInUp} whileHover={{ scale: 1.03 }}>
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" alt="Evening villa" loading="lazy" />
          <div className="body">
            <h4>Profitable properties</h4>
            <p className="meta">Commercial &nbsp; 12,0999</p>
          </div>
        </motion.article>
      </div>
    </motion.section>

    <motion.section 
      className="clients" 
      id="faqs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <h2>What Our Clients Say</h2>
        <p>We provide comprehensive real estate services including property buying.</p>
        <div className="stars">★★★★☆</div>
        <div className="client-label">Client</div>
      </motion.div>
      <motion.div className="client-photos" variants={fadeInUp}>
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80" alt="Living room" />
        <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=700&q=80" alt="Interior seating" />
      </motion.div>
      <motion.aside className="cta-dark" id="contact" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
        <span className="pill soft">Learn More</span>
        <h4>Guided closings</h4>
        <p>Our agents will guide you through property research, negotiations, and closing process.</p>
        <a className="btn btn-outline" href="mailto:hello@saikripa.example">Explore More →</a>
      </motion.aside>
    </motion.section>
    </>
  );
}
