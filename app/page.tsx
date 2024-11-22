
"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../context/HeaderColorContext";

import ImagenVideo from "./components/ImagenVideo";
import LogoMovimiento from "./components/LogoMovimiento";
import SliceTexto from "./components/SliceTexto";
import FormularioAgendarClase from "./components/formularioAgendarClase";

export default function Home() {
  const { setHeaderColors } = useHeaderColorContext();

  const logosData = [
    { id: 1, src: "/imagenes/logos/logo1.png", alt: "Logo 1" },
    { id: 2, src: "/imagenes/logos/logo2.png", alt: "Logo 2" },
    { id: 3, src: "/imagenes/logos/logo3.png", alt: "Logo 3" },
    { id: 4, src: "/imagenes/logos/logo4.png", alt: "Logo 4" },
  ];
  const slides = [
    {
      url: "/imagenes/SliceTexto/Imagen1.png",
      text: "Texto superpuesto en imagen Funciona?",
    },
    {
      url: "/imagenes/SliceTexto/Imagen2.png",
      text: "Texto superpuesto en imagen 2",
    },
    {
      url: "/imagenes/SliceTexto/Imagen1.png",
      text: "Texto superpuesto en imagen 3",
    },
  ];
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
        text="Bienvenidos a KURILOVITCH"
        buttonLabel="Descubre más"
        buttonLink="#"
      />
     <LogoMovimiento
        logos={logosData}
        backgroundColor="#F8F9FA" // Color de fondo gris claro
        gap="30px" // Separación entre logos
        rowGap="50px" // Separación entre filas
        title="Nuestros Aliados"
        description="Descubre las marcas que confían en nuestra calidad."
      />
      <SliceTexto images={slides} backgroundColor="#000" />
      <FormularioAgendarClase colorFondo="#F0F4FF" curso="Clase Gratuita aqui..¡¡" />
    </div>
  );
}
