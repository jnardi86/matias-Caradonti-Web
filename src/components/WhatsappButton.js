"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-500 ease-out ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/5491135180221"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        {/* Tooltip solo en desktop */}
        <div className="hidden md:block absolute -left-36 bottom-full mb-2 bg-TextDark/80 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-1000 whitespace-nowrap z-50">
          Escribinos por WhatsApp
        </div>

        {/* Botón WhatsApp */}
        <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-1000 hover:scale-110">
          <FaWhatsapp className="text-3xl" />
        </div>
      </a>
    </div>
  );
}
