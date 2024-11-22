"use client";

import React from "react";

interface TextoImagenProps {
  texto: string;
  imagen: string;
  posicion: "left" | "right";
  backgroundColor?: string; // Propiedad opcional para color de fondo
  fontColor?: string; // Propiedad opcional para color de fuente
}

const TextoImagen: React.FC<TextoImagenProps> = ({
  texto,
  imagen,
  posicion,
  backgroundColor = "#F7FAFC", // Color por defecto
  fontColor = "#333", // Color de texto por defecto
}) => {
  const isLeft = posicion === "left";

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center"
      style={{
        backgroundColor,
        color: fontColor,
      }}
    >
      {/* Imagen */}
      <div
        className={`w-full md:w-1/2 flex items-center justify-center ${
          isLeft ? "order-1" : "order-2"
        }`}
      >
        <img
          src={imagen}
          alt={texto}
          className="w-auto max-w-[70%] max-h-[80%] object-contain rounded-lg shadow-lg"
          style={{
            height: "auto",
            maxHeight: "400px", // Tamaño máximo en píxeles
          }}
        />
      </div>

      {/* Texto */}
      <div
        className={`w-full md:w-1/2 p-8 ${
          isLeft ? "order-2" : "order-1"
        } text-center md:text-left`}
      >
        <p className="text-lg md:text-xl font-medium">{texto}</p>
      </div>
    </section>
  );
};

export default TextoImagen;
