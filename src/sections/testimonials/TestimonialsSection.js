"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TestimonialCard from "./TestimonialsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import testimonials from "./testimonialsData";
import { Fade, Slide } from "react-awesome-reveal";

export default function TestimonialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  return (
    <Slide direction="up" triggerOnce>
      <section id="testimonials" className="py-16 mt-40">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-5xl font-poppins font-bold text-PrimaryBlue mb-12 leading-normal lg:leading-none">
            <span className="bg-PrimaryBlue text-White px-4">Testimonios</span> de Pacientes
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
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard testimonio={t} isMobile={isMobile} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas */}
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
    </Slide>

  );
}
