"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguajeSwitcher";

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Detecta si tus rutas están prefixeadas con /es o /en
  const lng = i18n.resolvedLanguage || i18n.language || "es";
  const hasPrefix = /^\/(es|en)(\/|$)/.test(pathname || "");
  const base = hasPrefix ? `/${lng}` : ""; // si no usás prefijo, queda vacío
  const isHome = pathname === "/" || pathname === base || pathname === `${base}/`;

  const handleNavigation = (href) => {
    setIsOpen(false);

    if (href === "/") {
      router.push(`${base}/` || "/");
      return;
    }

    if (href.startsWith("/")) {
      router.push(`${base}${href}`);
      return;
    }

    // ancla interna
    if (href.startsWith("#")) {
      if (isHome) {
        const id = href.slice(1);
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`${base}/${href}`);
      }
    }
  };

  const navItems = [
    { label: t("navigation.home"), href: "/" },
    { label: t("navigation.about"), href: "#about" },
    { label: t("navigation.services"), href: "#services" },
    { label: t("navigation.gallery"), href: "#gallery" },
    { label: t("navigation.contact"), href: "#contact" },
    { label: t("navigation.testimonials"), href: "#testimonials" },
    { label: t("navigation.profesional"), href: "/blog/profesional" },
    { label: t("navigation.patients"), href: "/blog/pacientes" },
  ];

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-PrimaryBlue/80 backdrop-blur-sm h-24" : "bg-transparent"}`}>
      {/* NAV */}
      <nav className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between text-white relative">
        {/* Logo */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
          <img
            src="/gallery/logo_3_mobile.png"
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto md:mx-0 transform transition-transform duration-1000 hover:scale-105"
          />
        </div>

        {/* Navbar Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 font-poppins text-base">
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
          {/* Switch de idioma (desktop) */}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Botón Hamburguesa */}
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
          {/* Switch de idioma (mobile) */}
          <div className="mt-8">
            <LanguageSwitcher onAfterChange={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
