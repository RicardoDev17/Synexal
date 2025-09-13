import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Transformamos tus ideas en software";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100); 
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="hero" id = "inicio">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="typing-text">
          {displayText}
          <span className="cursor">|</span>
        </h1>
        <p>En Synexal desarrollamos soluciones digitales que impulsan tu negocio.</p>
        <a href="#servicios" className="btn">Ver servicios</a>
      </div>
    </section>
  );
}