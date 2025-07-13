"use client";

import { useEffect, useState } from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import {
  Stethoscope,
  Microscope,
  Hospital,
  HeartHandshake,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";
import Tilt from "react-parallax-tilt";

export default function ServicesSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const ServiceCard = ({ Icon, title, description }) => {
    const content = (
      <div className="lg:h-60 flex flex-col items-center p-6 bg-PrimaryBlue shadow-lg rounded-xl group transition-all duration-500 hover:-translate-y-2">
        <Icon className="w-12 h-12 text-white mb-4 group-hover:scale-110 group-hover:drop-shadow-md transition-transform duration-300" />
        <h3 className="text-xl font-poppins font-medium text-white mb-2">{title}</h3>
        <p className="text-sm font-montserrat text-AccentGray/60 leading-relaxed">{description}</p>
      </div>
    );

    return isDesktop ? (
      <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.02} transitionSpeed={2000}>
        {content}
      </Tilt>
    ) : (
      content
    );
  };

  return (
    <Slide direction="up" triggerOnce>
      <section id="services" className="py-8 mt-20 scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <Zoom triggerOnce>
            <h2 className="text-5xl font-poppins font-bold text-PrimaryBlue mb-6 relative inline-block group cursor-default">
              Servicios del Centro de Urología
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-PrimaryBlue/80 transition-all duration-1000 group-hover:w-full group-hover:left-0"></span>
            </h2>
          </Zoom>

          <Fade cascade damping={0.2} triggerOnce>
            <p className="max-w-2xl mx-auto mb-12 text-base sm:text-lg font-poppins text-TextDark leading-relaxed">
              En nuestro centro ofrecemos un abordaje integral y especializado en salud urológica, combinando tecnología de vanguardia con un equipo médico en constante actualización. Cada paciente recibe una atención personalizada en un entorno profesional y empático.
            </p>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                Icon={Stethoscope}
                title="Consulta Urológica"
                description="Evaluación y seguimiento del sistema urinario masculino y femenino."
              />
              <ServiceCard
                Icon={Microscope}
                title="Cirugía Laparoscópica"
                description="Procedimientos mínimamente invasivos que favorecen una recuperación más rápida."
              />
              <ServiceCard
                Icon={Hospital}
                title="Tratamiento de Cálculos"
                description="Diagnóstico y resolución de litiasis renal y urinaria con técnicas modernas."
              />
              <ServiceCard
                Icon={HeartHandshake}
                title="Cirugía Reconstructiva y Salud Transgénero"
                description="Atención especializada y humanizada en procedimientos de reasignación y reconstrucción."
              />
              <ServiceCard
                Icon={ShieldCheck}
                title="Salud Prostática"
                description="Prevención, diagnóstico y tratamiento de afecciones como hiperplasia o cáncer de próstata."
              />
              <ServiceCard
                Icon={HeartPulse}
                title="Disfunción Eréctil y Salud Sexual Masculina"
                description="Abordaje integral y personalizado de trastornos sexuales y disfunciones urológicas."
              />
            </div>
          </Fade>
        </div>
      </section>
    </Slide>
  );
}
