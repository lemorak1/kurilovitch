"use client";

import React from "react";

interface TextoImagenProps {
  texto: string;
  imagen: string;
  posicion: "left" | "right";
}

const TextoImagen: React.FC<TextoImagenProps> = ({
  texto,
  imagen,
  posicion,
}) => {
  const isLeft = posicion === "left";

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center"
      style={{
        backgroundColor: isLeft ? "#F7FAFC" : "#E2E8F0", // Cambia color de fondo según la posición
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
      >
        <p className="text-lg md:text-xl font-medium">{texto}</p>
      </div>
    </section>
  );
};

export default TextoImagen;
