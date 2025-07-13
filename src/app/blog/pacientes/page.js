"use client";

import BlogSection from "@/sections/BlogSection";
import HeroBanner from "@/components/HeroBanner";
import { Fade } from "react-awesome-reveal";

export default function PacientesBlogPage() {
  return (
    <>
      <HeroBanner
        title="Pacientes"
        subtitle="Información clara y confiable sobre tu salud urológica."
        backgroundImage="/gallery/hero/heroBlog_img_2.png"
        height="h-[70vh]"
      />

      {/* Nueva sección de introducción */}
      <section className="container mx-auto px-4 py-10 max-w-4xl text-center">
        <Fade triggerOnce duration={1000} direction="up">
          <p className="text-base sm:text-lg text-TextDark font-poppins leading-relaxed">
            En este espacio encontrarás artículos y noticias pensados especialmente para vos, sobre temas de salud urológica, tratamientos, cuidados post-quirúrgicos y prevención. <br />
            Nuestro objetivo es brindarte información clara, confiable y sencilla, para que puedas entender mejor tu salud, despejar dudas y sentirte acompañado en cada paso. <br />
            Porque creemos que estar bien informado es fundamental para tomar decisiones seguras y cuidar tu bienestar.
          </p>
        </Fade>
      </section>

      <main className="container mx-auto px-4 py-10">
        <BlogSection 
          category="Pacientes" 
          customTitle={"Últimas Novedades"}
        />
      </main>
    </>
  );
}
