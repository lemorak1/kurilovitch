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

const CursoEspañol = () => {
  const { setHeaderColors } = useHeaderColorContext();
  const bg_color = "#c73e1d";
  const font_color = "#ffffff";

  useEffect(() => {
    setHeaderColors({ backgroundColor: bg_color, fontColor: font_color });
  }, [setHeaderColors]);

  const levels = [
    {
        level: "Curso Intensivo de Español Nivel A1",
        description: "Curso diseñado para principiantes, proporcionando una base sólida para la comunicación en español.",
        image: "/imagenes/Courses/Espanol/P_A1Espanol.webp",
        links: [{ text: "Más información", href: "#curso-a1-espanol" }],
        cost: "$800",
        duration: "11 semanas",
        requirements: "Edad mínima de 14 años.",
        benefits: [
            "Clases en vivo, tanto presenciales en Cuenca como online.",
            "Atención personalizada con grupos reducidos (máximo 5 alumnos).",
            "Impartido por un profesor certificado en español, inglés, ruso y alemán.",
            "Clases dictadas en ruso para facilitar el aprendizaje de estudiantes de habla rusa."
        ]
    },
    {
        level: "Curso Intensivo de Español Nivel A2",
        description: "Curso para quienes desean consolidar sus conocimientos básicos y avanzar hacia una comunicación más fluida.",
        image: "/imagenes/Courses/Espanol/P_A2Espanol.webp",
        links: [{ text: "Más información", href: "#curso-a2-espanol" }],
        cost: "$800",
        duration: "11 semanas",
        requirements: "Nivel A1 aprobado y edad mínima de 14 años.",
        benefits: [
            "Clases en vivo, tanto presenciales en Cuenca como online.",
            "Grupos reducidos con máximo 5 estudiantes para atención personalizada.",
            "Metodología práctica con un enfoque comunicativo.",
            "Impartido por un profesor certificado con experiencia en múltiples idiomas."
        ]
    }
];


  return (
    <>
      <Head>
        <title>Curso Intensivo de Español - Kourilovitch Institute</title>
        <meta name="description" content="Domina el español con nuestro curso intensivo del Kourilovitch Institute y expande tus habilidades comunicativas." />
        <meta property="og:title" content="Curso Intensivo de Español - Kourilovitch Institute" />
        <meta property="og:description" content="Domina el español con nuestro curso intensivo del Kourilovitch Institute y expande tus habilidades comunicativas." />
        <meta property="og:image" content="/imagenes/Courses/Espanol/P_A1_Espanol.webp" />
      </Head>
      <div>
        <section className="relative h-screen flex items-center justify-center text-white">
          <Image
            src="/imagenes/Courses/Espanol/P_PrincipalEspanol.webp"
            alt="Curso Intensivo de Español"
            fill
            quality={75}
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="relative z-10 text-center max-w-2xl">
           
          </div>
        </section>

        <SliderLevels
          title="Explora los Niveles de Español"
          subtitle="Conoce las opciones para mejorar tus habilidades en español."
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
          curso="Agenda una clase gratuita en nuestro Curso Intensivo de Español"
        /> */}
      </div>
    </>
  );
};

export default CursoEspañol;
