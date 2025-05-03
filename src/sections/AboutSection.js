"use client";

import FadeInSection from "@/components/FadeInSection";



export default function AboutSection() {
  return (
    <FadeInSection direction="left" delay={0.3}>
      <section id="about" className="bg-AccentGray py-16 mt-40 scroll-mt-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-4">
          {/* Imagen */}
          <div className="w-full md:w-1/2">
            <img
              src="/gallery/aboutMe_2.png"
              alt="Dr. Matías Caradonti"
              className="w-full h-auto shadow-lg rounded-md  animate-fadeIn md:rounded-none"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <h2 className="text-4xl sm:text-5xl font-montserrat font-medium text-PrimaryBlue mb-6 relative inline-block group cursor-default">
              Dr. Matías Caradonti
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-PrimaryBlue/80 transition-all duration-1000 group-hover:w-full group-hover:left-0"></span>
            </h2>


            <p className="text-base sm:text-lg sm:mr-4 font-poppins text-TextDark leading-relaxed">
              Con una sólida formación en urología y cirugía mínimamente invasiva, el Dr. Matías Caradonti ofrece un enfoque integral y personalizado en el tratamiento de patologías urológicas. Su compromiso está centrado en mejorar la calidad de vida de sus pacientes, combinando excelencia médica, innovación tecnológica y atención humana de primer nivel.
            </p>
            <p className="text-base sm:text-lg sm:mr-4 font-poppins text-TextDark leading-relaxed">
              A lo largo de su carrera ha participado activamente en congresos nacionales e internacionales, y ha formado parte de equipos médicos de alto prestigio. Su dedicación constante a la actualización profesional garantiza un abordaje moderno, preciso y empático en cada consulta.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>

  );
}

