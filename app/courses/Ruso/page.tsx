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

const CursoRuso = () => {
  const { setHeaderColors } = useHeaderColorContext();
  const bg_color = "#304d6d";
  const font_color = "#ffffff";

  useEffect(() => {
    setHeaderColors({ backgroundColor: bg_color, fontColor: font_color });
  }, [setHeaderColors]);

  //   const levels = [
  //     {
  //         level: "Curso de Ruso Nivel A1",
  //         description: "Curso de introducción al ruso, diseñado para principiantes con un enfoque estructurado y efectivo.",
  //         image: "/imagenes/Courses/Ruso/P_A1_Ruso.jpg",
  //         links: [{ text: "Más información", href: "#curso-a1-ruso" }],
  //         cost: "$720",
  //         duration: "3 meses",
  //         requirements: "Edad mínima de 14 años.",
  //         benefits: [
  //             "Clases 100% online y en vivo.",
  //             "Grupos reducidos con un máximo de 5 estudiantes.",
  //             "Metodología estructurada y efectiva, diseñada por la Prof. Irena Zhaboklitskaya.",
  //             "Material digital interactivo y ejercicios prácticos.",
  //             "Preparación para situaciones básicas y cotidianas en ruso."
  //         ]
  //     },
  //     {
  //         level: "Curso de Ruso Nivel A2",
  //         description: "Curso diseñado para quienes ya tienen una base en ruso y desean ampliar su vocabulario y comprensión.",
  //         image: "/imagenes/Courses/Ruso/P_A2_Ruso.jpg",
  //         links: [{ text: "Más información", href: "#curso-a2-ruso" }],
  //         cost: "$720",
  //         duration: "3 meses",
  //         requirements: "Nivel A1 aprobado.",
  //         benefits: [
  //             "Expansión de vocabulario y gramática básica.",
  //             "Enseñanza con un máximo de 5 estudiantes para mayor atención.",
  //             "Material interactivo y recursos didácticos digitales.",
  //             "Enfoque comunicativo para mejorar la conversación cotidiana."
  //         ]
  //     },
  //     {
  //         level: "Curso de Ruso Nivel B1 (Privado)",
  //         description: "Curso intermedio-avanzado con atención 100% personalizada, ideal para perfeccionar la fluidez y comprensión.",
  //         image: "/imagenes/Courses/Ruso/P_B1_Ruso.jpg",
  //         links: [{ text: "Más información", href: "#curso-b1-ruso" }],
  //         cost: "$1300",
  //         duration: "30 horas",
  //         requirements: "Nivel A1 y A2 aprobados.",
  //         benefits: [
  //             "Clases privadas para un progreso personalizado.",
  //             "Enfoque en habilidades de comprensión oral y escrita avanzadas.",
  //             "Simulacros y práctica de conversaciones complejas.",
  //             "Material exclusivo diseñado por la Prof. Irena Zhaboklitskaya."
  //         ]
  //     }
  // ];

  const levels = [
    {
      level: "Curso de Ruso Nivel A1",
      description: "Curso diseñado por la reconocida Prof. Irena Zhaboklitskaya, ideal para principiantes que buscan una base sólida en ruso con un enfoque estructurado y efectivo.",
      image: "/imagenes/Courses/Ruso/P_A1_Ruso.jpg",
      links: [{ text: "Más información", href: "#curso-a1-ruso" }],
      cost: "$720",
      duration: "3 meses",
      requirements: "Edad mínima de 14 años.",
      benefits: [
        "Clases 100% online y en vivo.",
        "Grupos reducidos con un máximo de 5 estudiantes.",
        "Metodología estructurada y efectiva, diseñada por la Prof. Irena Zhaboklitskaya.",
        "Material digital interactivo y ejercicios prácticos.",
        "Preparación para situaciones básicas y cotidianas en ruso."
      ]
    },
    {
      level: "Curso de Ruso Nivel A2",
      description: "Curso diseñado para quienes ya tienen una base en ruso y desean ampliar su vocabulario y comprensión, guiados por la experiencia de la Prof. Irena Zhaboklitskaya.",
      image: "/imagenes/Courses/Ruso/P_A2_Ruso.jpg",
      links: [{ text: "Más información", href: "#curso-a2-ruso" }],
      cost: "$720",
      duration: "3 meses",
      requirements: "Nivel A1 aprobado.",
      benefits: [
        "Expansión de vocabulario y gramática básica.",
        "Enseñanza con un máximo de 5 estudiantes para mayor atención.",
        "Material interactivo y recursos didácticos digitales.",
        "Enfoque comunicativo para mejorar la conversación cotidiana.",
        "Metodología respaldada por la Prof. Irena Zhaboklitskaya."
      ]
    },
    {
      level: "Curso de Ruso Nivel B1 (Privado)",
      description: "Curso avanzado guiado por la prestigiosa Prof. Irena Zhaboklitskaya, diseñado para perfeccionar tus habilidades de comprensión y fluidez.",
      image: "/imagenes/Courses/Ruso/P_B1_Ruso.jpg",
      links: [{ text: "Más información", href: "#curso-b1-ruso" }],
      cost: "$1300",
      duration: "30 horas",
      requirements: "Nivel A1 y A2 aprobados.",
      benefits: [
        "Clases privadas para un progreso personalizado.",
        "Enfoque en habilidades de comprensión oral y escrita avanzadas.",
        "Simulacros y práctica de conversaciones complejas.",
        "Material exclusivo diseñado por la Prof. Irena Zhaboklitskaya.",
        "Enseñanza respaldada por más de 30 años de experiencia de la profesora."
      ]
    }
  ];

  const profesoraDataRuso = {
    id: "#Profesora-Irena",
    titulo: "Nuestra Instructora Principal",
    parrafos: [
      { texto: "La Prof. Irena Zhaboklitskaya lidera el programa de ruso, con un enfoque único que combina experiencia y pasión por la enseñanza." },
      { texto: "Su metodología incluye inmersión cultural, simulaciones prácticas y ejercicios personalizados." },
      { texto: "Bajo su guía, cientos de estudiantes han alcanzado certificaciones oficiales y dominado el idioma ruso." },
    ],
    logros: [
      "✨ 30+ años de experiencia enseñando ruso como lengua extranjera.",
      "🏛️ Catedrática en el Departamento de Ruso como Lengua Extranjera de la Universidad Estatal de Moscú.",
      "📘 Autora de cinco cursos fundamentales de enseñanza del ruso.",
      "✅ Especialista en preparación para exámenes oficiales como el TRKI.",
      "🌍 Ponente en conferencias internacionales sobre innovación en enseñanza de idiomas.",
    ],
  
    imagen: "/imagenes/Profesores/Irena_Zhaboklitskaya/Irena1.jpg",
    backgroundColor: "#304d6d",
    fontColor: "#ffffff",
    botonTexto: "Ver más detalles",
    botonLink: "/about",
    mostrarBordes: true,
  };


  return (
    <>
      <Head>
        <title>Curso Intensivo de Ruso - Kourilovitch Institute</title>
        <meta name="description" content="Domina el ruso con nuestro curso intensivo del Kourilovitch Institute y expande tus habilidades comunicativas." />
        <meta property="og:title" content="Curso Intensivo de Ruso - Kourilovitch Institute" />
        <meta property="og:description" content="Domina el ruso con nuestro curso intensivo del Kourilovitch Institute y expande tus habilidades comunicativas." />
        <meta property="og:image" content="/imagenes/Courses/Ruso/P_CompletoRuso.jpg" />
      </Head>
      <div>
        <section className="relative h-screen flex items-center justify-center text-white">
          <Image
            src="/imagenes/Courses/Ruso/P_Principal_Ruso.jpg"
            alt="Curso Intensivo de Ruso"
            fill
            quality={75}
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="relative z-10 text-center max-w-2xl">
            {/* <h1 className="text-4xl md:text-6xl font-bold">Domina el Ruso con Kourilovitch Institute</h1>
            <p className="mt-4 text-lg md:text-xl font-semibold">
              Aprende ruso con un método innovador y profesores nativos.
            </p> */}
          </div>
        </section>

        <SliderLevels
          title="Explora los Niveles de Ruso"
          subtitle="Conoce las opciones para mejorar tus habilidades en ruso."
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
        {/* Sección de la Profesora */}
        <TextoImagen
        key="100"
         id={profesoraDataRuso.id.substring(1)}
          titulo={profesoraDataRuso.titulo}
          parrafos={profesoraDataRuso.parrafos}
          logros={profesoraDataRuso.logros}
          imagen={profesoraDataRuso.imagen}
          backgroundColor={profesoraDataRuso.backgroundColor}
          fontColor={profesoraDataRuso.fontColor}
          botonTexto={profesoraDataRuso.botonTexto}
          botonLink={profesoraDataRuso.botonLink}
          mostrarBordes={profesoraDataRuso.mostrarBordes}
        />

        <FormularioAgendarClase
          colorFondo={bg_color}
          curso="Agenda una clase gratuita en nuestro Curso Intensivo de Ruso"
        />
      </div>
    </>
  );
};

export default CursoRuso;
