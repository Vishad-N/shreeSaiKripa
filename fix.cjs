const fs = require('fs');
const path = 'c:\\Users\\visha\\Downloads\\sai-kripa-website\\sai-kripa-react\\src\\index.css';
let css = fs.readFileSync(path, 'utf8');

const parts = css.split('.wide-shot {');
const newTail = `
      margin-top: 22px;
      border-radius: 22px;
      overflow: hidden;
      height: 280px;
    }
    .wide-shot img { width: 100%; height: 280px; object-fit: cover; }

    .discover { text-align: center; padding-top: 72px; }
    .discover h2 { font-size: 36px; letter-spacing: -0.035em; }
    .discover > p { color: var(--muted); margin: 10px auto 32px; max-width: 420px; }
    
    .disc-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      text-align: left;
    }
    .disc-card {
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }
    .disc-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 60px rgba(17, 19, 24, 0.15);
    }
    .disc-card img { 
      width: 100%; height: 190px; object-fit: cover;
      transition: transform 0.5s ease;
    }
    .disc-card:hover img {
      transform: scale(1.05);
    }
    .disc-card .body { padding: 16px 16px 18px; }
    .disc-card h4 { font-size: 16px; margin-bottom: 6px; }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--blue);
      margin-top: 10px;
    }

    .clients {
      display: grid;
      grid-template-columns: 0.85fr 1.15fr 0.85fr;
      gap: 20px;
      align-items: center;
      padding-bottom: 72px;
    }
    .clients h2 { font-size: 34px; letter-spacing: -0.035em; margin-bottom: 10px; }
    .clients p { color: var(--muted); font-size: 14px; }
    .stars { color: #f5b942; letter-spacing: 2px; margin: 16px 0 4px; font-size: 18px; }
    .client-label { font-size: 13px; color: #6b7280; }
    .client-photos { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .client-photos img {
      height: 170px;
      width: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
    .cta-dark {
      background: var(--dark);
      color: #fff;
      border-radius: 22px;
      padding: 24px 22px;
    }
    .cta-dark h4 { margin: 8px 0 10px; }
    .cta-dark p { color: #c5cad4; font-size: 14px; margin-bottom: 18px; }
    .cta-dark .btn { width: 100%; background: #fff; color: var(--ink); }

    footer {
      background: #0f1117;
      color: #9aa0ad;
      text-align: center;
      padding: 22px;
      font-size: 13px;
    }
    footer strong { color: #fff; font-family: "Montserrat", sans-serif; }

    @media (max-width: 980px) {
      header, .hero, section, .living { padding-left: 20px; padding-right: 20px; }
      header { flex-wrap: wrap; }
      nav { order: 3; width: 100%; justify-content: space-between; }
      .hero-grid, .living-grid, .metric-grid, .success-grid, .invest-grid, .disc-grid, .clients, .stats-bar {
        grid-template-columns: 1fr;
      }
      .hero-visual { height: 340px; }
      .hero-visual img.house { position: relative; width: 100%; height: 340px; right: 0; top: 0; mask-image: none; border-radius: 18px; }
      .stats-bar { margin: 18px 16px 0; border-radius: 22px; }
      .stats-copy { justify-self: start; }
      .allocate-aside, .success-head { text-align: left; }
      .page { margin: 0; border-radius: 0; }
    }
`;

fs.writeFileSync(path, parts[0] + '.wide-shot {' + newTail);
