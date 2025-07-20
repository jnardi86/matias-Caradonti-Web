import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";

// SEO y Favicon
export const metadata = {
  title: {
    default: "Dr. Matías Caradonti | Urología",
    template: "%s | Dr. Matías Caradonti",
  },
  description: "Especialista jerarquizado en urología y salud transgénero y reconstructiva.",
  keywords: [
  "urología", "especialista en urología", "salud transgénero", "cirugía de afirmación de género",
  "reconstrucción genital", "atención médica en CABA", "médico trans-friendly", "salud sexual",
  "profesional de la salud", "consultorio urológico Buenos Aires", "especialista jerarquizado"
],
  metadataBase: new URL("https://www.drmatiascaradonti.com.ar"),
  alternates: {
    canonical: "https://www.drmatiascaradonti.com.ar",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Dr. Matías Caradonti",
    description: "Especialista en urología. Atención médica profesional en Buenos Aires.",
    url: "https://www.drmatiascaradonti.com.ar",
    siteName: "Dr. Matías Caradonti",
    images: [
      {
        url: "https://www.drmatiascaradonti.com.ar/mc_image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Matías Caradonti - Urología",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Matías Caradonti",
    description: "Especialista en urología. Atención médica profesional en Buenos Aires.",
    images: ["https://www.drmatiascaradonti.com.ar/mc_image.png"],
  },
  other: {
    "google-site-verification": "sdtdpjWqUY-5mqGBaSK7ixfu0BpxXUeeqRMkOq_Kuj8",
  },
};


// Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "400", "600", "800"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "600", "800"] });


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.className} ${poppins.className}`}>
      <body className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">{children}</main>
        <Footer/>
        <WhatsappButton/>
      </body>
    </html>
  );
}



