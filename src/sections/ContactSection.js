"use client";

import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2"; // <-- Importamos SweetAlert2

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
    console.log(formData);

    // Mostramos SweetAlert2 de éxito
    Swal.fire({
      title: '¡Consulta enviada!',
      text: 'Gracias por ponerte en contacto. Te responderemos a la brevedad.',
      icon: 'success',
      confirmButtonColor: '#3956dd',
      confirmButtonText: 'Cerrar'
    });

    // Limpiamos el formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <Slide direction="right" triggerOnce>
      <section
        id="contact"
        className="relative py-16 mt-40 bg-scroll md:bg-fixed bg-center bg-cover bg-no-repeat scroll-mt-24"
        style={{
          backgroundImage: "url('/gallery/parallax_1.png')",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 z-10">

          {/* Texto lado izquierdo */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white">
            <h2 className="text-4xl font-poppins font-bold md:text-5xl mb-6 ">
              Estamos para acompañarte en cada paso
            </h2>
            <p className="text-lg font-montserrat font-light text-AccentGray">
              Dejanos tu consulta y te responderemos a la brevedad. Tu salud es nuestra prioridad.
            </p>
          </div>

          {/* Formulario lado derecho */}
          <div className="w-full md:w-1/2 bg-White/10 backdrop-blur-md p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="rounded px-4 py-3 focus:outline-none font-poppins font-normal text-White/80 focus:border-PrimaryBlue bg-White/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded px-4 py-3 focus:outline-none font-poppins font-normal text-White/80 focus:border-PrimaryBlue bg-White/20"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono (opcional)"
                value={formData.telefono}
                onChange={handleChange}
                className="rounded px-4 py-3 focus:outline-none font-poppins font-normal text-White/80 focus:border-PrimaryBlue bg-White/20"
              />
              <textarea
                name="mensaje"
                placeholder="Escribí tu mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="rounded px-4 py-3 focus:outline-none font-poppins font-normal text-White/80 focus:border-PrimaryBlue bg-White/20 h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-White/20 text-White md:mx-auto md:w-1/2 font-montserrat font-medium px-6 py-3 rounded hover:bg-AccentGray/50 transition-all duration-1000 transform hover:scale-105 shadow-md hover:shadow-lg hover:text-TextDark"
              >
                Enviar consulta
              </button>
            </form>
          </div>

        </div>
      </section>
    </Slide>
  );
}
