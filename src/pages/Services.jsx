import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Services() {
  return (
    <>
      <motion.div 
        className="page-hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
      <div className="page-hero-grid">
        <div>
          <motion.p className="eyebrow" variants={fadeInUp}>WHAT WE DO</motion.p>
          <motion.h1 variants={fadeInUp}>ALLOCATE<br />CAPITAL TO<br />THE RIGHT ROOF</motion.h1>
          <motion.p className="lead" variants={fadeInUp}>From first homes to land banks and boutique commercial floors — one desk handles search, diligence, negotiation, and aftercare.</motion.p>
          <motion.div className="hero-actions" variants={fadeInUp}>
            <a className="btn btn-primary" href="sai-kripa.html#listings">See inventory</a>
            <a className="btn btn-ghost" href="#process">Our process</a>
          </motion.div>
        </div>
        <motion.div className="page-hero-visual" variants={fadeInUp}>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="City property" />
        </motion.div>
      </div>
    </motion.div>

    <motion.div 
      className="inner-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeInUp}>Six practices. One standard.</motion.h2>
      <motion.p variants={fadeInUp}>Every mandate is staffed by an advisor, a legal reviewer, and a site lead. You speak to people who have already walked the property.</motion.p>
      <motion.div className="chip-row" variants={fadeInUp}>
        <span className="chip on">Residential</span>
        <span className="chip">Land</span>
        <span className="chip">Commercial</span>
        <span className="chip">Investment</span>
        <span className="chip">Aftercare</span>
      </motion.div>
    </motion.div>

    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="card-grid">
        <motion.article className="svc-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Residences" />
          <div className="body">
            <span className="section-kicker">01</span>
            <h3>Luxury residences</h3>
            <p>Villas, penthouses, and quiet apartments in corridors we already understand — light, access, and society quality included in the brief.</p>
            <span className="pill">Residences</span>
          </div>
        </motion.article>
        <motion.article className="svc-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="First homes" />
          <div className="body">
            <span className="section-kicker">02</span>
            <h3>First &amp; family homes</h3>
            <p>Practical planning for school runs, EMI comfort, and a resale path. We model three options before you visit the fourth.</p>
            <span className="pill">Residential</span>
          </div>
        </motion.article>
        <motion.article className="svc-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" alt="Land" />
          <div className="body">
            <span className="section-kicker">03</span>
            <h3>Land &amp; plotted</h3>
            <p>Title hygiene, approach roads, FSI reality, and holding cost — mapped before a token is discussed.</p>
            <span className="pill">Land</span>
          </div>
        </motion.article>
        <motion.article className="svc-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="Commercial" />
          <div className="body">
            <span className="section-kicker">04</span>
            <h3>Boutique commercial</h3>
            <p>Smaller floor plates, street-facing retail, and managed offices for clients who want yield without a large operations team.</p>
            <span className="pill">Commercial</span>
          </div>
        </motion.article>
        <motion.article className="svc-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Advisory" />
          <div className="body">
            <span className="section-kicker">05</span>
            <h3>Investment advisory</h3>
            <p>Portfolio mix across residential, land, and select commercial — with a written hold thesis, not a pitch deck.</p>
            <span className="pill">Investment</span>
          </div>
        </motion.article>
        <motion.article className="svc-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" alt="Aftercare" />
          <div className="body">
            <span className="section-kicker">06</span>
            <h3>Handover &amp; aftercare</h3>
            <p>Fit-out vendors, tenant placement, and a year of check-ins so the asset behaves the way we promised.</p>
            <span className="pill">Care</span>
          </div>
        </motion.article>
      </div>
    </motion.section>

    <motion.section 
      id="process" 
      style={{"paddingTop":"8px"}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.span className="section-kicker" variants={fadeInUp}>How a mandate runs</motion.span>
      <motion.h2 style={{"fontSize":"36px","letterSpacing":"-0.035em","marginBottom":"24px"}} variants={fadeInUp}>Four movements. No theatre.</motion.h2>
      <div className="steps">
        <motion.article className="step" variants={fadeInUp} whileHover={{ y: -8 }}>
          <div className="n">01</div>
          <h3>Listen</h3>
          <p>Budget, lifestyle, timeline, and the one thing you will not compromise. We write it down and share it back.</p>
        </motion.article>
        <motion.article className="step" variants={fadeInUp} whileHover={{ y: -8 }}>
          <div className="n">02</div>
          <h3>Shortlist</h3>
          <p>Three to five properties that survive legal, planning, and on-ground checks. The rest never reach you.</p>
        </motion.article>
        <motion.article className="step" variants={fadeInUp} whileHover={{ y: -8 }}>
          <div className="n">03</div>
          <h3>Walk &amp; weigh</h3>
          <p>Site visits at honest hours. We talk numbers on the same day — including the costs others leave for later.</p>
        </motion.article>
        <motion.article className="step" variants={fadeInUp} whileHover={{ y: -8 }}>
          <div className="n">04</div>
          <h3>Close &amp; stay</h3>
          <p>Negotiation, documentation, registration, and aftercare. One advisor remains your number.</p>
        </motion.article>
      </div>
    </motion.section>

    <motion.section 
      style={{"paddingTop":"8px"}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="split">
        <motion.div variants={fadeInUp}>
          <span className="section-kicker">Who it is for</span>
          <h2>Families, founders, and quiet investors.</h2>
          <p>If you want a loud auction room, we are the wrong house. If you want a considered address and a paper trail you can defend, we should talk.</p>
          <p>Most clients come through introduction. Direct enquiries are welcome — we simply take fewer of them so the ones we accept are fully staffed.</p>
        </motion.div>
        <motion.img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80" alt="Private residence" variants={fadeInUp} />
      </div>
    </motion.section>

    <motion.div 
      className="cta-band" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
    >
      <div>
        <h2>Brief us on the next address.</h2>
        <p>Share a budget range and a city. We will tell you if we are the right desk.</p>
      </div>
      <a className="btn btn-primary" href="mailto:hello@saikripa.example">Start a mandate</a>
    </motion.div>
    </>
  );
}