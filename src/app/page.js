import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ContactSection from "@/sections/ContactSection";
import BlogSection from "@/sections/BlogSection";
import GallerySection from "@/sections/GallerySection";
import TestimonialsSection from "@/sections/testimonials/TestimonialsSection";
import Link from "next/link";
import { sanity } from "@/sanity/lib/sanity";

// Esta función verifica si hay publicaciones en la categoría especificada
async function hasPosts(category) {
  const cleanCategory = category.trim();
  const query = `
    count(*[
      _type == "post" &&
      references(*[_type=="category" && title=="${cleanCategory}"]._id)
    ])
  `;
  const count = await sanity.fetch(query);
  return count > 0;
}

export default async function Home() {
  const showProfesional = await hasPosts("Profesionales");
  const showPacientes = await hasPosts("Pacientes");


  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <TestimonialsSection />

      {showProfesional && (
        <section className="mt-10">
          <BlogSection
            category="Profesionales"
            limit={3}
            hideLoadMore={true}
            customTitle="Novedades para Profesionales"
          />
          <div className="flex justify-center mt-8">
            <Link
              href="/blog/profesional"
              className="bg-PrimaryBlue text-White font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Ver más
            </Link>
          </div>
        </section>
      )}

      {showPacientes && (
        <section className="mt-10">
          <BlogSection
            category="Pacientes"
            limit={3}
            hideLoadMore={true}
            customTitle="Novedades para Pacientes"
          />
          <div className="flex justify-center mt-8">
            <Link
              href="/blog/pacientes"
              className="bg-PrimaryBlue text-White font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Ver más
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
