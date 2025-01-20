// "use client";


// import React, { useEffect } from "react";
// import { useHeaderColorContext } from "../context/HeaderColorContext";
// import ImagenVideo from "./components/ImagenVideo";
// import LogoMovimiento from "./components/LogoMovimiento";
// import SliceTexto from "./components/SliceTexto";
// import FormularioAgendarClase from "./components/formularioAgendarClase";
// import TextoImagen from "./components/textoImagen";
// import PromocionCurso from "./components/PromocionCurso";

// import ScrollPage from "./components/ScrollPage";

// const Home = () => {
//   const { setHeaderColors } = useHeaderColorContext();
//   let bg_color="#64aaf1";
//   let font_color="#ffffff";

//   useEffect(() => {
//     setHeaderColors({
//       backgroundColor: bg_color,
//       fontColor: font_color, // Solo establecemos el fondo aquí, se mantendrá el color de fuente predeterminado
//     });

//     return () => {
//       setHeaderColors({ 
//         backgroundColor: bg_color,
//         fontColor: font_color,
//       });
//     };
//   }, [setHeaderColors]);

//   const contenido_TextoImagen = [
//     {
//       titulo: "Bienvenido a Kourilovitch Institute",
//       parrafos: [
//         "En Kourilovitch Institute, creemos que aprender un idioma va más allá de memorizar palabras: es un viaje hacia nuevas culturas, ideas y formas de ver el mundo.",
//       ],
//       imagenUrl: "/imagenes/instituto.jpg", // Imagen para esta sección
//       posicionImagen: "left",
//     },
//     {
//       titulo: "Nuestra Filosofía",
//       parrafos: [
//         "Fundado en una tradición de excelencia y con un enfoque en la inmersión cultural, nuestro instituto ofrece clases de ruso, italiano, alemán y español, impartidas por profesores nativos altamente calificados.",
//       ],
//       imagenUrl: "/imagenes/filosofia.jpg",
//       posicionImagen: "right",
//     },
//     {
//       titulo: "Nuestra Metodología",
//       parrafos: [
//         "Cada curso está diseñado para sumergirte en la lengua y cultura que elijas, asegurando que puedas comunicarte con fluidez y comprender el contexto cultural del idioma.",
//         "Nuestros grupos reducidos y la atención personalizada nos permiten acompañarte en cada paso, ajustando nuestra metodología a tus objetivos personales y ritmo de aprendizaje.",
//       ],
//       imagenUrl: "/imagenes/metodologia.jpg",
//       posicionImagen: "left",
//     },
//     {
//       titulo: "Idiomas Poco Comunes",
//       parrafos: [
//         "¿Tienes curiosidad por idiomas poco comunes? En Kourilovitch Institute también te ofrecemos la opción de explorar lenguas como el polaco, húngaro, y más.",
//         "Si el idioma que buscas no está en nuestro catálogo, ¡consúltanos! Nos comprometemos a encontrar al mejor profesor para tu aprendizaje.",
//       ],
//       imagenUrl: "/imagenes/idiomas.jpg",
//       posicionImagen: "right",
//     },
//     {
//       titulo: "Únete a Nosotros",
//       parrafos: [
//         "Únete a nosotros y descubre cómo dominar un idioma puede abrirte un mundo lleno de oportunidades.",
//       ],
//       imagenUrl: "/imagenes/unete.jpg",
//       posicionImagen: "left",
//     },
//   ];

//   const logosData = [
//     { id: 1, src: "/imagenes/logos/logo1.png", alt: "Logo 1" },
//     { id: 2, src: "/imagenes/logos/logo2.png", alt: "Logo 2" },
//     { id: 3, src: "/imagenes/logos/logo3.png", alt: "Logo 3" },
//     { id: 4, src: "/imagenes/logos/logo4.png", alt: "Logo 4" },
//   ];

//   const slides = [
//     {
//       url: "/imagenes/SliceTexto/Imagen1.png",
     
//       title: "Aprende Italiano",
//       description:
//         "Sumérgete en el idioma del arte y la música. Clases intensivas con profesores nativos.",
//       link: "/courses/Italiano",
//     },
//     {
//       url: "/imagenes/SliceTexto/Imagen2.png",
     
//       title: "Aprende Italiano",
//       description:
//         "Sumérgete en el idioma del arte y la música. Clases intensivas con profesores nativos.",
//       link: "/courses/Italiano",
//     },
//     {
//       url: "/imagenes/SliceTexto/Imagen1.png",
//       title: "Aprende Italiano",
//       description:
//         "Sumérgete en el idioma del arte y la música. Clases intensivas con profesores nativos.",
//       link: "/courses/Italiano",

      
//     },
//   ];

//   return (
//     <div className="scroll-container">
//       <ScrollPage> 
//         <ImagenVideo
//         key={Date.now()} // Esto forzará que el video se reinicie al recargar
//           backgroundUrl="imagenes/Home/videoBienvenida.mp4"
//           isVideo={true}
//           fitMode="scale-down"
          
//         />
//       </ScrollPage>
//       <div>
//       {contenido_TextoImagen.map((seccion, index) => (
//         <div key={index} className="scroll-page">
//           <ScrollPage>
//           <TextoImagen
//             titulo={seccion.titulo}
//             parrafos={seccion.parrafos.map((p) => ({ texto: p }))}
//             imagen={seccion.imagenUrl}
//             backgroundColor={bg_color}
//             fontColor={font_color}
//             mostrarBordes={true}
//             textoSize="text-lg"
//             posicion={seccion.posicionImagen?"right":"left"}
//             mostrarBoton={false} // No mostramos el botón por ahora
//           />
//           </ScrollPage>
//         </div>
//       ))}
//     </div>
//     <ScrollPage>
//     <PromocionCurso
//   titulo="¡Domina el Alemán!"
//   textoDestacado="Curso intensivo comienza en diciembre. ¡Promociones exclusivas al separar su cupo hasta el 25 de noviembre!"
//   descripcion="¡Es tu momento de aprender alemán! Únete a nuestro curso intensivo que empieza la semana del 9 de diciembre y adquiere fluidez con profesores expertos y grupos reducidos. Tanto en modalidad online como presencial en Cuenca, te preparamos para los niveles A1, A2, B1 y el examen de certificación Goethe. ¡Reserva tu cupo antes del 25 de noviembre y disfruta de descuentos especiales!"
//   imagen="/imagenes/Courses/Aleman/P_CompletoAleman.jpg"
//   posicion="left"
//   backgroundColor="#ffb100"
//    fontColor="#333333"
//    highlightColor="#ff4500"
//   link="/courses/Aleman"
//       />
//       </ScrollPage>
//       <ScrollPage>
//         <LogoMovimiento
//           logos={logosData}
//           backgroundColor={bg_color}
//           gap="50px"
//           rowGap="50px"
//           title="Nuestros Aliados"
//           description="Descubre las marcas que confían en nuestra calidad."
//         />
//       </ScrollPage>
//       <ScrollPage>
//         <SliceTexto images={slides} backgroundColor={bg_color} />
//       </ScrollPage>
//       <ScrollPage>
//         <FormularioAgendarClase colorFondo={bg_color} curso="Clase Gratuita aquí" />
//       </ScrollPage>
//     </div>
//   );
// };

// export default Home;
"use client";
import React, { useEffect } from "react";
import HeroSection from "../app/components/HeroSection";
import FAQSection from "../app/components/FAQSection";
import Beneficios from "../app/components/Beneficios";
import BestCourses from "../app/components/BestCourses";
import { useHeaderColorContext } from "../context/HeaderColorContext";
import FormularioAgendarClase from "./components/formularioAgendarClase";
import InstagramFeed from "./components/InstagramFeed";


const Home = () => {
    const { setHeaderColors } = useHeaderColorContext();
  let bg_color="#64aaf1";
  let font_color="#ffffff";
  let backgroundColorSecond="#304d6d"

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
  const faqs = [
    {
      question: "¿Qué modalidades de estudio ofrecen?",
      answer: "Ofrecemos clases online en vivo, presenciales en Cuenca y opciones híbridas para mayor flexibilidad.",
    },
    {
      question: "¿Puedo estudiar desde otro país?",
      answer: "Sí, nuestras clases online están diseñadas para estudiantes de todo el mundo, con horarios flexibles adaptados a diferentes zonas horarias.",
    },
    {
      question: "¿Qué certificaciones ofrecen?",
      answer: "Preparamos a los estudiantes para certificaciones oficiales reconocidas internacionalmente como Goethe (Alemán), DELF (Francés) y TORFL (Ruso).",
    },
    {
      question: "¿Cómo son los profesores?",
      answer: "Todos nuestros profesores son nativos, certificados y altamente calificados en la enseñanza de idiomas.",
    },
    {
      question: "¿Qué materiales utilizan en las clases?",
      answer: "Trabajamos con libros, recursos digitales y plataformas interactivas reconocidas mundialmente, además de material personalizado.",
    },
    {
      question: "¿Qué ventajas tiene estudiar con ustedes?",
      answer: "Ofrecemos clases personalizadas, grupos reducidos y un enfoque en la inmersión cultural para garantizar un aprendizaje efectivo.",
    },
  ];
  
  const courses = [
    {
      title: "Alemán",
      description:
        "Domina el alemán con clases intensivas diseñadas para alcanzar fluidez rápidamente y obtén la preparación necesaria para exámenes Goethe. Descubre la riqueza cultural alemana mientras mejoras tu perfil académico o profesional.",
      buttonLabel: "Ver más",
      onButtonClick: () => alert("Curso de Alemán"),
    },
    {
      title: "Español",
      description:
        "Aprende español desde la comodidad de tu hogar con profesores nativos. Perfecto para viajeros, profesionales y estudiantes que desean dominar uno de los idiomas más hablados del mundo.",
      buttonLabel: "Ver más",
      onButtonClick: () => alert("Curso de Español"),
    },
    {
      title: "Italiano",
      description:
        "Sumérgete en la cultura italiana mientras aprendes el idioma con un enfoque práctico. Ideal para amantes del arte, la gastronomía y la música.",
      buttonLabel: "Ver más",
      onButtonClick: () => alert("Curso de Italiano"),
    },
    {
      title: "Ruso",
      description:
        "Aprende ruso con una metodología práctica que te prepara para explorar una de las culturas más fascinantes del mundo. Ideal para negocios, estudios o viajes.",
      buttonLabel: "Ver más",
      onButtonClick: () => alert("Curso de Ruso"),
    },
    {
      title: "Francés",
      description:
        "Domina el francés y abre las puertas a oportunidades en más de 29 países francófonos. Clases dinámicas y preparación para certificaciones DELF.",
      buttonLabel: "Ver más",
      onButtonClick: () => alert("Curso de Francés"),
    },
  ];
  
  const sectionsData = [
    {
      title: "Clases en Vivo",
      description:
        "Interactúa con profesores certificados en tiempo real desde cualquier lugar del mundo. Diseñamos las clases para que sean prácticas y adaptadas a tus objetivos.",
    },
    {
      title: "Metodología Personalizada",
      description:
        "Cada lección está diseñada según tus necesidades específicas, ya sea que busques mejorar tu conversación, aprobar un examen o aprender por placer.",
    },
    {
      title: "Certificaciones Oficiales",
      description:
        "Prepárate para exámenes reconocidos internacionalmente, como Goethe, DELF y TORFL, con el respaldo de materiales de alta calidad y profesores expertos.",
    },
    {
      title: "Inmersión Cultural",
      description:
        "Explora no solo el idioma, sino también las costumbres y tradiciones del país que elijas. Clases diseñadas para una experiencia completa.",
    },
    {
      title: "Tecnología de Punta",
      description:
        "Utilizamos herramientas digitales avanzadas y plataformas interactivas que hacen el aprendizaje más dinámico y efectivo.",
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection videoUrl="imagenes/Home/videoBienvenida.mp4"/>

      {/* Beneficios */}
      <section className="bg-gray-100 text-gray-800" 
        style={{
          backgroundColor: bg_color, // Fondo en hexadecimal
          color: font_color, // Color de fuente en hexadecimal
      }}
      >
     <Beneficios sections={sectionsData}  backgroundColor={bg_color} textColor={font_color} backgroundColorSecond={backgroundColorSecond}/>;
      </section>

      {/* Cursos Destacados */}
      <section id="courses-section" className="text-gray-800" 
      style={{
        backgroundColor: bg_color, // Fondo en hexadecimal
        color: font_color, // Color de fuente en hexadecimal
    }}>
      <BestCourses courses={courses} backgroundColor={bg_color} textColor={font_color} backgroundColorSecond={backgroundColorSecond}/>;
      </section>
      <FormularioAgendarClase
          colorFondo={bg_color}
          curso="Agenda una clase gratuita en Curso de Alemán"
        />
         
         <InstagramFeed accessToken="TU_TOKEN_DE_ACCESO_AQUÍ" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} backgroundColor={bg_color} fontColor={font_color} />

 
    </>
  );
};

export default Home;
