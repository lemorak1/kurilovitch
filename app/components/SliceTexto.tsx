"use client";

import React, { useState } from "react";
import styles from "./style/SliceTexto.module.css";

interface SliceTextoProps {
  images: {
    url: string; // URL de la imagen
    title: string; // Título
    description: string; // Descripción
    link?: string; // Enlace opcional
  }[];
  backgroundColor?: string; // Color de fondo opcional
}

const SliceTexto: React.FC<SliceTextoProps> = ({
  images,
  backgroundColor = "#000000",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className={`${styles.container} relative`}
      style={{ backgroundColor }}
    >
      {/* Imagen actual */}
      <div
        className={`${styles.slide}`}
        style={{
          backgroundImage: `url(${images[currentIndex].url})`,
        }}
      >
        {/* Texto superpuesto en la parte inferior */}
        <div className={`${styles.textOverlay}`}>
          <div className={`${styles.textContainer}`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              {images[currentIndex].title}
            </h2>
            <p className="text-sm md:text-lg">{images[currentIndex].description}</p>
            {images[currentIndex].link && (
              <a
                href={images[currentIndex].link}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-4 inline-block"
              >
                Ver más
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Botones de navegación */}
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        &#10095;
      </button>

      {/* Indicadores */}
      <div className={`${styles.indicators}`}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default SliceTexto;
