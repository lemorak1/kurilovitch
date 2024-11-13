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
  backgroundColor = "#F7FAFC", // Color por defecto si no se pasa como prop
  fontColor = "#333", // Color de texto por defecto si no se pasa como prop
}) => {
  const isLeft = posicion === "left";

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center"
      style={{
        backgroundColor: backgroundColor,
        color: fontColor,
      }}
    >
      {/* Imagen */}
      <div
        className={`w-full md:w-1/2 h-64 md:h-full ${
          isLeft ? "order-1" : "order-2"
        } flex items-center`}
      >
        <img
          src={imagen}
          alt={texto}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Texto */}
      <div
        className={`w-full md:w-1/2 p-8 ${
          isLeft ? "order-2" : "order-1"
        } text-center md:text-left`}
        style={{ color: fontColor }} // Asegura que el color de fuente se aplique también aquí
      >
        <p className="text-lg md:text-xl font-medium">{texto}</p>
      </div>
    </section>
  );
};

export default TextoImagen;
