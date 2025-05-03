"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonials from "./testimonialsData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

export default function TestimonialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <FadeInSection direction="down" delay={0.3}>
      <section id="testimonials" className="py-16 mt-40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-medium text-PrimaryBlue mb-12">
            <span className="bg-PrimaryBlue text-White/80 p-1 sm:p-2">Testimonios</span> de Pacientes
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
            spaceBetween={30}
            slidesPerView={1.1}
            loop
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((testimonio, index) => (
              <SwiperSlide key={index}>
                <div className="bg-White  overflow-hidden w-[280px] h-[350px] mx-auto flex flex-col group transition-shadow duration-500 hover:shadow-xl">
                  {/* Parte de la imagen */}
                  <div className="bg-White p-6 flex justify-center items-center transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={testimonio.foto}
                      alt={testimonio.nombre}
                      className="w-36 h-36 object-cover rounded-full shadow-md"
                    />
                  </div>

                  {/* Parte del texto */}
                  <div className=" p-6 flex flex-col items-center text-center h-full">
                    <h3 className="text-lg font-bold font-montserrat text-PrimaryBlue mb-2">
                      {testimonio.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm font-poppins leading-relaxed">
                      "{testimonio.reseña}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas personalizadas encapsuladas */}
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
      </section>
    </FadeInSection>

  );
}
