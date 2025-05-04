"use client";

import { Zoom, Fade } from "react-awesome-reveal";
import { useRef } from "react";

export default function HeroSection() {

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      id="hero"
    >
      {/* Video fondo - mobile */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/gallery/hero/hero_video_mobile_3.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      {/* Video fondo - desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/gallery/hero/hero_video_desktop.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      {/* Overlay oscuro encima del video */}
      <div className="absolute inset-0 sm:bg-TextDark/60 bg-TextDark/90 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 text-center ">
        <div className="w-full text-White">
          <Zoom triggerOnce duration={1000} delay={0} fraction={0}>
            <h1 className="text-5xl font-poppins font-semibold mb-4 leading-tight sm:text-6xl lg:text-7xl">
              Dr. Matías <span className="bg-White/40 text-TextDark px-4">Caradonti</span>
            </h1>
          </Zoom>
          <Fade direction="up" delay={500} triggerOnce>
            <p className="font-montserrat text-xl font-light mb-6 lg:text-3xl">
              Especialista en urología y cirugía mínimamente invasiva.
            </p>
          </Fade>
          <Fade direction="up" delay={800} triggerOnce>
            <button
              onClick={handleScrollToContact}
              className="sm:hidden mt-10 px-6 py-4 bg-white/50 text-TextDark font-poppins font-semibold text-lg rounded-md shadow-md backdrop-blur transition duration-300 hover:bg-white hover:scale-105 hover:shadow-lg"
            >
              Agendá tu consulta
            </button>
          </Fade>
        </div>
      </div>
    </section>
  );
}
