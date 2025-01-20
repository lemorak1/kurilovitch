// "use client";

// import React from "react";

// interface HeroPageProps {
//   title: string;
//   description: string;
//   buttonText?: string;
//   buttonLink?: string;
//   gradientFrom?: string;
//   gradientTo?: string;
// }

// const HeroPage: React.FC<HeroPageProps> = ({
//   title,
//   description,
//   buttonText,
//   buttonLink = "#",
//   gradientFrom = "blue-500",
//   gradientTo = "blue-300",
// }) => {
//   return (
//     <section
//       className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-${gradientFrom} to-${gradientTo} text-white px-8 text-center`}
//     >
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
//       <p className="text-lg md:text-2xl max-w-3xl mb-8">{description}</p>
//       {buttonText && (
//         <a
//           href={buttonLink}
//           className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition"
//         >
//           {buttonText}
//         </a>
//       )}
//     </section>
//   );
// };

// export default HeroPage;
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  videoUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ videoUrl }) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col items-center justify-end text-center pb-12">
        {/* Botones */}
        <div className="mt-8 space-x-4 flex flex-wrap justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
            onClick={() =>
              document
                .getElementById("courses-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explorar Cursos
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
            onClick={() =>
              document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Agenda una Clase Gratis
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
