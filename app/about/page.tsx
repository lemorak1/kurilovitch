"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../context/HeaderColorContext";
import ImagenVideo from "../components/ImagenVideo";
import MisionVision from "../components/MisionVision";
import TextoImagen from "../components/textoImagen";

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
            <ImagenVideo
                backgroundUrl="/videos/intro.mp4"
                isVideo={true}
                text="Conoce un poco de KURILOVITCH"
                // buttonLabel="Descubre más"
                // buttonLink="#"
            />
            <MisionVision
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
        </div>
    );
};
export default AboutPage;
