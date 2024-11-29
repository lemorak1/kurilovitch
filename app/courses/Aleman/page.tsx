// /courses/Ingles.tsx
"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../../context/HeaderColorContext";
import TextoImagen from "../../components/textoImagen";
import FormularioAgendarClase from "../../components/formularioAgendarClase";
import SliderLevels from "../../components/SliderLevels";

const CursoAleman = () => {
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
  const levels = [
    {
      level: "Nivel A1 - Principiante",
      description:
        "Domina las bases del alemán y aprende a comunicarte en situaciones básicas.",
      image: "/imagenes/Courses/Aleman/P_A1_Aleman.jpg",
      links: [
        { text: "Curso Intensivo", href: "#curso-intensivo-a1" },
        { text: "Curso Privado", href: "#curso-privado-a1" },
      ],
    },
    {
      level: "Nivel A2 - Básico",
      description:
        "Continúa tu aprendizaje, expandiendo tu vocabulario y habilidades conversacionales.",
      image: "/imagenes/Courses/Aleman/P_A2_Aleman.jpg",
      links: [
        { text: "Curso Intensivo", href: "#curso-intensivo-a2" },
        { text: "Curso Privado", href: "#curso-privado-a2" },
      ],
    },
    {
      level: "Nivel B1 - Intermedio",
      description:
        "Alcanza un nivel intermedio y mejora tu fluidez en conversaciones más complejas.",
      image: "/imagenes/Courses/Aleman/P_B1_Aleman.jpg",
      links: [
        { text: "Curso Intensivo", href: "#curso-intensivo-b1" },
        { text: "Curso Privado", href: "#curso-privado-b1" },
      ],
    },
    {
      level: "Nivel B2 - Avanzado",
      description:
        "Perfecciona tus habilidades y comunica con confianza en contextos profesionales.",
      image: "/imagenes/Courses/Aleman/P_B2_Aleman.jpg",
      links: [
        { text: "Curso Intensivo", href: "#curso-intensivo-b2" },
        { text: "Curso Privado", href: "#curso-privado-b2" },
      ],
    },
    {
      level: "Nivel C1 - Experto",
      description:
        "Domina el alemán a un nivel avanzado con fluidez y precisión.",
      image: "/imagenes/Courses/Aleman/P_C1_Aleman.jpg",
      links: [
        { text: "Curso Intensivo", href: "#curso-intensivo-c1" },
        { text: "Curso Privado", href: "#curso-privado-c1" },
      ],
    },
  ];

 
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
      {/* <TextoImagen
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
      /> */}
      <TextoImagen
      titulo="Descubre el Poder del Alemán con Kourilovitch Institute"
      // text="El alemán es mucho más que un idioma, es la puerta de entrada a un mundo lleno de oportunidades, cultura y conocimiento. Hablar alemán te conecta con las grandes ideas de la filosofía, la ciencia y la historia, y te abre las puertas a estudiar, trabajar y viajar en países que lideran en innovación y desarrollo."
      parrafos={[  {texto:"El alemán es mucho más que un idioma, es la puerta de entrada a un mundo lleno de oportunidades, cultura y conocimiento. Hablar alemán te conecta con las grandes ideas de la filosofía, la ciencia y la historia, y te abre las puertas a estudiar, trabajar y viajar en países que lideran en innovación y desarrollo."
      }]}
      //imagen="/imagenes/Courses/Aleman/P_PrivadosAleman.jpg" // Ruta a la imagen proporcionada por el cliente
      posicion="right" // Imagen a la derecha del texto
      backgroundColor={bg_color} // Fondo suave
      fontColor={font_color} // Color de texto principal
    />

<SliderLevels
      title="Explora los Niveles de Alemán"
      subtitle="Selecciona un nivel y descubre nuestras modalidades de aprendizaje."
      levels={levels}
      backgroundColor={bg_color} // Fondo azul claro
      fontColor={font_color} // Fuente gris oscuro
      cardBackgroundColor={bg_color}
   />


       <TextoImagen
         titulo="Curso Intensivo de Alemán"
         parrafos={[
           {
             subtitulo: "¿Qué incluye?",
             texto:
               "Niveles A1, A2, B1 completos. Preparación para el examen Goethe (comprensión, escritura, y oral).",
           },
           {
             subtitulo: "Ventajas",
             texto:
               "• Horarios flexibles \n • Máximo 5 estudiantes por clase \n • Metodología efectiva y motivadora",
           },
           { subtitulo: "Costo", texto: "Desde los $500/mes" },
         ]}
         imagen="/imagenes/Courses/Aleman/P_CompletoAleman.jpg"
         backgroundColor={bg_color}
         fontColor={font_color}
         posicion="left"
               />
    <TextoImagen
  titulo="Curso Privado de Alemán"
  parrafos={[
    {
      subtitulo: "¿Qué incluye?",
      texto:
        "Clases personalizadas desde A1 hasta C1, adaptadas a tus necesidades específicas (conversación, preparación para exámenes, o temas técnicos).",
    },
    {
      subtitulo: "Ventajas",
      texto:
        "• Atención 100% personalizada \n • Flexibilidad total de horarios \n • Progreso acelerado con un plan a medida",
    },
    { subtitulo: "Costo", texto: "$20 por hora" },
  ]}
  imagen="/imagenes/Courses/Aleman/P_PrivadosAleman.jpg"
  backgroundColor={bg_color}
  fontColor={font_color}
  posicion="right"
/>
<TextoImagen
  titulo="Curso Conversacional de Alemán"
  parrafos={[
    {
      subtitulo: "¿Qué incluye?",
      texto:
        "Práctica intensiva de conversación en grupos reducidos. Diseñado para niveles A1, A2 y B1.",
    },
    {
      subtitulo: "Ventajas",
      texto:
        "• Enfoque práctico y dinámico \n • Mejora tu fluidez y comprensión auditiva \n • Grupos reducidos para atención personalizada",
    },
    { subtitulo: "Costo", texto: "Desde $500 por nivel" },
  ]}
  imagen="/imagenes/Courses/Aleman/P_ConversacionAleman.jpg"
  backgroundColor={bg_color}
  fontColor={font_color}
  posicion="left"
/>


<TextoImagen
  titulo="Curso de Alemán para Niños"
  parrafos={[
    {
      subtitulo: "¿Qué incluye?",
      texto:
        "Niveles A1 y A2 diseñados especialmente para niños de 10 a 14 años. Introducción al alemán y expansión de vocabulario con actividades interactivas, juegos y materiales visuales.",
    },
    {
      subtitulo: "Ventajas",
      texto:
        "• Clases personalizadas con un máximo de 3 alumnos \n • Metodología lúdica que fomenta el aprendizaje dinámico \n • Horarios flexibles tanto en modalidad presencial como online",
    },
    {
      subtitulo: "Duración y Costo",
      texto:
        "• Nivel A1: $500 (7 semanas) \n • Nivel A2: $680 (8 semanas)",
    },
  ]}
  imagen="/imagenes/Courses/Aleman/P_NiñosA1.jpg"
  backgroundColor={bg_color}
  fontColor={font_color}
  posicion="left"
/>
<TextoImagen
  titulo="Curso Intensivo para el Examen Goethe"
  parrafos={[
    {
      subtitulo: "¿Qué incluye?",
      texto:
        "Preparación para los niveles A1, A2 y B1 del examen Goethe. Enfocado en comprensión lectora, auditiva, expresión escrita y oral.",
    },
    {
      subtitulo: "Ventajas",
      texto:
        "• Grupos reducidos para atención personalizada \n • Enfoque intensivo en todas las áreas evaluadas \n • Modalidad presencial y online disponible",
    },
    { subtitulo: "Costo", texto: "$350 por nivel (6 semanas)" },
  ]}
  imagen="/imagenes/Courses/Aleman/ExamenGoethe.jpg"
  backgroundColor={bg_color}
  fontColor={font_color}
  posicion="right"
/>
      {/* <TextoImagen
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
      /> */}
      <FormularioAgendarClase colorFondo={bg_color} curso="Agenda una clase gratuita en Curso de Inglés" />

    </div>
  );
};

export default CursoAleman;
