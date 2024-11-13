import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header";
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
        </HeaderColorProvider>
        <footer>{/* Aquí va el pie de página */}</footer>
      </body>
    </html>
  );
}
