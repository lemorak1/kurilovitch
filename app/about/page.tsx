"use client";

import React, { useEffect } from "react";
import { useHeaderColorContext } from "../../context/HeaderColorContext";
import ImagenVideo from "../components/ImagenVideo";
// import MisionVision from "../components/MisionVision";
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

  let bg_color = "#64aaf1"
  let bg_color2 = "#304d6d"
  let font_color = "#ffffff"

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

  {/* Sección de la Profesora */ }
  const profesoraDataAbout = {
    id: "Profesora-Irena",
    titulo: "Conoce a la Profesora Irena Zhaboklitskaya",
    parrafos: [
        { texto: "La Prof. Irena Zhaboklitskaya (𝐊𝐨𝐮𝐫𝐢𝐥𝐨𝐯𝐢𝐭𝐜𝐡), es una Catedrática de la Facultad de Idioma Ruso, Departamento \u201c𝐈𝐝𝐢𝐨𝐦𝐚 𝐑𝐮𝐬𝐨 𝐜𝐨𝐦𝐨 𝐋𝐞𝐧𝐠𝐮𝐚 𝐄𝐱𝐭𝐫𝐚𝐧𝐣𝐞𝐫𝐚\u201d, en la prestigiosa Universidad Estatal de Mosc\u00fa. Con una carrera que abarca m\u00e1s de 30 a\u00f1os de experiencia, la profesora Zhaboklitskaya es una experta reconocida a nivel internacional en la ense\u00f1anza del ruso como lengua extranjera.\ud83c\udf93" },
        { texto: "\ud83d\udcda 𝐒𝐮 𝐭𝐫𝐚𝐲𝐞𝐜𝐭𝐨𝐫𝐢𝐚 𝐚𝐜𝐚𝐝𝐞\u0301𝐦𝐢𝐜𝐚 𝐲 𝐩𝐫𝐨𝐟𝐞𝐬𝐢𝐨𝐧𝐚𝐥 𝐢𝐧𝐜𝐥𝐮𝐲𝐞:" },
        { texto: "Amplia experiencia docente: Ha ense\u00f1ado ruso a estudiantes de todo el mundo, ayudando a cientos de personas a dominar este idioma gracias a su 𝐦𝐞𝐭𝐨𝐝𝐨𝐥𝐨𝐠\u0301𝐢𝐚 𝐜𝐥𝐚𝐫𝐚, 𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐚𝐝𝐚 𝐲 𝐞𝐟𝐢𝐜𝐚𝐳. La Prof. Zhaboklitskaya ha formado a estudiantes en todos los niveles, desde principiantes hasta avanzados, adapt\u00e1ndose siempre a las necesidades de sus alumnos.\ud83d\udc69\ud83c\udfeb La profesora Zhaboklitskaya tiene una notable trayectoria en la ense\u00f1anza del idioma ruso, con una experiencia que abarca desde los niveles b\u00e1sicos hasta la preparaci\u00f3n para ex\u00e1menes oficiales como el TRKI. Su dedicaci\u00f3n a la ense\u00f1anza de lengua rusa se refleja en la creaci\u00f3n de 𝐜𝐢𝐧𝐜𝐨 𝐜𝐮𝐫𝐬𝐨𝐬 𝐟𝐮𝐧𝐝𝐚𝐦𝐞𝐧𝐭𝐚𝐥𝐞𝐬, incluyendo dos cursos de \u201c𝐑𝐮𝐬𝐨 𝐜𝐨𝐦𝐨 𝐥𝐞𝐧𝐠𝐮𝐚 𝐞𝐱𝐭𝐫𝐚\u00f1𝐞𝐫𝐚\u201d desarrollados en colaboraci\u00f3n con otros expertos, as\u00ed como \u201c𝐋𝐞𝐧𝐠𝐮𝐚 𝐫𝐮𝐬𝐚 𝐦𝐨𝐝𝐞𝐫𝐧𝐚\u201d, \u201c𝐂𝐮𝐫𝐬𝐨 𝐩𝐫\u00e1𝐜𝐭𝐢𝐜𝐨 𝐝𝐞 𝐫𝐮𝐬𝐨 (𝐀𝟏, 𝐀𝟐)\u201d y \u201c𝐏𝐫𝐞𝐩𝐚𝐫𝐚𝐜𝐢\u00f3𝐧 𝐩𝐚𝐫𝐚 𝐞𝐥 𝐓𝐑𝐊𝐈\u201d. Estos cursos, implementados en la 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐝𝐚𝐝 𝐄𝐬𝐭𝐚𝐭𝐚𝐥 𝐝𝐞 𝐌𝐨𝐬𝐜\u00fa, son un testimonio de su profundo conocimiento y compromiso con la ense\u00f1anza del ruso, brindando recursos valiosos tanto para estudiantes como para otros educadores en el campo.🌍📊" },
        { texto: "La profesora Zhaboklitskaya ha demostrado tambi\u00e9n una s\u00f3lida experiencia en la formaci\u00f3n para la ense\u00f1anza de los profesores de idioma ruso a trav\u00e9s de sus 𝐧𝐮𝐦𝐞𝐫𝐨𝐬𝐚𝐬 𝐩𝐮𝐛𝐥𝐢𝐜𝐚𝐜𝐢𝐨𝐧𝐞𝐬 𝐚𝐜𝐚𝐝𝐞\u0301𝐦𝐢𝐜𝐚𝐬. Su trabajo abarca una amplia gama de temas relevantes para la ense\u00f1anza del idioma, 𝐢𝐧𝐜𝐥𝐮𝐲𝐞𝐧𝐝𝐨 𝐥𝐚 𝐞𝐧𝐬𝐞\u00f1𝐚𝐧𝐳𝐚 𝐝𝐞𝐥 𝐢𝐝𝐢𝐨𝐦𝐚 𝐫𝐮𝐬𝐨 𝐞𝐧 𝐞𝐧𝐭𝐨𝐫𝐧𝐨𝐬 𝐨𝐧𝐥𝐢𝐧𝐞 (𝟐𝟎𝟐𝟐). \u2728 Ha contribuido significativamente al campo con estudios sobre la orientaci\u00f3n cultural en textos educativos y el uso de tareas l\u00fadicas en el aula. 𝐇𝐚 𝐬𝐢𝐝𝐨 𝐩𝐨𝐧𝐞𝐧𝐭𝐞 𝐞𝐧 𝐜𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐢𝐚𝐬 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐜𝐢𝐨𝐧𝐚𝐥𝐞𝐬, exponiendo sobre la ense\u00f1anza del ruso como un medio esencial para la comunicaci\u00f3n intercultural." },
        { texto: "Estas contribuciones no solo enriquecen la literatura acad\u00e9mica, sino que tambi\u00e9n proporcionan valiosas herramientas pr\u00e1cticas para educadores en el campo del ruso como lengua extranjera, reflejando su dedicaci\u00f3n a mejorar constantemente las metodolog\u00edas de ense\u00f1anza.🏆" },
        { texto: "\u272f \u00bf𝐏𝐨𝐫 𝐪𝐮\u00e9 𝐚𝐩𝐫𝐞𝐧𝐝𝐞𝐫 𝐫𝐮𝐬𝐨 𝐜𝐨𝐧 𝐞𝐥𝐥𝐚?\n🎯 " },
        { texto: "𝐀𝐭𝐞𝐧𝐜𝐢\u00f3𝐧 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐚: Nuestras clases est\u00e1n limitadas a 𝐦\u00a1𝐱𝐢𝐦𝐨 𝟓 𝐚𝐥𝐮𝐦𝐧𝐨𝐬, lo que garantiza que cada estudiante reciba la atenci\u00f3n y el apoyo necesario. Esto, combinado con la experiencia y dedicaci\u00f3n de la profesora Zhaboklitskaya, hace que cada lecci\u00f3n sea eficaz y enriquecedora"}
    ],
    logros: [
        "30+ a\u00f1os de experiencia en la ense\u00f1anza del ruso como lengua extranjera.",
        "Catedr\u00e1tica en la Universidad Estatal de Mosc\u00fa.",
        "Autora de cinco cursos fundamentales de ruso como lengua extranjera.",
        "Especialista en preparaci\u00f3n para ex\u00e1menes oficiales como el TRKI.",
        "Ponente en conferencias internacionales sobre innovaci\u00f3n en la ense\u00f1anza de idiomas."
    ],
    imagen: "imagenes/Profesores/Irena_Zhaboklitskaya/Irena1.jpg",
    backgroundColor: bg_color,
    fontColor: font_color,
    botonTexto: "Descubre m\u00e1s",
    botonLink: "/courses/Ruso/#Profesora-Irena",
    mostrarBordes: true,
    mostrarBoton: true,
    backgroundColorSecond: bg_color2,
    posicion:"center",
}

  return (
    <div>
      <ImagenVideo
        backgroundUrl="/videos/intro.mp4"
        isVideo={true}
        text="Conoce un poco de KURILOVITCH"
      // buttonLabel="Descubre más"
      // buttonLink="#"
      />

      {/* Intro Section */}

      {/* <HeroSection
    videoUrl="imagenes/Home/videoBienvenida.mp4"
    /> */}
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
        fontColor={font_color}  // Color de texto personalizado
      />


      <MisionVisionSection
        title=""
        missionTitle="Mision"
        visionTitle="Vision"
        missionText="En Kourilovitch Institute, nuestra misión es fomentar el aprendizaje de idiomas de manera integral y accesible, promoviendo la comprensión intercultural y la excelencia académica. Nos dedicamos a formar estudiantes en competencias lingüísticas que van más allá del idioma, integrando la cultura y las particularidades de cada lengua. Buscamos crear una comunidad de aprendizaje inclusiva y colaborativa, donde cada estudiante se sienta inspirado a expandir sus horizontes y alcanzar sus metas personales y profesionales."
        visionText="Nuestra visión es ser un referente en la enseñanza de idiomas en Latinoamérica, destacándonos por nuestra calidad educativa, metodología innovadora y compromiso con la diversidad cultural. Aspiramos a ser el lugar de elección para quienes desean aprender un idioma con el respaldo de un equipo académico de excelencia, con profesores especializados y programas personalizados que impulsen el desarrollo global y el intercambio cultural."
        backgroundColor={bg_color} // Fondo suave
        backgroundColor2={bg_color2} // Fondo suave
        textColor={font_color}  // Texto oscuro
      />
      <ObjetivoSection
        title="Nuestros Objetivos"
        objectives={objectivesData}
        backgroundColor={bg_color} // Fondo suave
        backgroundColor2={bg_color2} // Fondo suave
        fontColor={font_color}  // Texto oscuro
      />
      <TextoImagen
       key="A100"
        id={profesoraDataAbout.id}
        titulo={profesoraDataAbout.titulo}
        parrafos={profesoraDataAbout.parrafos}
        logros={profesoraDataAbout.logros}
        imagen={profesoraDataAbout.imagen}
        backgroundColor={profesoraDataAbout.backgroundColor}
        fontColor={profesoraDataAbout.fontColor}
        botonTexto={profesoraDataAbout.botonTexto}
        botonLink={profesoraDataAbout.botonLink}
        mostrarBordes={profesoraDataAbout.mostrarBordes}
        mostrarBoton={profesoraDataAbout.mostrarBoton}
        backgroundColorSecond={profesoraDataAbout.backgroundColorSecond}
        posicion="center"
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
