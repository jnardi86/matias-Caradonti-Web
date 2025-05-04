"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Tilt from "react-parallax-tilt";
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

  const TestimonialCard = ({ testimonio }) => {
    const content = (
      <div className="bg-White overflow-hidden w-[280px] h-[350px] mx-auto flex flex-col group transition-shadow duration-500 hover:shadow-2xl">
        {/* Imagen */}
        <div className="bg-White p-6 flex justify-center items-center transition-transform duration-500 group-hover:scale-105">
          <img
            src={testimonio.foto}
            alt={testimonio.nombre}
            className="w-36 h-36 object-cover rounded-full shadow-md"
          />
        </div>
        {/* Texto */}
        <div className="p-6 flex flex-col items-center text-center h-full">
          <h3 className="text-lg font-bold font-montserrat text-PrimaryBlue mb-2">
            {testimonio.nombre}
          </h3>
          <p className="text-gray-600 text-sm font-poppins leading-relaxed">
            "{testimonio.reseña}"
          </p>
        </div>
      </div>
    );

    return isMobile ? content : (
      <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.02} transitionSpeed={2000}>
        {content}
      </Tilt>
    );
  };

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
                <TestimonialCard testimonio={t} />
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
