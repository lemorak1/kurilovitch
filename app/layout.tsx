import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <header>{/* Aquí va tu barra de navegación */}</header>
        <main>{children}</main>{" "}
        {/* Aquí se renderiza el contenido de cada página */}
        <footer>{/* Aquí va el pie de página */}</footer>
      </body>
    </html>
  );
}
