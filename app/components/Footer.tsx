"use client";

import React from "react";

interface FooterProps {
  backgroundColor?: string; // Color de fondo opcional
  fontColor?: string; // Color de texto opcional
}

const Footer: React.FC<FooterProps> = ({
  backgroundColor = "#2E4372", // Color por defecto
  fontColor = "#FFFFFF", // Texto blanco por defecto
}) => {
  return (
    <footer
      className="w-full py-8 px-4 text-center"
      style={{ backgroundColor, color: fontColor }}
    >
      {/* Título */}
      <h2 className="text-2xl font-bold mb-6">CONTACTOS</h2>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Mapa */}
        <div className="w-full md:w-1/2">
          {/* <iframe
            title="Mapa de ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799145456!2d-74.2598678!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzgnMzcnMzQuOCJOIDc0wrAxNicwNS45Ilc!5e0!3m2!1ses!2sec!4v1617182909481!5m2!1ses!2sec"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe> */}
        </div>

        {/* Teléfono y Dirección */}
        <div className="w-full md:w-1/3 text-left">
          <h3 className="text-lg font-bold">Teléfonos</h3>
          <p className="mb-4">0987654321 - 02134563</p>
          <h3 className="text-lg font-bold">Dirección</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</p>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-8">
        <p className="text-sm">&copy; 2024 Kourilovitch - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
