"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../../context/HeaderColorContext";
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";

const TextoImagen = dynamic(() => import("../../components/textoImagen"), {
  ssr: false,
});
const FormularioAgendarClase = dynamic(() => import("../../components/formularioAgendarClase"), {
  ssr: false,
});
const SliderLevels = dynamic(() => import("../../components/SliderLevels"), {
  ssr: false,
});

const CursoItaliano = () => {
  const { setHeaderColors } = useHeaderColorContext();
  const bg_color = "#17c3b2";
  const font_color = "#ffffff";

  useEffect(() => {
    setHeaderColors({ backgroundColor: bg_color, fontColor: font_color });
  }, [setHeaderColors]);

  const levels = [
    {
        level: "Curso Intensivo de Italiano Nivel A1",
        description: "Curso diseñado para principiantes que desean aprender italiano desde cero con un enfoque comunicativo y cultural.",
        image: "/imagenes/Courses/Italiano/P_A1_Italiano.webp",
        links: [{ text: "Más información", href: "#curso-a1-italiano" }],
        cost: "$500",
        duration: "5 semanas",
        requirements: "Edad mínima de 14 años.",
        benefits: [
            "Clases online 100% en vivo.",
            "Grupos reducidos de máximo 5 estudiantes.",
            "Metodología dinámica con práctica comunicativa.",
            "Material interactivo para un aprendizaje efectivo."
        ]
    },
    {
        level: "Curso Intensivo de Italiano Nivel A2",
        description: "Curso para quienes completaron el nivel A1 y desean avanzar con un enfoque práctico y comunicativo.",
        image: "/imagenes/Courses/Italiano/P_A2_Italiano.webp",
        links: [{ text: "Más información", href: "#curso-a2-italiano" }],
        cost: "$500",
        duration: "5 semanas",
        requirements: "Nivel A1 aprobado.",
        benefits: [
            "Enriquecimiento del vocabulario y gramática básica.",
            "Clases online 100% en vivo con máxima interacción.",
            "Atención personalizada en grupos reducidos.",
            "Material actualizado y ejercicios prácticos."
        ]
    },
    {
        level: "Curso Intensivo de Italiano Nivel B1",
        description: "Curso intermedio diseñado para mejorar la fluidez y comprensión del idioma italiano.",
        image: "/imagenes/Courses/Italiano/P_B1_Italiano.webp",
        links: [{ text: "Más información", href: "#curso-b1-italiano" }],
        cost: "$740",
        duration: "3 meses",
        requirements: "Nivel A1 y A2 aprobados.",
        benefits: [
            "Clases online con interacción continua.",
            "Desarrollo de habilidades de conversación y comprensión.",
            "Grupos reducidos para atención personalizada.",
            "Profesores expertos con amplia experiencia."
        ]
    }
];



  return (
    <>
      <Head>
        <title>Curso Intensivo de Italiano - Kourilovitch Institute</title>
        <meta name="description" content="Domina el italiano con nuestro curso intensivo del Kourilovitch Institute y expande tus habilidades comunicativas." />
        <meta property="og:title" content="Curso Intensivo de Italiano - Kourilovitch Institute" />
        <meta property="og:description" content="Domina el italiano con nuestro curso intensivo del Kourilovitch Institute y expande tus habilidades comunicativas." />
        <meta property="og:image" content="/imagenes/Courses/Italiano/P_CompletoItaliano.webp" />
      </Head>
      <div>
        <section className="relative h-screen flex items-center justify-center text-white">
          <Image
            src="/imagenes/Courses/Italiano/P_Principal_Italiano.webp"

            alt="Curso Intensivo de Italiano"
            
            fill
            quality={75}
            priority
            style={{ objectFit: "cover" }}
          />
        </section>

        <SliderLevels
          title="Explora los Niveles de Italiano"
          subtitle="Conoce las opciones para mejorar tus habilidades en italiano."
          levels={levels}
          backgroundColor={bg_color}
          fontColor={font_color}
        />

        {levels.map((course, index) => (
          <TextoImagen
            key={index}
            id={course.links[0].href.substring(1)}
            titulo={course.level}
            parrafos={[
              { subtitulo: "¿Qué incluye?", texto: course.description },
              { subtitulo: "Requisitos", texto: course.requirements },
              { subtitulo: "Ventajas", texto: course.benefits.join("\n• ") },
              { subtitulo: "Duración y Costo", texto: `Duración: ${course.duration}\nCosto: ${course.cost}` }
            ]}
            imagen={course.image}
            backgroundColor={bg_color}
            fontColor={font_color}
            posicion={index % 2 === 0 ? "right" : "left"}
          />
        ))}

        {/* <FormularioAgendarClase
          colorFondo={bg_color}
          curso="Agenda una clase gratuita en nuestro Curso Intensivo de Italiano"
        /> */}
      </div>
    </>
  );
};

export default CursoItaliano;
