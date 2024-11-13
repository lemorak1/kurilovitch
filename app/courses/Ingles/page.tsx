// /courses/Ingles.tsx
"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../../context/HeaderColorContext";
import TextoImagen from "../../components/textoImagen";
import FormularioAgendarClase from "../../components/formularioAgendarClase";

const CursoIngles = () => {
  const { setHeaderColors } = useHeaderColorContext();

  useEffect(() => {
    setHeaderColors({
      backgroundColor: "#ffffff", // Solo establecemos el fondo aquí, se mantendrá el color de fuente predeterminado
    });

    return () => {
      setHeaderColors({
        backgroundColor: "ffffff",
        fontColor: "#000000",
      });
    };
  }, [setHeaderColors]);

  return (
    <div>
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
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2024 - KURILOVITCH Escuela de Idiomas
      </footer>
    </div>
  );
};

export default CursoIngles;
