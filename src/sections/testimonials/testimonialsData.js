'use client';

// Devuelve el array usando i18n (no valores hardcodeados)
export function buildTestimonials(t) {
  return [
    {
      nombre: t('testimonials.testimonial0.name'),
      foto: '/gallery/testimonials/Lorena.png',
      reseña: t('testimonials.testimonial0.quote'),
    },
    {
      nombre: t('testimonials.testimonial1.name'),
      foto: '/gallery/testimonials/Sergio.png',
      reseña: t('testimonials.testimonial1.quote'),
    },
    {
      nombre: t('testimonials.testimonial2.name'),
      foto: '/gallery/testimonials/Nataly.png',
      reseña: t('testimonials.testimonial2.quote'),
    },
    {
      nombre: t('testimonials.testimonial3.name'),
      foto: '/gallery/testimonials/Dafne.jpg',
      reseña: t('testimonials.testimonial3.quote'),
    },
    {
      nombre: t('testimonials.testimonial4.name'),
      foto: '/gallery/testimonials/Johana.png',
      reseña: t('testimonials.testimonial4.quote'),
    },
    {
      nombre: t('testimonials.testimonial5.name'),
      foto: '/gallery/testimonials/Nicole.png',
      reseña: t('testimonials.testimonial5.quote'),
    },
  ];
}
