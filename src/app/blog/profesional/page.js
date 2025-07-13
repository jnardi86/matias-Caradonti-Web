"use client";

import BlogSection from "@/sections/BlogSection";
import HeroBanner from "@/components/HeroBanner";
import { Fade } from "react-awesome-reveal";

export default function ProfesionalBlogPage() {
  return (
    <>
      <HeroBanner
        title="Profesionales"
        subtitle="Novedades sobre urología, cirugía y nuevas tecnologías."
        backgroundImage="/gallery/hero/heroBlog_img_1.png"
        height="h-[70vh]"
      />

      {/* Nueva sección de introducción */}
      <section className="container mx-auto px-4 py-10 max-w-4xl text-center">
        <Fade triggerOnce duration={1000} direction="up">
          <p className="text-base sm:text-lg text-TextDark font-poppins leading-relaxed">
            En este espacio encontrarás las últimas novedades en el campo de la urología, la cirugía mínimamente invasiva y las nuevas tecnologías aplicadas a la salud. <br />
            Compartimos artículos, experiencias clínicas, actualizaciones de congresos, cursos, técnicas quirúrgicas y avances científicos que marcan tendencia en nuestra especialidad. <br />
            Nuestro objetivo es brindar información confiable, actualizada y útil para profesionales del área médica interesados en seguir creciendo y aprendiendo.
          </p>
        </Fade>
      </section>

      <main className="container mx-auto px-4 py-10">
        <BlogSection 
          category="Profesionales" 
          customTitle={"Últimas novedades"}
        />
      </main>
    </>
  );
}
