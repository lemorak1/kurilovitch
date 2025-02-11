
// "use client";

// import React from "react";

// interface TextoConImagenProps {
//   id?: string; // URL de la imagen (opcional)
//   titulo: string; // Título principal
//   parrafos: { texto: string; subtitulo?: string }[]; // Array de párrafos con opción de subtítulos
//   imagen?: string; // URL de la imagen (opcional)
//   backgroundColor?: string; // Color de fondo
//   backgroundColorSecond?:string;
//   fontColor?: string; // Color de texto
//   mostrarBordes?: boolean; // Si muestra bordes o sombreados en los extremos
//   mostrarBoton?: boolean; // Controla si se muestra el botón
//   botonTexto?: string; // Texto del botón
//   botonLink?: string; // Enlace del botón
//   textoSize?: string; // Tamaño del texto (p.ej. "text-sm", "text-lg")
//   posicion?: "left" | "right"; // Posición de la imagen
//   logros?: string[]; // Lista opcional de logros
// }

// const TextoConImagen: React.FC<TextoConImagenProps> = ({
//   id,
//   titulo,
//   parrafos,
//   imagen,
//   backgroundColor = "#F7FAFC", // Color de fondo por defecto
//   backgroundColorSecond="#F7FAFC",
//   fontColor = "#333", // Color de texto por defecto
//   mostrarBordes = true, // Por defecto muestra bordes
//   mostrarBoton = false, // Botón oculto por defecto
//   botonTexto = "Conócenos", // Texto del botón
//   botonLink = "#", // Enlace del botón
//   textoSize = "text-base", // Tamaño del texto por defecto
//   posicion = "left", // Posición de la imagen
//   logros = [], // Por defecto, no se muestran logros
// }) => {
//   const isLeft = posicion === "left";

//   return (
//     <section
//       id={id}
//       className={`relative min-h-screen flex flex-col md:flex-row items-center justify-center p-8`}
//       style={{ backgroundColor, color: fontColor }}
//     >
//       {mostrarBordes && (
//         <>
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-gray-500" />
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-transparent" />
//         </>
//       )}

//       {/* Imagen opcional */}
//       {imagen && (
//         <div
//           className={`w-full md:w-1/2 p-4 flex items-center justify-center order-1 ${
//             isLeft ? "md:order-1" : "md:order-2"
//           }`}
//         >
//           <img
//             src={imagen}
//             alt={titulo}
//             className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       )}

//       {/* Texto */}
//       <div
//         className={`w-full md:w-1/2 p-8 text-center md:text-left order-2 ${
//           isLeft ? "md:order-2" : "md:order-1"
//         }`}
//       >
//         <h2 className="text-4xl font-bold mb-6">{titulo}</h2>
//         {parrafos.map((parrafo, index) => (
//           <div key={index} className="mb-4">
//             {parrafo.subtitulo && (
//               <h3 className={`text-2xl font-semibold mb-2 ${textoSize}`}>
//                 {parrafo.subtitulo}
//               </h3>
//             )}
//             <p className={`${textoSize} leading-relaxed`}>{parrafo.texto}</p>
//           </div>
//         ))}

//         {/* Mostrar logros si existen */}
//         {logros.length > 0 && (
//           <ul className="list-disc pl-5 mt-4">
//             {logros.map((logro, index) => (
//               <li key={index} className="mb-2">
//                 {logro}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Botón */}
//         {mostrarBoton && (
//           <a
//             href={botonLink}
//             className="inline-block px-6 py-2 mt-4 text-white font-bold rounded hover:bg-blue-700 transition"
//             style={{
//               backgroundColor: backgroundColorSecond, // Fondo en hexadecimal
//               color: fontColor, // Color de fuente en hexadecimal
//             }}
//           >
//             {botonTexto}
//           </a>
//         )}
//       </div>
//     </section>
//   );
// };
// export default TextoConImagen;
"use client";

import React from "react";

interface TextoConImagenProps {
  id?: string; // URL de la imagen (opcional)
  titulo: string; // Título principal
  parrafos: { texto: string; subtitulo?: string }[]; // Array de párrafos con opción de subtítulos
  imagen?: string; // URL de la imagen (opcional)
  backgroundColor?: string; // Color de fondo
  backgroundColorSecond?: string;
  fontColor?: string; // Color de texto
  mostrarBordes?: boolean; // Si muestra bordes o sombreados en los extremos
  mostrarBoton?: boolean; // Controla si se muestra el botón
  botonTexto?: string; // Texto del botón
  botonLink?: string; // Enlace del botón
  textoSize?: string; // Tamaño del texto (p.ej. "text-sm", "text-lg")
  posicion?: "left" | "right" | "center"; // Posición de la imagen
  logros?: string[]; // Lista opcional de logros
}

const TextoConImagen: React.FC<TextoConImagenProps> = ({
  id,
  titulo,
  parrafos,
  imagen,
  backgroundColor = "#F7FAFC",
  backgroundColorSecond = "#F7FAFC",
  fontColor = "#333",
  mostrarBordes = true,
  mostrarBoton = false,
  botonTexto = "Conócenos",
  botonLink = "#",
  textoSize = "text-base",
  posicion = "left",
  logros = [],
}) => {
  const isLeft = posicion === "left";
  const isCenter = posicion === "center";

  return (
    <section
      id={id}
      className={`relative min-h-screen flex ${
        isCenter ? "flex-col items-center" : "flex-col md:flex-row items-center justify-center"
      } p-8`}
      style={{ backgroundColor, color: fontColor }}
    >
      {mostrarBordes && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-gray-500" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-transparent" />
        </>
      )}

      {isCenter?

<h2 className={`text-4xl font-bold mb-6 text-center ${isCenter ? "" : "md:text-left"}`}>
        {titulo}
      </h2>
      :<></>
      }

      {/* Imagen opcional */}
      {imagen && (
        <div
          className={`${
            isCenter
              ? "w-full max-w-md mb-6"
              : `w-full md:w-1/2 p-4 flex items-center justify-center ${isCenter?"":
                  isLeft ? "md:order-1" : "md:order-2"
                }`
          }`}
        >
          <img
            src={imagen}
            alt={titulo}
            className={`w-full h-auto object-cover rounded-lg shadow-lg ${
              isCenter ? "mx-auto" : ""
            }`}
          />
        </div>
      )}

      {/* Texto */}
      <div
        className={`${
          isCenter
            ? "mx-[6vw]"
            : `w-full md:w-1/2 p-8 text-center md:text-left ${
                isLeft ? "md:order-2" : "md:order-1"
              }`
        }`}
      >
        {!isCenter?<h2 className="text-4xl font-bold mb-6">{titulo}</h2>:<></>}

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

        {/* Mostrar logros si existen */}
        {logros.length > 0 && (
          <ul className="list-disc pl-5 mt-4">
            {logros.map((logro, index) => (
              <li key={index} className="mb-2">
                {logro}
              </li>
            ))}
          </ul>
        )}

        {/* Botón */}
        {mostrarBoton && (
          <a
            href={botonLink}
            className="inline-block px-6 py-2 mt-4 text-white font-bold rounded hover:bg-blue-700 transition"
            style={{
              backgroundColor: backgroundColorSecond,
              color: fontColor,
            }}
          >
            {botonTexto}
          </a>
        )}
      </div>
    </section>
  );
};

export default TextoConImagen;
