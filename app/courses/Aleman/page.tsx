
// "use client";

// import React, { useEffect } from "react";
// import { useHeaderColorContext } from "../../../context/HeaderColorContext";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import Head from "next/head";

// const TextoImagen = dynamic(() => import("../../components/textoImagen"), {
//   ssr: false,
// });
// const FormularioAgendarClase = dynamic(() => import("../../components/formularioAgendarClase"), {
//   ssr: false,
// });
// const SliderLevels = dynamic(() => import("../../components/SliderLevels"), {
//   ssr: false,
// });

// const CursoAleman = () => {
//   const { setHeaderColors } = useHeaderColorContext();
//   const bg_color = "#ffb100";
//   const font_color = "#c73e1d";

//   useEffect(() => {
//     setHeaderColors({ backgroundColor: bg_color, fontColor: font_color });
//   }, [setHeaderColors]);

//   const levels = [
//     {
//       level: "Curso Completo de Alemán Intensivo",
//       description: "Niveles A1 a B1 con preparación integral para el examen Goethe en 6 meses. Incluye simulacros y material oficial.",
//       image: "/imagenes/Courses/Aleman/P_CompletoAleman.jpg",
//       links: [{ text: "Más información", href: "#curso-completo-intensivo" }],
//       cost: "$1500",
//       duration: "6 meses",
//       requirements: "Ser mayor de 14 años, sin necesidad de conocimientos previos.",
//       benefits: [
//         "Clases reducidas con máximo 5 estudiantes.",
//         "Acceso a material digital exclusivo y ejercicios prácticos.",
//         "Preparación intensiva con exámenes simulados para el Goethe."
//       ]
//     },
//     {
//       level: "Curso Intensivo de Alemán Nivel A1",
//       description: "Curso ideal para principiantes con un enfoque práctico y dinámico en 5 semanas.",
//       image: "/imagenes/Courses/Aleman/P_A1_Aleman.jpg",
//       links: [{ text: "Más información", href: "#curso-intensivo-a1" }],
//       cost: "$500",
//       duration: "5 semanas",
//       requirements: "Edad mínima de 14 años, sin conocimientos previos.",
//       benefits: [
//         "Ideal para principiantes absolutos.",
//         "Enseñanza basada en situaciones reales y juegos interactivos.",
//         "Evaluaciones continuas y retroalimentación personalizada."
//       ]
//     },
//     {
//       level: "Curso Intensivo de Alemán Nivel A2",
//       description: "Curso de 5 semanas diseñado para fortalecer la base del idioma y ampliar vocabulario.",
//       image: "/imagenes/Courses/Aleman/P_A2_Aleman.jpg",
//       links: [{ text: "Más información", href: "#curso-intensivo-a2" }],
//       cost: "$500",
//       duration: "5 semanas",
//       requirements: "Haber completado el nivel A1.",
//       benefits: [
//         "Ampliación de vocabulario y estructuras básicas.",
//         "Práctica en conversación y comprensión oral con role-playing.",
//         "Material de apoyo visual y auditivo actualizado."
//       ]
//     },
//     {
//       level: "Curso Intensivo de Alemán Nivel B1",
//       description: "Curso de 3 meses para adquirir fluidez comunicativa y preparación intermedia para el Goethe.",
//       image: "/imagenes/Courses/Aleman/P_B1_Aleman.jpg",
//       links: [{ text: "Más información", href: "#curso-intensivo-b1" }],
//       cost: "$1000",
//       duration: "3 meses",
//       requirements: "Haber completado el nivel A2.",
//       benefits: [
//         "Enfoque en comunicación fluida y comprensión avanzada.",
//         "Preparación para situaciones cotidianas y profesionales.",
//         "Simulacros de examen y retroalimentación continua."
//       ]
//     },
//     {
//       level: "Curso Intensivo de Alemán Nivel B2",
//       description: "Curso de 4 meses para perfeccionar tus habilidades comunicativas y prepararte para el examen Goethe B2.",
//       image: "/imagenes/Courses/Aleman/P_B2_Aleman.jpg",
//       links: [{ text: "Más información", href: "#curso-intensivo-b2" }],
//       cost: "$1200",
//       duration: "4 meses",
//       requirements: "Haber completado el nivel B1.",
//       benefits: [
//         "Perfeccionamiento en expresión escrita y oral avanzada.",
//         "Preparación específica para el examen Goethe B2.",
//         "Clases prácticas con simulacros de examen."
//       ]
//     },
//     {
//       level: "Curso Intensivo de Alemán Nivel C1",
//       description: "Curso avanzado de 6 meses para perfeccionamiento profesional y académico.",
//       image: "/imagenes/Courses/Aleman/P_C1_Aleman.jpg",
//       links: [{ text: "Más información", href: "#curso-intensivo-c1" }],
//       cost: "$1500",
//       duration: "6 meses",
//       requirements: "Haber completado el nivel B2.",
//       benefits: [
//         "Dominio completo del idioma con enfoque académico y profesional.",
//         "Clases con profesores nativos especializados.",
//         "Preparación para presentaciones y entrevistas formales."
//       ]
//     },
//     {
//       level: "Curso de Preparación para el Examen Goethe",
//       description: "Curso especializado en la preparación para el examen Goethe con simulacros reales.",
//       image: "/imagenes/Courses/Aleman/P_ExamenGoethe.jpg",
//       links: [{ text: "Más información", href: "#curso-examen-goethe" }],
//       cost: "$700",
//       duration: "6 semanas",
//       requirements: "Nivel B1 o superior.",
//       benefits: [
//         "Simulacros reales del examen Goethe.",
//         "Asesoría personalizada con feedback detallado.",
//         "Material oficial actualizado del Goethe Institut."
//       ]
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>Curso de Alemán - Kourilovitch Institute</title>
//         <meta name="description" content="Domina el alemán con nuestro curso intensivo del Kourilovitch Institute y obtén tu certificación oficial." />
//         <meta property="og:title" content="Curso de Alemán - Kourilovitch Institute" />
//         <meta property="og:description" content="Domina el alemán con nuestro curso intensivo del Kourilovitch Institute." />
//         <meta property="og:image" content="/imagenes/Courses/Aleman/P_PrincipalAleman.jpg" />
//       </Head>
//       <div>
//         <section className="relative h-screen flex items-center justify-center text-white">
//           <Image
//             src="/imagenes/Courses/Aleman/P_PrincipalAleman.jpg"
//             alt="Imagen promocional del curso de alemán"
//             fill
//             quality={75}
//             priority
//             style={{ objectFit: "cover" }}
//           />
//           <div className="relative z-10 text-center max-w-2xl">
//             <h1 className="text-4xl md:text-6xl font-bold">Domina el Alemán con Kourilovitch Institute</h1>
//             <p className="mt-4 text-lg md:text-xl font-semibold">
//               Aprende alemán con un método probado y obtén tu certificación oficial.
//             </p>
//           </div>
//         </section>

//         <SliderLevels
//           title="Explora los Niveles de Alemán"
//           subtitle="Selecciona un nivel y descubre nuestras modalidades de aprendizaje."
//           levels={levels}
//           backgroundColor={bg_color}
//           fontColor={font_color}
//         />

//         {levels.map((course, index) => (
//           <TextoImagen
//             key={index}
//             id={course.links[0].href.substring(1)}
//             titulo={course.level}
//             parrafos={[
//               { subtitulo: "¿Qué incluye?", texto: course.description },
//               { subtitulo: "Requisitos", texto: course.requirements },
//               { subtitulo: "Ventajas", texto: course.benefits.join("\n• ") },
//               { subtitulo: "Duración y Costo", texto: `Duración: ${course.duration}\nCosto: ${course.cost}` }
//             ]}
//             imagen={course.image}
//             backgroundColor={bg_color}
//             fontColor={font_color}
//             posicion={index % 2 === 0 ? "right" : "left"}
//           />
//         ))}

//         <FormularioAgendarClase
//           colorFondo={bg_color}
//           curso="Agenda una clase gratuita en Curso de Alemán"
//         />
//       </div>
//     </>
//   );
// };

// export default CursoAleman;

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

const CursoAleman = () => {
  const { setHeaderColors } = useHeaderColorContext();
  const bg_color = "#ffb100";
  const font_color = "#c73e1d";

  useEffect(() => {
    setHeaderColors({ backgroundColor: bg_color, fontColor: font_color });
  }, [setHeaderColors]);

  const levels = [
    {
        level: "Curso Completo de Alemán Intensivo",
        description: "Curso integral desde A1 hasta B1 con preparación para el examen Goethe, diseñado para alcanzar un nivel intermedio-avanzado en solo 6 meses.",
        image: "/imagenes/Courses/Aleman/P_CompletoAleman.jpg",
        links: [{ text: "Más información", href: "#curso-completo-aleman" }],
        cost: "$1640",
        duration: "6 meses",
        requirements: "Edad mínima de 14 años.",
        benefits: [
            "Clases reducidas con máximo 5 estudiantes.",
            "Preparación especializada para el examen Goethe.",
            "Metodología de inmersión lingüística con herramientas interactivas.",
            "Disponibilidad presencial en Cuenca y modalidad online."
        ]
    },
    {
        level: "Curso Intensivo de Alemán Nivel A1",
        description: "Curso de introducción al alemán, ideal para principiantes, con un enfoque comunicativo y prácticas desde la primera clase.",
        image: "/imagenes/Courses/Aleman/P_A1_Aleman.jpg",
        links: [{ text: "Más información", href: "#curso-a1-aleman" }],
        cost: "$500",
        duration: "5 semanas",
        requirements: "Edad mínima de 14 años.",
        benefits: [
            "Introducción completa al nivel A1 con diálogos y frases básicas.",
            "Grupos reducidos con atención personalizada.",
            "Horarios flexibles y modalidad online disponible.",
            "Metodología dinámica y participativa."
        ]
    },
    {
        level: "Curso Intensivo de Alemán Nivel A2",
        description: "Curso intermedio para quienes ya poseen una base y desean mejorar sus habilidades comunicativas y gramaticales.",
        image: "/imagenes/Courses/Aleman/P_A2_Aleman.jpg",
        links: [{ text: "Más información", href: "#curso-a2-aleman" }],
        cost: "$500",
        duration: "5 semanas",
        requirements: "Nivel A1 aprobado.",
        benefits: [
            "Mejoras en comprensión auditiva y expresión oral.",
            "Grupos reducidos con máximo 5 estudiantes.",
            "Enfoque práctico con situaciones reales.",
            "Acceso a material didáctico y recursos digitales."
        ]
    },
    {
        level: "Curso Intensivo de Alemán Nivel B1",
        description: "Curso de nivel intermedio para desarrollar habilidades avanzadas de comunicación y comprensión.",
        image: "/imagenes/Courses/Aleman/P_B1_Aleman.jpg",
        links: [{ text: "Más información", href: "#curso-b1-aleman" }],
        cost: "$740",
        duration: "3 meses",
        requirements: "Nivel A2 aprobado.",
        benefits: [
            "Enseñanza avanzada con material práctico.",
            "Preparación para exámenes y uso formal del idioma.",
            "Clases interactivas con participación activa.",
            "Modalidad online y presencial en Cuenca."
        ]
    },
    {
        level: "Curso Intensivo de Alemán Nivel B2",
        description: "Curso avanzado de 4 meses diseñado para perfeccionar las habilidades comunicativas y la comprensión lectora.",
        image: "/imagenes/Courses/Aleman/P_B2_Aleman.jpg",
        links: [{ text: "Más información", href: "#curso-b2-aleman" }],
        cost: "$900",
        duration: "4 meses",
        requirements: "Nivel B1 aprobado.",
        benefits: [
            "Dominio avanzado en expresión oral y escrita.",
            "Preparación para el examen Goethe B2.",
            "Clases prácticas con simulacros de examen.",
            "Atención personalizada con máximo 5 estudiantes."
        ]
    },
    {
        level: "Curso Intensivo de Alemán Nivel C1",
        description: "Curso para alcanzar un nivel avanzado de alemán, ideal para contextos académicos y profesionales.",
        image: "/imagenes/Courses/Aleman/P_C1_Aleman.jpg",
        links: [{ text: "Más información", href: "#curso-c1-aleman" }],
        cost: "$1300",
        duration: "6 meses",
        requirements: "Nivel B2 aprobado.",
        benefits: [
            "Dominio completo del idioma con énfasis en gramática avanzada.",
            "Preparación para exámenes C1 con simulacros.",
            "Material especializado y clases con nativos.",
            "Horarios flexibles con modalidad online y presencial."
        ]
    },
    {
        level: "Curso Intensivo de Preparación para el Examen Goethe",
        description: "Curso especializado en la preparación intensiva para el examen Goethe, cubriendo todas las habilidades evaluadas.",
        image: "/imagenes/Courses/Aleman/P_ExamenGoethe.jpg",
        links: [{ text: "Más información", href: "#curso-examen-goethe" }],
        cost: "$350",
        duration: "6 semanas",
        requirements: "Nivel A1, A2 o B1 completado.",
        benefits: [
            "Simulacros completos del examen.",
            "Preparación en comprensión lectora, auditiva, escrita y oral.",
            "Clases prácticas con retroalimentación constante.",
            "Modalidad presencial y online."
        ]
    }
];



  return (
    <>
      <Head>
        <title>Curso de Alemán - Kourilovitch Institute</title>
        <meta name="description" content="Domina el alemán con nuestro curso intensivo del Kourilovitch Institute y obtén tu certificación oficial." />
        <meta property="og:title" content="Curso de Alemán - Kourilovitch Institute" />
        <meta property="og:description" content="Domina el alemán con nuestro curso intensivo del Kourilovitch Institute." />
        <meta property="og:image" content="/imagenes/Courses/Aleman/P_PrincipalAleman.jpg" />
      </Head>
      <div>
        <section className="relative h-screen flex items-center justify-center text-white">
          <Image
            src="/imagenes/Courses/Aleman/P_PrincipalAleman.jpg"
            alt="Imagen promocional del curso de alemán"
            fill
            quality={75}
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="relative z-10 text-center max-w-2xl">
            {/* <h1 className="text-4xl md:text-6xl font-bold">Domina el Alemán con Kourilovitch Institute</h1>
            <p className="mt-4 text-lg md:text-xl font-semibold">
              Aprende alemán con un método probado y obtén tu certificación oficial.
            </p> */}
          </div>
        </section>

        <SliderLevels
          title="Explora los Niveles de Alemán"
          subtitle="Selecciona un nivel y descubre nuestras modalidades de aprendizaje."
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

        <FormularioAgendarClase
          colorFondo={bg_color}
          curso="Agenda una clase gratuita en Curso de Alemán"
        />
      </div>
    </>
  );
};

export default CursoAleman;
