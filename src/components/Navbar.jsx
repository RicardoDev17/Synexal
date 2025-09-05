import logo from "../assets/SynexalPNG (2).png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="logo">
        <a href="#inicio">
          <img src={logo} alt="Synexal Logo" style={{ height: "50px" }} />
        </a>
      </div>
      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
