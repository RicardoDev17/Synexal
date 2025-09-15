import React from "react";
import "../styles/Contact.css"; // <-- aquí irán los estilos

export default function Contact() {
  return (
    <div className="contact-container" id="contacto">
      <div className="contact-header">
        <h1>Contacto</h1>
        <p class="description">
          ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para ti.
          Contáctanos y te responderemos lo antes posible.
        </p>
      </div>

      <div className="info">
        <div className="card">
          <div className="card-header">
            <h2>Información de contacto</h2>
            <p class ="description">Encuentra otras formas de ponerte en contacto con nosotros.</p>
          </div>
          <div className="card-content">
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>contacto@tuempresa.com</p>
                <p>soporte@tuempresa.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h3>Teléfono</h3>
                <p>+34 123 456 789</p>
                <p>+34 987 654 321</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">⏰</span>
              <div>
                <h3>Horario</h3>
                <p>
                  Lunes - Viernes: 9:00 - 18:00<br />
                  Sábados: Cerrado<br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ayuda inmediata */}
        <div className="card">
          <div className="card-header">
            <h2>¿Necesitas ayuda inmediata?</h2>
          </div>
          <div className="card-content">
            <p>Si tienes una consulta urgente, llámanos directamente.</p>
            <div className="btn-group">
              <button className="btn">📞 Llamar ahora</button>
              <button className="btn">📧 Email directo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}