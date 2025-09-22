"use client";

import BlogSection from "@/sections/BlogSection";
import HeroBanner from "@/components/HeroBanner";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export default function ProfesionalBlogPage() {

  const { t, i18n } = useTranslation('common');


  return (
    <>
      <HeroBanner
        title={t('blogProfesional.title')}
        subtitle={t('blogProfesional.subtitle')}
        backgroundImage="/gallery/hero/heroBlog_img_1.png"
        height="h-[70vh]"
      />

      {/* Nueva sección de introducción */}
      <section className="container mx-auto px-4 py-10 max-w-4xl text-center">
        <Fade triggerOnce duration={1000} direction="up">
          <p className="text-base sm:text-lg text-TextDark font-poppins leading-relaxed">
            {t("blogProfesional.description1")}
          </p>
          <p className="mt-4 text-base sm:text-lg text-TextDark font-poppins leading-relaxed">
            {t("blogProfesional.description2")}
          </p>
          <p className="mt-4 text-base sm:text-lg text-TextDark font-poppins leading-relaxed">
            {t("blogProfesional.description3")}
          </p>
        </Fade>
      </section>

      <main className="container mx-auto px-4 py-10">
        <BlogSection
          category="Profesionales"
          customTitle={t("blogProfesional.latestPosts")}
        />
      </main>
    </>
  );
}
