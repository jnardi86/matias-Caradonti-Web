import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ContactSection from "@/sections/ContactSection";
import BlogSection from "@/sections/BlogSection";
import GallerySection from "@/sections/GallerySection";
import TestimonialsSection from "@/sections/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <TestimonialsSection/>
      <BlogSection />
    </>
  );
}
