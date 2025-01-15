"use client";

import React, { useEffect, useState } from "react";

interface ImagenVideoProps {
  backgroundUrl: string; // URL de la imagen o video
  isVideo?: boolean; // Define si es video o imagen
  text?: string; // Texto superpuesto
  backgroundColor?: string; // Color de fondo (por si el cliente quiere)
  fitMode?: "cover" | "contain" | "fill" | "none" | "scale-down"; // Define cómo se ajusta el contenido
}

const ImagenVideo: React.FC<ImagenVideoProps> = ({
  backgroundUrl,
  isVideo = false,
  text = "",
  backgroundColor = "transparent",
  fitMode = "cover", // Por defecto, usa 'cover'
}) => {
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const updateMenuHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setMenuHeight(header.offsetHeight);
      }
    };

    updateMenuHeight();
    window.addEventListener("resize", updateMenuHeight);
    return () => {
      window.removeEventListener("resize", updateMenuHeight);
    };
  }, []);

  return (
    <section
      className="relative flex items-center justify-center text-center"
      style={{
        position: "relative",
        width: "100vw",
        backgroundColor,
        height: `calc(100vh - ${menuHeight}px)`,
        overflow: "hidden",
      }}
    >
      {isVideo ? (
        <video
          src={backgroundUrl}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full"
          
          style={{
            width: "100%",
            height: "100%",
            objectFit: fitMode,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></video>
      ) : (
        <img
          src={backgroundUrl}
          alt="Scrolling Page Background"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: fitMode, // Utiliza la prop para definir el ajuste del contenido
          }}
        />
      )}
      <div className="relative z-10 text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">
          {text}
        </h1>
      </div>
    </section>
  );
};

export default ImagenVideo;

//--------------------------------------------------------------

// "use client";

// import React, { useEffect, useState } from "react";

// interface ImagenVideoProps {
//   backgroundUrl: string; // URL de la imagen o video
//   isVideo?: boolean; // Define si es video o imagen
//   text?: string; // Texto superpuesto
//   backgroundColor?: string; // Color de fondo (por si el cliente quiere)
//   fitMode?: "cover" | "contain" | "fill" | "none" | "scale-down"; // Define cómo se ajusta el contenido
// }

// const ImagenVideo: React.FC<ImagenVideoProps> = ({
//   backgroundUrl,
//   isVideo = false,
//   text = "",
//   backgroundColor = "transparent",
//   fitMode = "cover", // Por defecto, usa 'cover'
// }) => {
//   const [menuHeight, setMenuHeight] = useState(0);

//   useEffect(() => {
//     const updateMenuHeight = () => {
//       const header = document.querySelector("header");
//       if (header) {
//         setMenuHeight(header.offsetHeight);
//       }
//     };

//     updateMenuHeight();
//     window.addEventListener("resize", updateMenuHeight);
//     return () => {
//       window.removeEventListener("resize", updateMenuHeight);
//     };
//   }, []);

//   return (
//     <section
//       className="relative flex items-center justify-center text-center"
//       style={{
//         backgroundColor,
//         height: `calc(100vh - ${menuHeight}px)`,
//       }}
//     >
//       {isVideo ? (
//         <video
//           src={backgroundUrl}
//           autoPlay
//           loop
//           muted
//           className="absolute inset-0 w-full h-full"
//           style={{
//             objectFit: fitMode, // Utiliza la prop para definir el ajuste del contenido
//           }}
//         ></video>
//       ) : (
//         <img
//           src={backgroundUrl}
//           alt="Scrolling Page Background"
//           className="absolute inset-0 w-full h-full"
//           style={{
//             objectFit: fitMode, // Utiliza la prop para definir el ajuste del contenido
//           }}
//         />
//       )}
//       <div className="relative z-10 text-white max-w-2xl px-4">
//         <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">
//           {text}
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default ImagenVideo;
