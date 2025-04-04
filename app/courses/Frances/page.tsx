"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../../context/HeaderColorContext";
import dynamic from "next/dynamic";
import Image from "next/image";

// Importación diferida de componentes
const TextoImagen = dynamic(() => import("../../components/textoImagen"), {
  ssr: false,
});
const FormularioAgendarClase = dynamic(() => import("../../components/formularioAgendarClase"), {
  ssr: false,
});
const SliderLevels = dynamic(() => import("../../components/SliderLevels"), {
  ssr: false,
});

const CursoFrances = () => {
  const { setHeaderColors } = useHeaderColorContext();
  const bg_color = "#5c6bc0"; // Azul francés
  const font_color = "#ffffff";

  useEffect(() => {
    setHeaderColors({ backgroundColor: bg_color, fontColor: font_color });
  }, [setHeaderColors]);

  const levels = [
    {
      level: "Curso Completo de Francés Intensivo",
      description: "Niveles A1-A2-B1 con Preparación para Certificaciones DELF/DALF. Curso intensivo para un dominio sólido en 6 meses.",
      image: "/imagenes/Courses/Frances/P_CompletoFrances.webp",
      links: [{ text: "Más información", href: "#curso-completo-intensivo-frances" }],
    },
    {
      level: "Curso de Francés para Niños",
      description: "Curso diseñado para niños con juegos, canciones y material didáctico interactivo.",
      image: "/imagenes/Courses/Frances/P_NiñosFrances.webp",
      links: [{ text: "Más información", href: "#curso-ninos-frances" }],
    },
    {
      level: "Curso Intensivo de Conversación en Francés",
      description: "Cursos para mejorar la fluidez verbal y comprensión auditiva, desde nivel A1 a B2.",
      image: "/imagenes/Courses/Frances/P_ConversacionFrances.webp",
      links: [{ text: "Más información", href: "#curso-conversacion-frances" }],
    },
    {
      level: "Curso de Preparación para Certificaciones DELF/DALF",
      description: "Curso especializado para obtener certificaciones oficiales DELF y DALF.",
      image: "/imagenes/Courses/Frances/P_CertificacionFrances.webp",
      links: [{ text: "Más información", href: "#curso-certificacion-frances" }],
    },
  ];

  return (
    <div>
      {/* Sección Principal */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/imagenes/Courses/Frances/P_PrincipalFrances.webp"
          alt="Curso de Francés"
          fill
          quality={75}
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">Curso de Francés</h1>
          <p className="mt-4 text-lg md:text-xl">Domina el idioma francés con nuestro método eficaz.</p>
        </div>
      </section>

      {/* Slider con Navegación Interna */}
      <SliderLevels
        title="Explora los Niveles de Francés"
        subtitle="Selecciona un nivel y descubre nuestras modalidades de aprendizaje."
        levels={levels}
        backgroundColor={bg_color}
        fontColor={font_color}
      />

      {/* Contenidos con Anclajes */}
      <TextoImagen
        id="curso-completo-intensivo-frances"
        titulo="Curso Completo de Francés Intensivo"
        parrafos={[
          { subtitulo: "¿Qué incluye?", texto: "Niveles A1, A2 y B1 completos. Preparación para certificaciones DELF/DALF." },
          { subtitulo: "Ventajas", texto: "• Domina el francés en 6 meses \n• Máximo 5 estudiantes por clase \n• Métodos de enseñanza dinámicos" },
          { subtitulo: "Duración y Costo", texto: "• Duración: 6 meses \n• Costo: $1500" }
        ]}
        imagen="/imagenes/Courses/Frances/P_CompletoFrances.webp"
        backgroundColor={bg_color}
        fontColor={font_color}
        posicion="right"
      />

      <TextoImagen
        id="curso-ninos-frances"
        titulo="Curso de Francés para Niños"
        parrafos={[
          { subtitulo: "¿Qué incluye?", texto: "Actividades interactivas, canciones y juegos para niños de 7 a 12 años." },
          { subtitulo: "Ventajas", texto: "• Clases lúdicas y visuales \n• Atención personalizada \n• Material didáctico incluido" },
          { subtitulo: "Duración y Costo", texto: "• Duración: 8 semanas \n• Costo: $600" }
        ]}
        imagen="/imagenes/Courses/Frances/P_NiñosFrances.webp"
        backgroundColor={bg_color}
        fontColor={font_color}
        posicion="left"
      />

      <TextoImagen
        id="curso-conversacion-frances"
        titulo="Curso Intensivo de Conversación en Francés"
        parrafos={[
          { subtitulo: "¿Qué incluye?", texto: "Práctica de conversación con enfoque en la pronunciación y comprensión." },
          { subtitulo: "Ventajas", texto: "• Simulaciones de situaciones reales \n• Corrección en tiempo real \n• Fluidez y confianza al hablar" },
          { subtitulo: "Duración y Costo", texto: "• Duración: 6 semanas \n• Costo: $700" }
        ]}
        imagen="/imagenes/Courses/Frances/P_ConversacionFrances.webp"
        backgroundColor={bg_color}
        fontColor={font_color}
        posicion="right"
      />

      <TextoImagen
        id="curso-certificacion-frances"
        titulo="Curso de Preparación para Certificaciones DELF/DALF"
        parrafos={[
          { subtitulo: "¿Qué incluye?", texto: "Preparación completa con simulacros para las certificaciones oficiales DELF y DALF." },
          { subtitulo: "Ventajas", texto: "• Simulacros de examen \n• Material oficial de examen \n• Clases personalizadas" },
          { subtitulo: "Duración y Costo", texto: "• Duración: 6 semanas \n• Costo: $700" }
        ]}
        imagen="/imagenes/Courses/Frances/P_CertificacionFrances.webp"
        backgroundColor={bg_color}
        fontColor={font_color}
        posicion="left"
      />

      {/* Formulario para agendar clase */}
      {/* <FormularioAgendarClase
        colorFondo={bg_color}
        curso="Agenda una clase gratuita en Curso de Francés"
      /> */}
    </div>
  );
};

export default CursoFrances;
