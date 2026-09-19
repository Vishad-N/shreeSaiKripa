import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(255, 255, 255, 0.9)" : "#fff",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <motion.img 
            src="/shree-logo.png" 
            alt="Shree Logo" 
            style={{ width: 34, height: 34, objectFit: 'contain', marginRight: '2px' }} 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <span className="logo-word">Sai Kripa</span>
        </Link>
        <nav className="desktop-nav">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About Us</Link>
          <Link className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Link>
          <Link className={location.pathname === "/faqs" ? "active" : ""} to="/faqs">FAQs</Link>
        </nav>
        <div className="header-right">
          <motion.a 
            className="btn btn-outline" 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-nav open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
            <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)} style={{ marginTop: '20px', width: '200px' }}>
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
