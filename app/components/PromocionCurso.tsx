"use client";

import React from "react";

interface PromocionCursoProps {
  titulo: string;
  textoDestacado: string;
  descripcion: string;
  imagen: string;
  posicion?: "left" | "right"; // Posición de la imagen
  backgroundColor?: string; // Fondo si no hay imagen
  fontColor?: string; // Color de texto
  highlightColor?: string; // Color del texto destacado
  link?: string; // Enlace opcional
}

const PromocionCurso: React.FC<PromocionCursoProps> = ({
  titulo,
  textoDestacado,
  descripcion,
  imagen,
  posicion = "left",
  backgroundColor = "#ffffff", // Por defecto blanco
  fontColor = "#333333", // Por defecto gris oscuro
  highlightColor = "#ff6600", // Por defecto naranja
  link = "#",
}) => {
  const isLeft = posicion === "left";

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8"
      style={{
        backgroundColor,
        color: fontColor,
      }}
    >
      {/* Imagen */}
      <div
        className={`w-full md:w-1/2 p-4 ${
          isLeft ? "order-1" : "order-2"
        } flex justify-center`}
      >
        <img
          src={imagen}
          alt={titulo}
          className="rounded-lg shadow-lg w-full max-w-sm object-cover"
        />
      </div>

      {/* Texto */}
      <div
        className={`w-full md:w-1/2 p-4 ${
          isLeft ? "order-2" : "order-1"
        } text-center md:text-left`}
      >
        <h2 className="text-3xl font-bold mb-4">{titulo}</h2>
        <p
          className="text-lg font-semibold mb-4"
          style={{
            color: highlightColor,
          }}
        >
          {textoDestacado}
        </p>
        <p className="text-base mb-6">{descripcion}</p>
        {link && (
          <a
            href={link}
            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded shadow-lg transition duration-300"
          >
            Más Información
          </a>
        )}
      </div>
    </section>
  );
};

export default PromocionCurso;
