import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
        <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
      </div>
      <div className="footer-center">
        <strong>Sai Kripa</strong> · Luxury real estate · Opulent areas, eternal worth
      </div>
      <div className="footer-right">
        <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
        <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
      </div>
    </footer>
  );
}
