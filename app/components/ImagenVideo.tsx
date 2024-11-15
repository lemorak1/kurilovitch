"use client";

import React from "react";

interface ImagenVideoProps {
  backgroundUrl: string; // URL de la imagen o video
  isVideo?: boolean; // Define si es video o imagen
  text?: string; // Texto superpuesto
  buttonLabel?: string; // Etiqueta del botón
  buttonLink?: string; // Enlace del botón
  backgroundColor?: string; // Color de fondo (por si el cliente quiere)
}

const ImagenVideo: React.FC<ImagenVideoProps> = ({
  backgroundUrl,
  isVideo = false,
  text = "",
  buttonLabel = "Descubre más",
  buttonLink = "#",
  backgroundColor = "transparent", // Por defecto es transparente
}) => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{ backgroundColor }}
    >
      {isVideo ? (
        <video
          src={backgroundUrl}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
      ) : (
        <img
          src={backgroundUrl}
          alt="Scrolling Page Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="relative z-10 text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">
          {text}
        </h1>
        <a
          href={buttonLink}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded shadow-lg transition duration-300"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};

export default ImagenVideo;
