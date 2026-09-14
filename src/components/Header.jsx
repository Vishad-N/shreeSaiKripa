import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <Link className="logo" to="/">
        <img src="/shree-logo.png" alt="Shree Logo" style={{ width: 34, height: 34, objectFit: 'contain', marginRight: '2px' }} />
        <span className="logo-word">Sai Kripa</span>
      </Link>
      <nav>
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Home
        </Link>
        <Link
          className={location.pathname === "/about" ? "active" : ""}
          to="/about"
        >
          About Us
        </Link>
        <Link
          className={location.pathname === "/services" ? "active" : ""}
          to="/services"
        >
          Services
        </Link>
        <Link
          className={location.pathname === "/faqs" ? "active" : ""}
          to="/faqs"
        >
          FAQs
        </Link>
      </nav>
      <div className="header-right">
        <a className="btn btn-outline" href="#contact">
          Contact Us
        </a>
      </div>
    </header>
  );
}
