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

  



  return (
    <>
      <h1>Política de Privacidad</h1>
  <p>Fecha de última actualización: [Introduce la fecha aquí]</p>
  <p>En [Nombre de tu empresa o aplicación], nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos, usamos y compartimos tu información cuando utilizas nuestros servicios.</p>
  
  <h2>Información que recopilamos</h2>
  <ul>
    <li>Información personal que proporcionas, como nombre, correo electrónico y datos de acceso.</li>
    <li>Datos generados automáticamente, como dirección IP y estadísticas de uso.</li>
  </ul>
  
  <h2>Cómo usamos tu información</h2>
  <p>Usamos la información para:</p>
  <ul>
    <li>Proporcionar y mejorar nuestros servicios.</li>
    <li>Comunicar actualizaciones o promociones relacionadas con nuestros servicios.</li>
    <li>Cumplir con nuestras obligaciones legales.</li>
  </ul>
  
  <h2>Compartir tu información</h2>
  <p>No compartiremos tu información personal con terceros, salvo en las siguientes circunstancias:</p>
  <ul>
    <li>Cuando sea necesario para prestar servicios.</li>
    <li>Cuando la ley lo requiera.</li>
    <li>Cuando tengas tu consentimiento explícito.</li>
  </ul>
  
  <h2>Tus derechos</h2>
  <p>Tienes derecho a acceder, modificar o eliminar tu información personal. Para ejercer estos derechos, contáctanos en [tu correo de contacto].</p>
  
  <h2>Contacto</h2>
  <p>Si tienes alguna pregunta sobre esta política, puedes contactarnos en: jonnathancubero@hotmail.com.</p>

    </>
  );
};

export default CursoItaliano;
