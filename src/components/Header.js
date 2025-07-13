"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  /**
 * handleNavigation
 *
 * Se ejecuta cuando el usuario hace clic en un ítem del menú.
 * Decide si debe:
 *   - Redirigir a otra página (ruta absoluta)
 *   - Ir a la Home
 *   - Hacer scroll suave a una sección interna de la página
 *
 * @param {string} href - La ruta o ancla a navegar.
 */
const handleNavigation = (href) => {
  // Siempre cerrar el menú móvil si está abierto
  setIsOpen(false);

  // Si el link es Home → ir a "/"
  if (href === "/") {
    router.push("/");
    return;
  }

  // Si el link es una ruta (empieza con "/"), redirigir a esa página
  if (href.startsWith("/")) {
    router.push(href);
    return;
  }

  // Si es un ancla (#) → scroll a sección interna
  if (href.startsWith("#")) {
    if (pathname === "/") {
      // Ya estamos en Home → scroll directo
      const id = href.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Estamos en otra página → volver a home + ancla
      router.push("/" + href);
    }
  }
};



  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contacto", href: "#contact" },
    { label: "Testimonios", href: "#testimonials" },
    // { label: "Blog", href: "#blog" },
    { label: "Profesionales", href: "/blog/profesional" },
    { label: "Pacientes", href: "/blog/pacientes" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-PrimaryBlue/80 backdrop-blur-sm h-24" : "bg-transparent"}`}>

      {/* NAV */}
      <nav className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between text-white relative">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
          <img
            src="/gallery/logo_3_mobile.png"
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto md:mx-0 transform transition-transform duration-1000 hover:scale-105"
          />
          {/* <span className="hidden md:inline-block text-xl font-poppins font-semibold">
            Dr. Matías Caradonti
          </span> */}
        </div>

        {/* Navbar Desktop */}
        <ul className="hidden md:flex gap-8 font-poppins text-base">
          {navItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => handleNavigation(item.href)}
                className="relative transition-all duration-300 hover:text-AccentLightBlue after:block after:h-0.5 after:bg-AccentLightBlue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

      </nav>

      {/* Botón Hamburguesa (fuera de <nav> para z-index) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="md:hidden fixed top-6 right-4 z-[70] flex flex-col justify-center items-center w-8 h-8"
      >
        <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white my-1 transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
      </button>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="fixed inset-0 h-screen bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center text-white/60 text-xl space-y-6 z-[60] animate-fadeIn">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavigation(item.href)}
              className="hover:underline"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
