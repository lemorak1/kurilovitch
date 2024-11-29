"use client";

import React from "react";

interface MissionVisionProps {
  title?: string; // Título global del componente
  missionTitle: string; // Título de la sección de Misión
  missionText: string; // Contenido de la Misión
  visionTitle: string; // Título de la sección de Visión
  visionText: string; // Contenido de la Visión
  backgroundColor?: string; // Color de fondo
  textColor?: string; // Color del texto
}

const MissionVision: React.FC<MissionVisionProps> = ({
  title = "Nuestra Misión y Visión",
  missionTitle = "Misión",
  missionText,
  visionTitle = "Visión",
  visionText,
  backgroundColor = "#f9f9f9", // Fondo claro por defecto
  textColor = "#333333", // Texto oscuro por defecto
}) => {
  return (
    <section
      className="min-h-screen py-16 px-8 flex flex-col items-center"
      style={{ backgroundColor, color: textColor }}
    >
      {/* Título Global */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h2>

      {/* Contenedor de Tarjetas */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Tarjeta Misión */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">{missionTitle}</h3>
          <p className="text-gray-700 text-base leading-relaxed">{missionText}</p>
        </div>

        {/* Tarjeta Visión */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">{visionTitle}</h3>
          <p className="text-gray-700 text-base leading-relaxed">{visionText}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
