"use client";

import React from "react";

interface ColumnProps {
  title: string;
  text: string;
}

interface ScrollingPageProps {
  topTitle: string;
  columns: ColumnProps[];
  backgroundColor?: string;
  fontColor?: string;
  spacing?: number; // Espaciado entre columnas (en px)
}

const MisionVision: React.FC<ScrollingPageProps> = ({
  topTitle,
  columns,
  backgroundColor = "#ffffff", // Color de fondo por defecto
  fontColor = "#333333", // Color de fuente por defecto
  spacing = 20, // Espaciado predeterminado entre columnas
}) => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor, color: fontColor }}
    >
      {/* Título Superior */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">{topTitle}</h1>
      </div>

      {/* Contenedor de Columnas */}
      <div
        className="flex flex-col md:flex-row justify-center items-start w-full px-8"
        style={{
          gap: `${spacing}px`, // Espaciado entre columnas
        }}
      >
        {columns.map((column, index) => (
          <div
            key={index}
            className="flex-1 p-4 shadow-lg rounded-lg transition-transform hover:scale-105"
            style={{
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
            <p className="text-base">{column.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MisionVision;
