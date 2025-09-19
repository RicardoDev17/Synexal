import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer"> 
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Synexal</h2>
          <p>Consultora de software que transforma ideas en soluciones digitales.</p>
        </div>

        <div className="footer-links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61580929419060&locale=es_LA"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="https://www.instagram.com/synexalcode/"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Synexal. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
