import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const faqsData = [
  { id: 1, cat: 'buy', q: 'Do you only handle luxury inventory?', a: 'No. We are selective, not exclusive to penthouses. First homes, plotted land, and boutique commercial sit beside villa mandates — the filter is quality of title and long-term worth, not a price floor.' },
  { id: 2, cat: 'buy', q: 'How many properties will I actually visit?', a: 'Usually three to five. We complete legal and planning checks before a site visit so you are not touring assets that cannot close. If nothing fits, we say so rather than pad the calendar.' },
  { id: 3, cat: 'buy', q: 'Can you work with my bank or CA?', a: 'Yes. We share a written brief, comparable sales, and a cost sheet your banker or chartered accountant can use. We do not replace their advice; we make it easier.' },
  { id: 4, cat: 'sell', q: 'Will you list my home on every portal?', a: 'Not by default. Quiet homes often sell better through a controlled showing list. If a public listing helps the asset, we agree the creative, the price band, and the disclosure in writing first.' },
  { id: 5, cat: 'sell', q: 'How do you arrive at an asking price?', a: 'Recent closed sales on the same street, time-on-market, and the cost of work a buyer will still have to do. We present a range, not a slogan number.' },
  { id: 6, cat: 'legal', q: 'Do you review title in-house?', a: 'A legal reviewer sits on every mandate. For complex land or older buildings we bring in outside counsel. You receive a plain-language note of what is clean, what is pending, and what we will not proceed on.' },
  { id: 7, cat: 'legal', q: 'Can non-resident buyers work with you?', a: 'Yes. We schedule video walkthroughs, coordinate power of attorney, and sequence FEMA / banking steps with your counsel. Time-zone calls are part of the service, not an extra.' },
  { id: 8, cat: 'fees', q: 'How are you paid?', a: 'Success fee on close, agreed in a one-page mandate before work starts. Diligence costs that need outside specialists are estimated up front. There is no “processing” charge hiding in the token.' },
  { id: 9, cat: 'fees', q: 'Is the first conversation billed?', a: 'No. The introductory call and a high-level fit check are complimentary. If we are not the right desk, we will say that in the first meeting.' },
  { id: 10, cat: 'buy', q: 'Do you help after registration?', a: 'Yes. Fit-out introductions, society onboarding, tenant placement, and a twelve-month check-in are part of residential mandates. The advisor who closed with you stays your number.' }
];

export default function FAQs() {
  const [openId, setOpenId] = useState(1);
  const [filter, setFilter] = useState('all');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqsData.filter(faq => filter === 'all' || faq.cat === filter);

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
            <motion.p className="eyebrow" variants={fadeInUp}>ANSWERS FIRST</motion.p>
            <motion.h1 variants={fadeInUp}>CLEAR<br />QUESTIONS.<br />CALM REPLIES.</motion.h1>
            <motion.p className="lead" variants={fadeInUp}>Buying or selling should not feel like a second job. These are the questions clients ask before they walk a home with us.</motion.p>
            <motion.div className="hero-actions" variants={fadeInUp}>
              <a className="btn btn-primary" href="#list">Read FAQs</a>
              <a className="btn btn-ghost" href="/services">See services</a>
            </motion.div>
          </div>
          <motion.div className="page-hero-visual" variants={fadeInUp}>
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" alt="Calm interior" />
          </motion.div>
        </div>
      </motion.div>

      <motion.section 
        id="list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="faq-wrap">
          <motion.div className="faq-filters" role="tablist" variants={fadeInUp}>
            <button className={filter === 'all' ? "on" : ""} onClick={() => setFilter('all')}>All</button>
            <button className={filter === 'buy' ? "on" : ""} onClick={() => setFilter('buy')}>Buying</button>
            <button className={filter === 'sell' ? "on" : ""} onClick={() => setFilter('sell')}>Selling</button>
            <button className={filter === 'legal' ? "on" : ""} onClick={() => setFilter('legal')}>Legal</button>
            <button className={filter === 'fees' ? "on" : ""} onClick={() => setFilter('fees')}>Fees</button>
          </motion.div>

          <motion.div layout className="faq-list-container">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.map((faq) => (
                <motion.article 
                  key={faq.id} 
                  className={`faq-item ${openId === faq.id ? 'open' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <button className="faq-q" onClick={() => toggleFaq(faq.id)}>
                    {faq.q}
                    <motion.span 
                      className="plus"
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    >
                      {openId === faq.id ? '−' : '+'}
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div 
                        className="faq-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
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
          <h2>Still deciding?</h2>
          <p>Write to us with the city and the decision you are trying to make. A principal replies within a working day.</p>
        </div>
        <a className="btn btn-primary" href="mailto:hello@saikripa.example">Ask Sai Kripa</a>
      </motion.div>
    </>
  );
}