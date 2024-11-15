"use client";

import React from "react";
import styles from "./style/LogoMovimiento.module.css";

interface Logo {
  id: number;
  src: string;
  alt: string;
}

interface LogosMovimientoProps {
  logos: Logo[]; // Array de logos
  backgroundColor?: string; // Color de fondo opcional
  gap?: string; // Espacio entre logos
  rowGap?: string; // Separación entre filas
  title?: string; // Título para la sección de texto
  description?: string; // Descripción para la sección de texto
}

const LogosMovimiento: React.FC<LogosMovimientoProps> = ({
  logos,
  backgroundColor = "#FFFFFF", // Color por defecto: blanco
  gap = "50px", // Espaciado entre logos
  rowGap = "30px", // Espaciado entre filas
  title = "Nuestros Socios", // Título por defecto
  description = "Conoce a nuestros socios estratégicos que confían en nosotros.", // Descripción por defecto
}) => {
  // Dividimos los logos en tres filas para la animación
  const filas = [logos, logos, logos]; // Puedes personalizar cómo dividir los logos

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: backgroundColor, // Aplicar el color de fondo
      }}
    >
      {/* Sección de texto */}
      <div className={styles.textSection}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Sección de logos */}
      <div
        className={styles.logosContainer}
        style={{
          gap: rowGap, // Separación vertical entre filas
        }}
      >
        {filas.map((fila, filaIndex) => (
          <div
            key={filaIndex}
            className={`${styles.logosRow} ${
              filaIndex % 2 === 0 ? styles.leftToRight : styles.rightToLeft
            }`}
          >
            {fila.map((logo, index) => (
              <div
                key={logo.id}
                className={styles.logo}
                style={{
                  animationDelay: `${index * 0.5}s`, // Delay progresivo
                  marginRight: gap, // Espaciado dinámico entre logos
                }}
              >
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosMovimiento;
