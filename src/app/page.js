import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ContactSection from "@/sections/ContactSection";
import BlogSection from "@/sections/BlogSection";
import GallerySection from "@/sections/GallerySection";
import TestimonialsSection from "@/sections/testimonials/TestimonialsSection";
import Link from "next/link";
import { sanity } from "@/sanity/lib/sanity";

async function hasPosts(category) {
  const query = `
    count(*[_type == "post" && references(*[_type=="category" && title=="${category}"]._id)])
  `;
  const count = await sanity.fetch(query);
  return count > 0;
}

export default async function Home() {
  // const showProfesional = await hasPosts("Profesional");
  // const showPacientes = await hasPosts("Pacientes");
  const showProfesional = true;
  const showPacientes = true;

  console.log("PROFESIONAL", showProfesional);
  console.log("PACIENTES", showPacientes);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <TestimonialsSection />

      {showProfesional && (
        <section className="mt-40">
          <BlogSection
            category="Profesional"
            limit={2}
            hideLoadMore={true}
            customTitle="Últimos Artículos para Profesionales"
          />
          <div className="flex justify-center mt-8">
            <Link
              href="/blog/profesional"
              className="bg-PrimaryBlue text-white font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Ver más artículos para Profesionales
            </Link>
          </div>
        </section>
      )}

      {showPacientes && (
        <section className="mt-40">
          <BlogSection
            category="Pacientes"
            limit={2}
            hideLoadMore={true}
            customTitle="Últimos Artículos para Pacientes"
          />
          <div className="flex justify-center mt-8">
            <Link
              href="/blog/pacientes"
              className="bg-PrimaryBlue text-white font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Ver más artículos para Pacientes
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
