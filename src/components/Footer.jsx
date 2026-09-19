import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.2, color: "#fff" }} transition={{ type: "spring", stiffness: 300 }}><FaFacebook size={20} /></motion.a>
        <motion.a href="#" aria-label="Instagram" whileHover={{ scale: 1.2, color: "#fff" }} transition={{ type: "spring", stiffness: 300 }}><FaInstagram size={20} /></motion.a>
      </div>
      <div className="footer-center">
        <strong>Sai Kripa</strong> · Luxury real estate · Opulent areas, eternal worth
      </div>
      <div className="footer-right">
        <motion.a href="#" aria-label="LinkedIn" whileHover={{ scale: 1.2, color: "#fff" }} transition={{ type: "spring", stiffness: 300 }}><FaLinkedin size={20} /></motion.a>
        <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.2, color: "#fff" }} transition={{ type: "spring", stiffness: 300 }}><FaTwitter size={20} /></motion.a>
      </div>
    </footer>
  );
}
