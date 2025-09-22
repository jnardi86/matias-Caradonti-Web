import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ContactSection from "@/sections/ContactSection";
import BlogSection from "@/sections/BlogSection";
import GallerySection from "@/sections/GallerySection";
import TestimonialsSection from "@/sections/testimonials/TestimonialsSection";
// import Link from "next/link";
import { sanity } from "@/sanity/lib/sanity";
import ReadMoreLink from "@/components/ReadMoreLink";

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
            customTitle="blogSection.professionalTitle"
          />
          <div className="flex justify-center mt-8">
            {/* <Link
              href="/blog/profesional"
              className="bg-PrimaryBlue text-White font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              {t("blogProfesional.readMore")}
            </Link> */}
            <ReadMoreLink
              href="/blog/profesional"
              tkey="blogProfesional.readMore"
              className="bg-PrimaryBlue text-White font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300"
            />
          </div>
        </section>
      )}

      {showPacientes && (
        <section className="mt-10">
          <BlogSection
            category="Pacientes"
            limit={3}
            hideLoadMore={true}
            customTitle="blogSection.patientTitle"
          />
          <div className="flex justify-center mt-8">
            {/* <Link
              href="/blog/pacientes"
              className="bg-PrimaryBlue text-White font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              {t("blogPaciente.readMore")}
            </Link> */}
            <ReadMoreLink
              href="/blog/pacientes"
              tkey="blogPaciente.readMore"
              className="bg-PrimaryBlue text-White font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300"
            />
          </div>
        </section>
      )}
    </>
  );
}
