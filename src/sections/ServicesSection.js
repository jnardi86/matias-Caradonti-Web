import FadeInSection from "@/components/FadeInSection";
import { Stethoscope, Microscope, Hospital } from "lucide-react";

export default function ServicesSection() {
  return (
    <FadeInSection direction="up" delay={0.3}>
      <section id="services" className="bg-PrimaryBlue py-16 mt-40 scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-medium text-White/90 mb-12 relative inline-block group cursor-default">
            Servicios
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-White/80 transition-all duration-1000 group-hover:w-full group-hover:left-0"></span>
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {/* Servicio 1 */}
            <div className="flex flex-col items-center p-6 bg-PrimaryBlue/80 rounded-xl group transition-all duration-500 hover:-translate-y-2">
              <Stethoscope className="w-12 h-12 text-white mb-4 group-hover:scale-110 group-hover:drop-shadow-md transition-transform duration-300" />
              <h3 className="text-xl font-poppins font-medium text-white mb-2">
                Consulta Urológica
              </h3>
              <p className="text-sm font-montserrat text-AccentGray/60 leading-relaxed">
                Evaluación integral del sistema urinario masculino y femenino.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="flex flex-col items-center p-6 bg-PrimaryBlue/80 rounded-xl group transition-all duration-500 hover:-translate-y-2">
              <Microscope className="w-12 h-12 text-white mb-4 group-hover:scale-110 group-hover:drop-shadow-md transition-transform duration-300" />
              <h3 className="text-xl font-poppins font-medium text-white mb-2">
                Cirugía Laparoscópica
              </h3>
              <p className="text-sm font-montserrat text-AccentGray/60 leading-relaxed">
                Procedimientos quirúrgicos de mínima invasión con rápida recuperación.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="flex flex-col items-center p-6 bg-PrimaryBlue/80 rounded-xl group transition-all duration-500 hover:-translate-y-2">
              <Hospital className="w-12 h-12 text-white mb-4 group-hover:scale-110 group-hover:drop-shadow-md transition-transform duration-300" />
              <h3 className="text-xl font-poppins font-medium text-white mb-2">
                Tratamiento de Cálculos
              </h3>
              <p className="text-sm font-montserrat text-AccentGray/60 leading-relaxed">
                Diagnóstico y resolución de cálculos renales y urinarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}