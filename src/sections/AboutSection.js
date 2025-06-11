"use client";

import { Slide, Fade, Zoom } from "react-awesome-reveal";

export default function AboutSection() {
  return (
    <Slide direction="left" triggerOnce>
      <section id="about" className="py-16 mt-40 scroll-mt-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-4">
          {/* Imagen */}
          <div className="w-full md:w-1/2">
            <img
              src="/gallery/aboutMe_2.png"
              alt="Dr. Matías Caradonti"
              className="w-full h-auto shadow-lg rounded-md md:rounded-none"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <Zoom triggerOnce>
              <h2 className="text-5xl font-poppins font-bold text-PrimaryBlue mb-6 relative inline-block group cursor-default sm:text-6xl">
                Dr. Matías Caradonti
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-PrimaryBlue/80 transition-all duration-1000 group-hover:w-full group-hover:left-0"></span>
              </h2>
            </Zoom>

            <Fade cascade damping={0.5} triggerOnce>
              <div className="space-y-4">
                <p className="text-base sm:text-lg sm:mr-4 font-poppins text-TextDark leading-relaxed">
                  Médico egresado de la Facultad de Medicina de la UBA en 2010, con especialización universitaria en Urología. Obtuvo el mejor promedio de residencias en el Hospital Aeronáutico Central y fue distinguido con el título jerarquizado en Urología por la Sociedad Argentina de Urología y la Academia Nacional de Medicina.
                </p>
                <p className="text-base sm:text-lg sm:mr-4 font-poppins text-TextDark leading-relaxed">
                  Actualmente se desempeña como Jefe del Servicio de Salud Transgénero y Reconstructiva del Hospital Santojanni (CABA), y como Jefe de los servicios de Urología en el Hospital de Navarro y en OSCHOCA. Es docente en la UBA y en UMAI, revisor de revistas científicas, y consultor en nuevas tecnologías aplicadas a la medicina.
                </p>
                <p className="text-base sm:text-lg sm:mr-4 font-poppins text-TextDark leading-relaxed">
                  Su práctica combina excelencia médica, innovación quirúrgica y un enfoque empático centrado en el paciente, con el objetivo de mejorar su calidad de vida desde un abordaje moderno y humano.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </Slide>
  );
}
