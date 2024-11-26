// /courses/Ingles.tsx
"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../../context/HeaderColorContext";
import TextoImagen from "../../components/textoImagen";
import FormularioAgendarClase from "../../components/formularioAgendarClase";

const CursoEspanol = () => {
  const { setHeaderColors } = useHeaderColorContext();
  let bg_color="#ffb100";
  let font_color="#c73e1d";

  useEffect(() => {
    setHeaderColors({
      backgroundColor: bg_color,
      fontColor: font_color, // Solo establecemos el fondo aquí, se mantendrá el color de fuente predeterminado
    });

    return () => {
      setHeaderColors({
        backgroundColor: bg_color,
        fontColor: font_color,
      });
    };
  }, [setHeaderColors]);

  return (
    <div>
      <section className="relative h-screen bg-blue-500 text-white flex items-center justify-center">
        <img
          src="/imagenes/Courses/Aleman/P_PrincipalAleman.jpg"
          alt="Curso de Aleman"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold"> </h1>
          <p className="mt-4 text-lg md:text-xl">

          </p>
        </div>
      </section>
      <TextoImagen
        titulo="Bienvenido a Kourilovitch Institute"
        parrafos={[
          { texto: "En Kourilovitch Institute, creemos que aprender un idioma va más allá de memorizar palabras: es un viaje hacia nuevas culturas.", subtitulo: "Nuestra Filosofía" },
          { texto: "Cada curso está diseñado para sumergirte en la lengua y cultura que elijas, asegurando fluidez y contexto cultural." },
          { texto: "Únete a nosotros y descubre cómo dominar un idioma puede abrirte un mundo lleno de oportunidades.", subtitulo: "Oportunidades" },
        ]}
        imagen="/imagenes/Courses/Ingles/ingles-profesor-1.jpg"
        posicion="left"
        backgroundColor={bg_color} // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
      <TextoImagen
        titulo="Bienvenido a Kourilovitch Institute"
        parrafos={[
          { texto: "En Kourilovitch Institute, creemos que aprender un idioma va más allá de memorizar palabras: es un viaje hacia nuevas culturas.", subtitulo: "Nuestra Filosofía" },
          { texto: "Cada curso está diseñado para sumergirte en la lengua y cultura que elijas, asegurando fluidez y contexto cultural." },
          { texto: "Únete a nosotros y descubre cómo dominar un idioma puede abrirte un mundo lleno de oportunidades.", subtitulo: "Oportunidades" },
        ]}
        imagen="/imagenes/Courses/Ingles/ingles-profesor-2.jpg"
        posicion="right"
        backgroundColor={bg_color} // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
      <TextoImagen
        titulo="Bienvenido a Kourilovitch Institute"
        parrafos={[
          { texto: "En Kourilovitch Institute, creemos que aprender un idioma va más allá de memorizar palabras: es un viaje hacia nuevas culturas.", subtitulo: "Nuestra Filosofía" },
          { texto: "Cada curso está diseñado para sumergirte en la lengua y cultura que elijas, asegurando fluidez y contexto cultural." },
          { texto: "Únete a nosotros y descubre cómo dominar un idioma puede abrirte un mundo lleno de oportunidades.", subtitulo: "Oportunidades" },
        ]} imagen="/imagenes/Courses/Ingles/ingles-profesor-3.jpg"
        posicion="left"
        backgroundColor={bg_color} // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
      <FormularioAgendarClase colorFondo={bg_color} curso="Agenda una clase gratuita en Curso de Inglés" />

    </div>
  );
};

export default CursoEspanol;
