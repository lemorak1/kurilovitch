"use client";

import React from "react";
import Header from "../components/Header"; // Importamos el componente Header
import TextoImagen from "../components/textoImagen"; // Importamos el componente reutilizable TextoImagen
import FormularioAgendarClase from "../components/formularioAgendarClase";

const CursoIngles = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Sección 1: Imagen de fondo y texto superpuesto */}
      <section className="relative h-screen bg-blue-500 text-white flex items-center justify-center">
        <img
          src="/imagenes/cursos/ingles-bg.jpg"
          alt="Curso de Inglés"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">Curso de Inglés</h1>
          <p className="mt-4 text-lg md:text-xl">
            Domina el idioma universal con nuestro curso avanzado.
          </p>
        </div>
      </section>

      {/* Sección 2: Texto e Imagen Alternados */}
      <TextoImagen
        texto="Aprende inglés desde cero con materiales interactivos."
        imagen="/imagenes/cursos/ingles-1.jpg"
        posicion="left"
      />
      <TextoImagen
        texto="Mejora tu pronunciación y comprensión auditiva."
        imagen="/imagenes/cursos/ingles-2.jpg"
        posicion="right"
      />
      <TextoImagen
        texto="Prepárate para exámenes internacionales como TOEFL y IELTS."
        imagen="/imagenes/cursos/ingles-3.jpg"
        posicion="left"
      />
      <FormularioAgendarClase colorFondo="#F0F4FF" curso="Curso de Inglés" />

      {/* Footer (por ahora vacío, lo añadimos luego) */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2024 - KURILOVITCH Escuela de Idiomas
      </footer>
    </div>
  );
};

export default CursoIngles;
