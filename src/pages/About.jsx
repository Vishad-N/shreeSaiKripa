import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedCounter';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function About() {
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
          <motion.p className="eyebrow" variants={fadeInUp}>OUR STORY</motion.p>
          <motion.h1 variants={fadeInUp}>GRACE IN<br />EVERY HOME<br />WE BUILD</motion.h1>
          <motion.p className="lead" variants={fadeInUp}>Sai Kripa exists to turn shelter into blessing — pairing considered architecture with honest counsel so families invest in places that hold their worth.</motion.p>
          <motion.div className="hero-actions" variants={fadeInUp}>
            <a className="btn btn-primary" href="services.html">Explore Services</a>
            <a className="btn btn-ghost" href="#values">Our Values</a>
          </motion.div>
        </div>
        <motion.div className="page-hero-visual" variants={fadeInUp}>
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" alt="Sai Kripa residence" />
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
      <motion.h2 variants={fadeInUp}>A house is land and light.<br />A home is trust.</motion.h2>
      <motion.p variants={fadeInUp}>Named for grace received, Sai Kripa is a boutique real-estate house focused on residential, plotted, and select commercial work. We do not flood the market. We curate addresses that stay valuable when trends move on.</motion.p>
      <div className="stat-row">
        <motion.div className="stat-box" variants={fadeInUp} whileHover={{ y: -5 }}><div className="num"><AnimatedText text="18+" /></div><div className="lbl">Years of practice</div></motion.div>
        <motion.div className="stat-box" variants={fadeInUp} whileHover={{ y: -5 }}><div className="num"><AnimatedText text="320+" /></div><div className="lbl">Families placed</div></motion.div>
        <motion.div className="stat-box" variants={fadeInUp} whileHover={{ y: -5 }}><div className="num"><AnimatedText text="65%" /></div><div className="lbl">Residential focus</div></motion.div>
        <motion.div className="stat-box" variants={fadeInUp} whileHover={{ y: -5 }}><div className="num"><AnimatedText text="12" /></div><div className="lbl">Prime corridors</div></motion.div>
      </div>
    </motion.div>

    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="split">
        <motion.img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80" alt="Crafted living space" variants={fadeInUp} />
        <motion.div variants={fadeInUp}>
          <span className="section-kicker">Who we are</span>
          <h2>Quiet luxury. Clear paperwork. Lasting addresses.</h2>
          <p>We began as advisors who refused to separate architecture from aftercare. Today the same team that walks a plot at dawn also sits through registration, interiors, and the first year of living in the home.</p>
          <p>Every listing is visited, every title is reviewed, and every recommendation is something we would offer our own family. That is the standard the name Sai Kripa requires.</p>
          <a className="btn btn-primary" href="sai-kripa.html#listings">View residences</a>
        </motion.div>
      </div>
    </motion.section>

    <motion.section 
      id="values" 
      style={{"paddingTop":"0"}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.span className="section-kicker" variants={fadeInUp}>What guides us</motion.span>
      <motion.h2 style={{"fontSize":"36px","letterSpacing":"-0.035em","marginBottom":"24px"}} variants={fadeInUp}>Values that outlast a sale</motion.h2>
      <div className="card-grid four">
        <motion.article className="info-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <div className="icon">01</div>
          <h3>Integrity first</h3>
          <p>No hidden loadings, no surprise clauses. If a title is unclear, we walk away before you do.</p>
        </motion.article>
        <motion.article className="info-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <div className="icon">02</div>
          <h3>Crafted selection</h3>
          <p>Fewer listings, better ones. We filter for light, access, legal hygiene, and resale strength.</p>
        </motion.article>
        <motion.article className="info-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <div className="icon">03</div>
          <h3>Long counsel</h3>
          <p>The relationship does not end at handover. We stay on for fit-outs, tenants, and next moves.</p>
        </motion.article>
        <motion.article className="info-card" variants={fadeInUp} whileHover={{ y: -8 }}>
          <div className="icon">04</div>
          <h3>Grace in process</h3>
          <p>Timelines, site visits, and negotiations are handled with calm — never pressure.</p>
        </motion.article>
      </div>
    </motion.section>

    <motion.section 
      style={{"paddingTop":"10px"}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.span className="section-kicker" variants={fadeInUp}>Milestones</motion.span>
      <motion.h2 style={{"fontSize":"36px","letterSpacing":"-0.035em","marginBottom":"8px"}} variants={fadeInUp}>How the house grew</motion.h2>
      <div className="timeline">
        <motion.div className="tl" variants={fadeInUp}>
          <strong>2008</strong>
          <div>
            <h3>The first desk</h3>
            <p>Sai Kripa opens as a two-person advisory for families buying their first independent home.</p>
          </div>
        </motion.div>
        <motion.div className="tl" variants={fadeInUp}>
          <strong>2014</strong>
          <div>
            <h3>Residential studio</h3>
            <p>In-house planning support is added so clients can read drawings before they sign.</p>
          </div>
        </motion.div>
        <motion.div className="tl" variants={fadeInUp}>
          <strong>2019</strong>
          <div>
            <h3>Land &amp; commercial</h3>
            <p>Select plotted and boutique commercial mandates join the book — still invitation-led.</p>
          </div>
        </motion.div>
        <motion.div className="tl" variants={fadeInUp}>
          <strong>2026</strong>
          <div>
            <h3>Intelligent living</h3>
            <p>A curated digital studio launches so clients can study inventory with the same calm they get in person.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>

    <motion.section 
      style={{"paddingTop":"10px"}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.span className="section-kicker" variants={fadeInUp}>People</motion.span>
      <motion.h2 style={{"fontSize":"36px","letterSpacing":"-0.035em","marginBottom":"24px"}} variants={fadeInUp}>The room that represents you</motion.h2>
      <div className="team">
        <motion.article className="member" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80" alt="Abelia Rao" loading="lazy" />
          <div className="body">
            <h3>Abelia Rao</h3>
            <p className="role">Principal advisor</p>
          </div>
        </motion.article>
        <motion.article className="member" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80" alt="Kabir Mehta" />
          <div className="body">
            <h3>Kabir Mehta</h3>
            <p className="role">Land &amp; legal</p>
          </div>
        </motion.article>
        <motion.article className="member" variants={fadeInUp} whileHover={{ y: -8 }}>
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80" alt="Meera Iyer" />
          <div className="body">
            <h3>Meera Iyer</h3>
            <p className="role">Residences &amp; interiors</p>
          </div>
        </motion.article>
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
        <h2>Walk a home with us.</h2>
        <p>Private viewings by appointment. We reply within one working day.</p>
      </div>
      <a className="btn btn-primary" href="mailto:hello@saikripa.example">Write to Sai Kripa</a>
    </motion.div>
    </>
  );
}