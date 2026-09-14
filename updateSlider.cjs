const fs = require('fs');
const path = 'c:\\Users\\visha\\Downloads\\sai-kripa-website\\sai-kripa-react\\src\\pages\\Home.jsx';
let jsx = fs.readFileSync(path, 'utf8');

// Ensure useState is imported
if (!jsx.includes("import { useState }")) {
  jsx = `import { useState } from 'react';\n` + jsx;
}

const slidesData = `
const slides = [
  {
    leftLabel: "Trusted Realty", leftValue: "300+",
    renderLeftSupport: () => (
      <>
        <div className="thumbs">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=100&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=100&q=80" alt="" />
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
      <img className="mini-house-top" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=240&q=80" alt="" />
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
      <img className="mini-house-top" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=240&q=80" alt="" />
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
      <img className="mini-house-top" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=240&q=80" alt="Aerial" />
    )
  },
  {
    leftLabel: "Avg. residence value", leftValue: "₹1.85 Cr",
    renderLeftSupport: () => (
      <div className="thumbs" style={{position: 'relative', top: 0, left: 0, marginTop: '24px'}}>
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=100&q=80" alt="" />
        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=100&q=80" alt="" />
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
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=100&q=80" alt="Floor plan" />
      </div>
    ),
    rightLabel: "Villas & penthouses", rightValue: "08",
    renderRightSupport: () => (
      <img className="mini-house-top" src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=240&q=80" alt="Pool villa" />
    )
  },
  {
    leftLabel: "RERA-tagged projects", leftValue: "22",
    renderLeftSupport: () => (
      <span className="pill-green">RERA Approved</span>
    ),
    rightLabel: "Families placed", rightValue: "320+",
    renderRightSupport: () => (
      <div className="thumbs" style={{position: 'absolute', top: '32px', right: '32px'}}>
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=100&q=80" alt="" />
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=100&q=80" alt="" />
      </div>
    )
  },
  {
    leftLabel: "Boutique commercial", leftValue: "11",
    renderLeftSupport: () => (
      <div className="thumbs" style={{position: 'relative', top: 0, left: 0, marginTop: '24px'}}>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=100&q=80" alt="Office facade" />
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
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=100&q=80" alt="Keys" />
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
`;

const stateCode = `
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
`;

const allocateSectionRegex = /<section className="allocate" id="services">[\s\S]*?<\/section>/;

const newAllocateSection = `
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
`;

jsx = jsx.replace('export default function Home() {', slidesData + '\nexport default function Home() {\n' + stateCode);
jsx = jsx.replace(allocateSectionRegex, newAllocateSection.trim());

fs.writeFileSync(path, jsx);
console.log("Success");
