import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";

// SEO y Favicon
export const metadata = {
  title: "Dr. Matías Caradonti",
  description: "Especialista jerarquizado en urología y salud transgenero y reconstructiva.",
  icons: {
    icon: "./favicon.png",
  },
  openGraph: {
    title: "Dr. Matías Caradonti",
    description: "Especialista en urología. Atención médica profesional en Buenos Aires.",
    url: "https://matias-caradonti-web.vercel.app/mc_image.png",
    siteName: "Dr. Matías Caradonti",
    images: [
      {
        url: "./mc_image.png",
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
    images: ["https://matias-caradonti-web.vercel.app/mc_image.png"],
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



