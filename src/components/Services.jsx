import "../styles/Services.css";
import desarrolloIcon from "../assets/codigo.png";
import consultoriaIcon from "../assets/consultoria.png";
import licenciasIcon from "../assets/licencia.png";
import soporteIcon from "../assets/soporte.png";

export default function Services() {
  return (
    <section className="services-section" id = "servicios">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        
        <div className="service-card">
          <div className="icon">
            <img src={desarrolloIcon} alt="Desarrollo a la medida" />
          </div>
          <h3>Desarrollo a la medida</h3>
          <p>
            Creamos soluciones de software personalizadas que se adaptan a las
            necesidades de tu negocio.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">
            <img src={consultoriaIcon} alt="Consultoría tecnológica" />
          </div>
          <h3>Consultoría tecnológica</h3>
          <p>
            Te asesoramos en la adopción e implementación de tecnologías para
            optimizar tus procesos.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">
            <img src={licenciasIcon} alt="Venta de licencias de software" />
          </div>
          <h3>Venta de licencias de software</h3>
          <p>
            Proveemos licencias de software confiables y seguras para tu empresa.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">
            <img src={soporteIcon} alt="Soporte y mantenimiento" />
          </div>
          <h3>Soporte y mantenimiento</h3>
          <p>
            Garantizamos la continuidad de tus sistemas con soporte técnico
            especializado.
          </p>
        </div>
        
      </div>
    </section>
  );
}