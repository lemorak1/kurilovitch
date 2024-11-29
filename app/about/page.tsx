"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../context/HeaderColorContext";
import ImagenVideo from "../components/ImagenVideo";
import MisionVision from "../components/MisionVision";
import TextoImagen from "../components/textoImagen";
import HeroSection from "../components/HeroSection";

import MisionVisionSection from "../components/MisionVisionSection";
import ObjetivoSection from "../components/ObjetivoSection";
const data = {
    topTitle: "Nuestra Filosofía",
    columns: [
        {
            title: "Misión",
            text: "Ayudar a las personas a alcanzar su máximo potencial.",
        },
        {
            title: "Visión",
            text: "Ser líderes globales en educación y desarrollo personal.",
        },
        {
            title: "Valores",
            text: "Integridad, innovación y excelencia.",
        },
    ],
};
const objectivesData = [
    {
      title: "Excelencia Académica",
      description:
        "Diseñar programas de aprendizaje adaptados a las necesidades de cada estudiante, garantizando calidad en la enseñanza de idiomas y una metodología efectiva.",
      icon: "/imagenes/About/objetivo_1.webp", // Reemplaza con la ruta correcta del icono
    },
    {
      title: "Inmersión Cultural",
      description:
        "Brindar experiencias educativas que no solo enseñen el idioma, sino que también acerquen a los estudiantes a las tradiciones, historia y valores de cada cultura.",
      icon: "/imagenes/About/objetivo_2.webp",
    },
    {
      title: "Idiomas Poco Comunes",
      description:
        "Permitir a nuestros estudiantes acceder a idiomas poco convencionales y apoyar sus necesidades específicas mediante la búsqueda de profesores altamente calificados en cada área.",
      icon: "/imagenes/About/objetivo_3.webp",
    },
    {
      title: "Desarrollo Personal y Profesional",
      description:
        "Ayudar a los estudiantes a alcanzar sus objetivos personales y laborales, preparándolos con habilidades lingüísticas que les abran puertas a nuevas oportunidades alrededor del mundo.",
      icon: "/imagenes/About/objetivo_4.webp",
    },
  ];
const AboutPage = () => {
    ;
    const { setHeaderColors } = useHeaderColorContext();
let bg_color="#64aaf1"
    useEffect(() => {
        // setHeaderColors({
        //   backgroundColor: "#000000", // Solo establecemos el fondo aquí, se mantendrá el color de fuente predeterminado
        // });

        return () => {
            setHeaderColors({
                backgroundColor: bg_color,
                fontColor: "#000000",
            });
        };
    }, [setHeaderColors]);

    return (
        <div>
            {/* <ImagenVideo
                backgroundUrl="/videos/intro.mp4"
                isVideo={true}
                text="Conoce un poco de KURILOVITCH"
                // buttonLabel="Descubre más"
                // buttonLink="#"
            /> */}
           
  {/* Intro Section */}

      <HeroSection
      title="Bienvenidos a Kourilovitch Institute"
      description="Transformamos el aprendizaje de idiomas en experiencias culturales y educativas de excelencia."
      buttonText="Conócenos más"
      buttonLink="#intro"
      gradientFrom="blue-500"
      gradientTo="blue-300"
    />
      <TextoImagen
        titulo=""
        parrafos={[
          { texto: "En Kourilovitch Institute, creemos que aprender un idioma va más allá de memorizar palabras: es un viaje hacia nuevas culturas.", subtitulo: "Nuestra Filosofía" },
          { texto: "Cada curso está diseñado para sumergirte en la lengua y cultura que elijas, asegurando fluidez y contexto cultural." },
          { texto: "Únete a nosotros y descubre cómo dominar un idioma puede abrirte un mundo lleno de oportunidades.", subtitulo: "Oportunidades" },
        ]}
        imagen="/imagenes/About/Introduction_About.webp"
        posicion="left"
        backgroundColor={bg_color} // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
      
    
      <MisionVisionSection
      title = ""
      missionTitle="Mision"
      visionTitle="Vision"
      missionText="En Kourilovitch Institute, nuestra misión es fomentar el aprendizaje de idiomas de manera integral y accesible, promoviendo la comprensión intercultural y la excelencia académica. Nos dedicamos a formar estudiantes en competencias lingüísticas que van más allá del idioma, integrando la cultura y las particularidades de cada lengua. Buscamos crear una comunidad de aprendizaje inclusiva y colaborativa, donde cada estudiante se sienta inspirado a expandir sus horizontes y alcanzar sus metas personales y profesionales."
      visionText="Nuestra visión es ser un referente en la enseñanza de idiomas en Latinoamérica, destacándonos por nuestra calidad educativa, metodología innovadora y compromiso con la diversidad cultural. Aspiramos a ser el lugar de elección para quienes desean aprender un idioma con el respaldo de un equipo académico de excelencia, con profesores especializados y programas personalizados que impulsen el desarrollo global y el intercambio cultural."
      backgroundColor="#f0f4f8" // Fondo suave
      textColor="#333333" // Texto oscuro
    />
      <ObjetivoSection
        title="Nuestros Objetivos"
        objectives={objectivesData}
        backgroundColor="#ffffff"
        fontColor="#333333"
      />
          
            {/* <MisionVision
                topTitle={data.topTitle}
                columns={data.columns}
                backgroundColor="#E8F6EF"
                fontColor="#222"
                spacing={30}
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
      /> */}
        </div>
    );
};
export default AboutPage;
