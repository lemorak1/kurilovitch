"use client";

import React, { useState } from "react";
import styles from "./style/SliceTexto.module.css";

interface SliceTextoProps {
  images: { url: string; text: string }[]; // Array de imágenes con texto
  backgroundColor?: string; // Color de fondo opcional
}

const SliceTexto: React.FC<SliceTextoProps> = ({
  images,
  backgroundColor = "#000000", // Fondo negro por defecto
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

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") nextSlide();
    if (direction === "right") prevSlide();
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
        {/* Texto superpuesto */}
        <div className={`${styles.textOverlay}`}>
          <p>{images[currentIndex].text}</p>
        </div>
      </div>

      {/* Botones de navegación */}
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        &#10095;
      </button>

      {/* Indicadores (opcional) */}
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
