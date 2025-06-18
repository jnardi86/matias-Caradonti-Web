"use client";

import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      telefono: formData.telefono,
      message: formData.mensaje,
      date: new Date().toLocaleDateString("es-AR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )

      .then(() => {
        Swal.fire({
          title: "¡Consulta enviada!",
          text: "Gracias por ponerte en contacto. Te responderemos a la brevedad.",
          icon: "success",
          confirmButtonColor: "#3956dd",
          confirmButtonText: "Cerrar",
        });
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      })
      .catch(() => {
        console.error(err);  // <-- verás el 403 o el código real
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al enviar el mensaje. Intentá nuevamente.",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "Cerrar",
        });
      });
  };

  return (
    <Slide direction="right" triggerOnce>
      <section
        id="contact"
        className="relative py-16 mt-40 bg-scroll md:bg-fixed bg-center bg-cover bg-no-repeat scroll-mt-24"
        style={{ backgroundImage: "url('/gallery/parallax_1.png')" }}
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
          <div className="w-full md:w-1/2 text-center md:text-left text-white">
            <h2 className="text-4xl font-poppins font-bold md:text-5xl mb-6 ">
              Estamos para acompañarte en cada paso
            </h2>
            <p className="text-lg font-montserrat font-light text-AccentGray">
              Dejanos tu consulta y te responderemos a la brevedad. Tu salud es nuestra prioridad.
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-White/10 backdrop-blur-md p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required className="rounded px-4 py-3 focus:outline-none font-poppins font-normal text-White/80 focus:border-PrimaryBlue bg-White/20" />
              <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required className="rounded px-4 py-3 focus:outline-none font-poppins font-normal text-White/80 focus:border-PrimaryBlue bg-White/20" />
              <input type="tel" name="telefono" placeholder="Teléfono (opcional)" value={formData.telefono} onChange={handleChange} className="rounded px-4 py-3 focus:outline-none font-poppins font-normal text-White/80 focus:border-PrimaryBlue bg-White/20" />
              <textarea name="mensaje" placeholder="Escribí tu mensaje" value={formData.mensaje} onChange={handleChange} required className="rounded px-4 py-3 focus:outline-none font-poppins font-normal text-White/80 focus:border-PrimaryBlue bg-White/20 h-32"></textarea>
              <button type="submit" className="bg-White/20 text-White md:mx-auto md:w-1/2 font-montserrat font-medium px-6 py-3 rounded hover:bg-AccentGray/50 transition-all duration-1000 transform hover:scale-105 shadow-md hover:shadow-lg hover:text-TextDark">
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </section>
    </Slide>
  );
}
