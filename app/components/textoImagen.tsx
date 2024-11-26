// "use client";

// import React from "react";

// interface TextoImagenProps {
//   texto: string;
//   imagen: string;
//   posicion: "left" | "right";
//   backgroundColor?: string; // Propiedad opcional para color de fondo
//   fontColor?: string; // Propiedad opcional para color de fuente
// }

// const TextoImagen: React.FC<TextoImagenProps> = ({
//   texto,
//   imagen,
//   posicion,
//   backgroundColor = "#F7FAFC", // Color por defecto
//   fontColor = "#333", // Color de texto por defecto
// }) => {
//   const isLeft = posicion === "left";

//   return (
//     <section
//       className="min-h-screen flex flex-col md:flex-row items-center justify-center"
//       style={{
//         backgroundColor,
//         color: fontColor,
//       }}
//     >
//       {/* Imagen */}
//       <div
//         className={`w-full md:w-1/2 flex items-center justify-center ${
//           isLeft ? "order-1" : "order-2"
//         }`}
//       >
//         <img
//           src={imagen}
//           alt={texto}
//           className="w-auto max-w-[70%] max-h-[80%] object-contain rounded-lg shadow-lg"
//           style={{
//             height: "auto",
//             maxHeight: "400px", // Tamaño máximo en píxeles
//           }}
//         />
//       </div>

//       {/* Texto */}
//       <div
//         className={`w-full md:w-1/2 p-8 ${
//           isLeft ? "order-2" : "order-1"
//         } text-center md:text-left`}
//       >
//         <p className="text-lg md:text-xl font-medium">{texto}</p>
//       </div>
//     </section>
//   );
// };

// export default TextoImagen;
"use client";

import React from "react";

interface TextoConImagenProps {
  titulo: string; // Título principal
  parrafos: { texto: string; subtitulo?: string }[]; // Array de párrafos con opción de subtítulos
  imagen?: string; // URL de la imagen (opcional)
  backgroundColor?: string; // Color de fondo
  fontColor?: string; // Color de texto
  mostrarBordes?: boolean; // Si muestra bordes o sombreados en los extremos
  mostrarBoton?: boolean; // Controla si se muestra el botón
  botonTexto?: string; // Texto del botón
  botonLink?: string; // Enlace del botón
  textoSize?: string; // Tamaño del texto (p.ej. "text-sm", "text-lg")
  posicion?: "left" | "right"; // Posición de la imagen
 
}

const TextoConImagen: React.FC<TextoConImagenProps> = ({
  titulo,
  parrafos,
  imagen,
  backgroundColor = "#F7FAFC", // Color de fondo por defecto
  fontColor = "#333", // Color de texto por defecto
  mostrarBordes = true, // Por defecto muestra bordes
  mostrarBoton = false, // Botón oculto por defecto
  botonTexto = "Conócenos", // Texto del botón
  botonLink = "#", // Enlace del botón
  textoSize = "text-base", // Tamaño del texto por defecto
  posicion = "left", // Posición de la imagen

}) => {
  const isLeft = posicion === "left";

  return (
    <section
      className={`relative min-h-screen flex flex-col md:flex-row items-center justify-center p-8`}
      style={{ backgroundColor, color: fontColor }}
    >
      {mostrarBordes && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-gray-500" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-transparent" />
        </>
      )}

      {/* Imagen opcional */}
      {imagen && (
        <div
          className={`w-full md:w-1/2 p-4 flex items-center justify-center ${
            isLeft ? "order-1" : "order-2"
          }`}
        >
          <img
            src={imagen}
            alt={titulo}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Texto */}
      <div
        className={`w-full md:w-1/2 p-8 ${
          isLeft ? "order-2" : "order-1"
        } text-center md:text-left`}
      >
        <h2 className="text-4xl font-bold mb-6">{titulo}</h2>
        {parrafos.map((parrafo, index) => (
          <div key={index} className="mb-4">
            {parrafo.subtitulo && (
              <h3 className={`text-2xl font-semibold mb-2 ${textoSize}`}>
                {parrafo.subtitulo}
              </h3>
            )}
            <p className={`${textoSize} leading-relaxed`}>{parrafo.texto}</p>
          </div>
        ))}
        {mostrarBoton && (
          <a
            href={botonLink}
            className="inline-block px-6 py-2 mt-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition"
          >
            {botonTexto}
          </a>
        )}
      </div>
    </section>
  );
};

export default TextoConImagen;
