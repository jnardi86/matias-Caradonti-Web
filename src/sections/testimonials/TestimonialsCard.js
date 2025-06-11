"use client";

import Tilt from "react-parallax-tilt";

export default function TestimonialCard({ testimonio, isMobile }) {
  const content = (
    <div className="bg-White overflow-hidden w-[280px] h-[380px] mx-auto flex flex-col group transition-shadow duration-500 hover:shadow-2xl">
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
}
