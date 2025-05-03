"use client";

export default function BlogPostHero({ title, publishedAt }) {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center text-left bg-PrimaryBlue text-White px-6 md:py-40 md:h-[70vh]">
      
      {/* Overlay opcional si querés agregar luego */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col gap-4">
        <h1 className="text-3xl mt-10 md:text-5xl font-bold font-montserrat">
          {title}
        </h1>
        <p className="text-sm md:text-base font-poppins opacity-80">
          Publicado el {new Date(publishedAt).toLocaleDateString("es-AR")}
        </p>
      </div>

    </section>
  );
}
