import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4w02zkg",   
        "template_x53jade", 
        form.current,       
        "tAEeHVwv2E6vTMQiY" 
      )
      .then(
        (result) => {
          alert("Correo enviado correctamente ✅");
          console.log("Success:", result.text);
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar el correo ❌");
          console.error("Error details:", error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contacto" className="contact-section">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-4 max-w-md mx-auto border rounded-lg shadow"
      >
        <h2 className="text-xl font-bold mb-4">Enviar un correo</h2>

        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Tu correo"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Escribe tu mensaje"
          required
          rows="4"
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}
