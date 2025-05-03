"use client";

export default function HeroSection() {
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
        <source src="/gallery/hero/hero_video_mobile.mp4" type="video/mp4" />
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
      <div className="absolute inset-0 bg-TextDark/60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 text-center sm:text-left">
        <div className="max-w-2xl text-White">
          <h1 className="text-3xl sm:text-6xl font-montserrat font-semibold mb-4 leading-tight animate-fadeDown">
            Dr. Matías Caradonti
          </h1>
          <p className="text-base sm:text-xl font-poppins font-light mb-6 animate-fadeUp">
            Especialista en urología y cirugía mínimamente invasiva.
          </p>
          <a
            href="#contact"
            className="inline-block sm:hidden bg-White/60 text-TextDark font-montserrat font-medium px-6 py-3 rounded shadow hover:bg-gray-100 transition animate-fadeUp"
          >
            Agendá tu consulta
          </a>
        </div>
      </div>
    </section>
  );
}
