"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

export default function GallerySection() {
  const images = [
    "/gallery/swiper/gallery_1.png",
    "/gallery/swiper/gallery_2.png",
    "/gallery/swiper/gallery_3.png",
    "/gallery/swiper/gallery_4.png",
    "/gallery/swiper/gallery_5.png",
    "/gallery/swiper/gallery_6.png",
  ];

  const [modalImage, setModalImage] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <FadeInSection direction="righ" delay={0.3}>
      <section id="gallery" className="py-16 mt-40 bg-White relative scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-medium text-PrimaryBlue mb-12">
            <span className="bg-PrimaryBlue text-White/80 p-1 sm:p-2">Más de 15 años</span> dedicados a la salud urológica
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              setTimeout(() => {
                if (!swiper?.params?.navigation || !prevRef.current || !nextRef.current) return;
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }, 0);
            }}
            spaceBetween={20}
            slidesPerView={1.1}
            loop
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  className="shadow-md w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(src)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas personalizadas */}
          <div className="flex justify-center gap-8 mt-8">
            <button
              ref={prevRef}
              className="text-PrimaryBlue hover:text-AccentLightBlue transition transform hover:scale-110"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              ref={nextRef}
              className="text-PrimaryBlue hover:text-AccentLightBlue transition transform hover:scale-110"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={closeModal}
          >
            {/* Botón cerrar */}
            <button
              className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition-colors z-50"
              onClick={closeModal}
            >
              ×
            </button>

            <img
              src={modalImage}
              alt="Imagen ampliada"
              className="max-w-3xl max-h-[80vh] shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>
    </FadeInSection>

  );
}
