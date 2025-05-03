import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";


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



