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

    useEffect(() => {
        // setHeaderColors({
        //   backgroundColor: "#000000", // Solo establecemos el fondo aquí, se mantendrá el color de fuente predeterminado
        // });

        return () => {
            setHeaderColors({
                backgroundColor: "#64aaf1",
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
        texto="Prepárate para exámenes internacionales como TOEFL y IELTS."
        imagen="/imagenes/Courses/Ingles/ingles-profesor-3.jpg"
        posicion="left"
        backgroundColor="#C0C0C0" // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
      <TextoImagen
        texto="Prepárate para exámenes internacionales como TOEFL y IELTS."
        imagen="/imagenes/Courses/Ingles/ingles-profesor-3.jpg"
        posicion="right"
        backgroundColor="#C0C0C0" // Color de fondo personalizado
        fontColor="#01579b" // Color de texto personalizado
      />
        </div>
    );
};
export default AboutPage;
