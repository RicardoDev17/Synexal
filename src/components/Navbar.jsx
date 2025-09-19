import { useState, useEffect } from "react";
import logo from "../assets/SynexalPNG (2).png";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, null, `#${targetId}`);
    }

    // Cierra el menú después de dar clic en un link (en móvil)
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="#inicio" onClick={(e) => handleSmoothScroll(e, "inicio")}>
          <img src={logo} alt="Synexal Logo" className="logo-img" />
        </a>
      </div>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú de links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#inicio" onClick={(e) => handleSmoothScroll(e, "inicio")}>
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#sobre-nosotros"
            onClick={(e) => handleSmoothScroll(e, "sobre-nosotros")}
          >
            Sobre nosotros
          </a>
        </li>
        <li>
          <a href="#servicios" onClick={(e) => handleSmoothScroll(e, "servicios")}>
            Servicios
          </a>
        </li>
        <li>
          <a href="#contacto" onClick={(e) => handleSmoothScroll(e, "contacto")}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
