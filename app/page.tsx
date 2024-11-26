"use client";


import React, { useEffect } from "react";
import { useHeaderColorContext } from "../context/HeaderColorContext";
import ImagenVideo from "./components/ImagenVideo";
import LogoMovimiento from "./components/LogoMovimiento";
import SliceTexto from "./components/SliceTexto";
import FormularioAgendarClase from "./components/formularioAgendarClase";
import TextoImagen from "./components/textoImagen";
import PromocionCurso from "./components/PromocionCurso";

import ScrollPage from "./components/ScrollPage";

const Home = () => {
  const { setHeaderColors } = useHeaderColorContext();
  let bg_color="#64aaf1";
  let font_color="#ffffff";

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

  const contenido_TextoImagen = [
    {
      titulo: "Bienvenido a Kourilovitch Institute",
      parrafos: [
        "En Kourilovitch Institute, creemos que aprender un idioma va más allá de memorizar palabras: es un viaje hacia nuevas culturas, ideas y formas de ver el mundo.",
      ],
      imagenUrl: "/imagenes/instituto.jpg", // Imagen para esta sección
      posicionImagen: "left",
    },
    {
      titulo: "Nuestra Filosofía",
      parrafos: [
        "Fundado en una tradición de excelencia y con un enfoque en la inmersión cultural, nuestro instituto ofrece clases de ruso, italiano, alemán y español, impartidas por profesores nativos altamente calificados.",
      ],
      imagenUrl: "/imagenes/filosofia.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "Nuestra Metodología",
      parrafos: [
        "Cada curso está diseñado para sumergirte en la lengua y cultura que elijas, asegurando que puedas comunicarte con fluidez y comprender el contexto cultural del idioma.",
        "Nuestros grupos reducidos y la atención personalizada nos permiten acompañarte en cada paso, ajustando nuestra metodología a tus objetivos personales y ritmo de aprendizaje.",
      ],
      imagenUrl: "/imagenes/metodologia.jpg",
      posicionImagen: "left",
    },
    {
      titulo: "Idiomas Poco Comunes",
      parrafos: [
        "¿Tienes curiosidad por idiomas poco comunes? En Kourilovitch Institute también te ofrecemos la opción de explorar lenguas como el polaco, húngaro, y más.",
        "Si el idioma que buscas no está en nuestro catálogo, ¡consúltanos! Nos comprometemos a encontrar al mejor profesor para tu aprendizaje.",
      ],
      imagenUrl: "/imagenes/idiomas.jpg",
      posicionImagen: "right",
    },
    {
      titulo: "Únete a Nosotros",
      parrafos: [
        "Únete a nosotros y descubre cómo dominar un idioma puede abrirte un mundo lleno de oportunidades.",
      ],
      imagenUrl: "/imagenes/unete.jpg",
      posicionImagen: "left",
    },
  ];

  const logosData = [
    { id: 1, src: "/imagenes/logos/logo1.png", alt: "Logo 1" },
    { id: 2, src: "/imagenes/logos/logo2.png", alt: "Logo 2" },
    { id: 3, src: "/imagenes/logos/logo3.png", alt: "Logo 3" },
    { id: 4, src: "/imagenes/logos/logo4.png", alt: "Logo 4" },
  ];

  const slides = [
    {
      url: "/imagenes/SliceTexto/Imagen1.png",
     
      title: "Aprende Italiano",
      description:
        "Sumérgete en el idioma del arte y la música. Clases intensivas con profesores nativos.",
      link: "/courses/Italiano",
    },
    {
      url: "/imagenes/SliceTexto/Imagen2.png",
     
      title: "Aprende Italiano",
      description:
        "Sumérgete en el idioma del arte y la música. Clases intensivas con profesores nativos.",
      link: "/courses/Italiano",
    },
    {
      url: "/imagenes/SliceTexto/Imagen1.png",
      title: "Aprende Italiano",
      description:
        "Sumérgete en el idioma del arte y la música. Clases intensivas con profesores nativos.",
      link: "/courses/Italiano",

      
    },
  ];

  return (
    <div className="scroll-container">
      <ScrollPage>
        <ImagenVideo
          backgroundUrl="imagenes/Home/videoBienvenida.mp4"
          isVideo={true}
          fitMode="scale-down"
          
        />
      </ScrollPage>
      <div>
      {contenido_TextoImagen.map((seccion, index) => (
        <div key={index} className="scroll-page">
          <ScrollPage>
          <TextoImagen
            titulo={seccion.titulo}
            parrafos={seccion.parrafos.map((p) => ({ texto: p }))}
            imagen={seccion.imagenUrl}
            backgroundColor={bg_color}
            fontColor={font_color}
            mostrarBordes={true}
            textoSize="text-lg"
            posicion={seccion.posicionImagen}
            mostrarBoton={false} // No mostramos el botón por ahora
          />
          </ScrollPage>
        </div>
      ))}
    </div>
    <ScrollPage>
    <PromocionCurso
  titulo="¡Domina el Alemán!"
  textoDestacado="Curso intensivo comienza en diciembre. ¡Promociones exclusivas al separar su cupo hasta el 25 de noviembre!"
  descripcion="¡Es tu momento de aprender alemán! Únete a nuestro curso intensivo que empieza la semana del 9 de diciembre y adquiere fluidez con profesores expertos y grupos reducidos. Tanto en modalidad online como presencial en Cuenca, te preparamos para los niveles A1, A2, B1 y el examen de certificación Goethe. ¡Reserva tu cupo antes del 25 de noviembre y disfruta de descuentos especiales!"
  imagen="/imagenes/Courses/Aleman/P_CompletoAleman.jpg"
  posicion="left"
  backgroundColor="#ffb100"
   fontColor="#333333"
   highlightColor="#ff4500"
  link="/courses/Aleman"
      />
      </ScrollPage>
      <ScrollPage>
        <LogoMovimiento
          logos={logosData}
          backgroundColor={bg_color}
          gap="50px"
          rowGap="50px"
          title="Nuestros Aliados"
          description="Descubre las marcas que confían en nuestra calidad."
        />
      </ScrollPage>
      <ScrollPage>
        <SliceTexto images={slides} backgroundColor={bg_color} />
      </ScrollPage>
      <ScrollPage>
        <FormularioAgendarClase colorFondo={bg_color} curso="Clase Gratuita aquí" />
      </ScrollPage>
    </div>
  );
};

export default Home;
