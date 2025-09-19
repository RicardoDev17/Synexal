import { useState } from "react";
import "../styles/About.css";
import tituloImg from "../assets/titulo.jpg";
import tituloImgJ from "../assets/tituloJasso.jpg";

export default function About() {
  const team = [
    { name: "Ricardo Pérez", role: "CEO y cofundador", img: tituloImg },
    { name: "David Figueroa", role: "CEO y cofundador", img: tituloImgJ },
  ];

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeSlide = (direction) => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      if (direction === "next") {
        setCurrent(current === team.length - 1 ? 0 : current + 1);
      } else {
        setCurrent(current === 0 ? team.length - 1 : current - 1);
      }
      setAnimating(false);
    }, 400);
  };

  return (
    <section className="about" id="sobre-nosotros">
      <div className="about-container">
        <div className="about-text">
          <h2 className="title">Sobre <span>Nosotros</span></h2>
          <p className="description">
            En <strong>Synexal</strong> transformamos ideas en soluciones digitales innovadoras.
            Somos un equipo apasionado por la tecnología, enfocado en crear software
            eficiente, escalable y adaptado a las necesidades de cada cliente.
          </p>
          <p className="description">
            Nuestro compromiso es impulsar el crecimiento de empresas y personas
            a través de la innovación, la creatividad y la excelencia tecnológica.
          </p>
          <a href="#contacto" className="btn-explore">Contáctanos</a>
        </div>

        <div className="team-carousel">
          <h2 className="title">Nuestro <span>Equipo</span></h2>
          <div className="carousel-container">
            <button className="carousel-btn left" onClick={() => changeSlide("prev")} aria-label="Slide anterior">❮</button>

            <div className={`carousel-slide card ${animating ? "fade-out" : "fade-in"}`}>
              <img src={team[current].img} alt={team[current].name} />
              <h3>{team[current].name}</h3>
              <p>{team[current].role}</p>
            </div>

            <button className="carousel-btn right" onClick={() => changeSlide("next")} aria-label="Slide siguiente">❯</button>
          </div>
          
          {/* Indicadores para móviles */}
          <div className="carousel-indicators">
            {team.map((_, index) => (
              <button
                key={index}
                className={`indicator ${current === index ? "active" : ""}`}
                onClick={() => {
                  if (!animating) {
                    setAnimating(true);
                    setTimeout(() => {
                      setCurrent(index);
                      setAnimating(false);
                    }, 400);
                  }
                }}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}