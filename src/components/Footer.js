import { FaEnvelope, FaPhoneAlt, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-PrimaryBlue text-White py-12 mt-40 pb-6">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left items-center">

        {/* Logo */}
        <div className="flex flex-col items-center gap-2 xl:mx-auto ">
          <img src="/gallery/logo_3_mobile.png" alt="Logo" className="w-16 h-16 transform transition-transform duration-1000 hover:scale-105" />
          <span className="text-lg font-montserrat font-medium hover:text-White/60 hover:cursor-pointer sm:relative sm:after:absolute sm:after:bottom-0 sm:after:left-0 sm:after:h-[2px] sm:after:w-0 sm:after:bg-White sm:after:transition-all sm:after:duration-1000 sm:hover:after:w-full">
            Dr. Matías Caradonti
          </span>

        </div>

        {/* Info de contacto */}
        <div className="flex flex-col gap-2 text-sm font-poppins text-AccentGray/80">
          <div className="flex items-center justify-center md:justify-start gap-2 transform transition-transform duration-1000 hover:scale-105">
            <FaEnvelope size={16} className="hover:text-White/60 cursor-pointer" />
            <a href="mailto:contacto@matiascaradonti.com" className="text-White/80 hover:text-White hover:cursor-pointer">
              contacto@matiascaradonti.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 transform transition-transform duration-1000 hover:scale-105">
            <FaPhoneAlt size={16} className="hover:text-White/60 cursor-pointer" />
            <a href="https://wa.me/5491144099967" className="text-White/80 hover:text-White hover:cursor-pointer">
              +54 9 11 4409-9967
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 transform transition-transform duration-1000 hover:scale-105">
            <FaLocationDot size={16} className="hover:text-White/60 cursor-pointer" />
            <span className="text-White/80 hover:text-White hover:cursor-pointer">
              Buenos Aires, Argentina
            </span>
          </div>
        </div>


        {/* Redes sociales */}
        <div className="flex justify-center md:justify-end gap-6 text-AccentLightBlue mt-4 md:mt-0 md:mr-10">
          <a href="#" aria-label="Facebook" className="hover:text-White/60 cursor-pointer transform transition-transform duration-1000 hover:scale-105">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com/matias.caradonti/" aria-label="Instagram" className="hover:text-White/60 cursor-pointer transform transition-transform duration-1000 hover:scale-105">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/@matiascaradonti9183" aria-label="Instagram" className="hover:text-White/60 cursor-pointer transform transition-transform duration-1000 hover:scale-105">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Línea divisoria + Derechos */}
      <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm text-AccentGray/60 hover:text-White transition cursor-pointer">
        &copy; {new Date().getFullYear()} Matías Caradonti. Todos los derechos reservados.
      </div>
    </footer>
  );
}
