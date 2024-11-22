// /courses/Ingles.tsx
"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../../context/HeaderColorContext";
import TextoImagen from "../../components/textoImagen";
import FormularioAgendarClase from "../../components/formularioAgendarClase";

const CursoIngles = () => {
  const { setHeaderColors } = useHeaderColorContext();

  useEffect(() => {
    // setHeaderColors({
    //   backgroundColor: "#000000", // Solo establecemos el fondo aquí, se mantendrá el color de fuente predeterminado
    // });

    return () => {
      setHeaderColors({
        backgroundColor: "#4030FF",
        fontColor: "#ffffff",
      });
    };
  }, [setHeaderColors]);

  return (
    <div>
      <section className="relative h-screen bg-blue-500 text-white flex items-center justify-center">
        <img
          src="/imagenes/Courses/Ingles/ingles-1.jpg"
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
        imagen="/imagenes/Courses/Ingles/ingles-profesor-1.jpg"
        posicion="left"
        backgroundColor="#C0C0C0" // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
      <TextoImagen
        texto="Mejora tu pronunciación y comprensión auditiva."
        imagen="/imagenes/Courses/Ingles/ingles-profesor-2.jpg"
        posicion="right"
        backgroundColor="#e0f7fa" // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
      <TextoImagen
        texto="Prepárate para exámenes internacionales como TOEFL y IELTS."
        imagen="/imagenes/Courses/Ingles/ingles-profesor-3.jpg"
        posicion="left"
        backgroundColor="#C0C0C0" // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
      <FormularioAgendarClase colorFondo="#F0F4FF" curso="Agenda una clase gratuita en Curso de Inglés" />
     
    </div>
  );
};

export default CursoIngles;
