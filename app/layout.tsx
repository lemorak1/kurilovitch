import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { HeaderColorProvider } from "../context/HeaderColorContext";
export const metadata: Metadata = {
  title: "My App Title",
  description: "Description of my Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderColorProvider>
          <header>
            {/* Aquí va tu barra de navegación */} <Header />
          </header>
          <main>{children}</main>{" "}
          {/* Aquí se renderiza el contenido de cada página */}
        <footer id="footer">{/* Aquí va el pie de página */}
        <Footer />
        </footer>
        </HeaderColorProvider>
      </body>
    </html>
  );
}
