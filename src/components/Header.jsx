import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <img src="/shree-logo.png" alt="Shree Logo" style={{ width: 34, height: 34, objectFit: 'contain', marginRight: '2px' }} />
          <span className="logo-word">Sai Kripa</span>
        </Link>
        <nav className="desktop-nav">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About Us</Link>
          <Link className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Link>
          <Link className={location.pathname === "/faqs" ? "active" : ""} to="/faqs">FAQs</Link>
        </nav>
        <div className="header-right">
          <a className="btn btn-outline" href="#contact">
            Contact Us
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
        <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)} style={{ marginTop: '20px', width: '200px' }}>
          Contact Us
        </a>
      </div>
    </>
  );
}
