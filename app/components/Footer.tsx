// "use client";

// import React from "react";

// interface FooterProps {
//   backgroundColor?: string; // Color de fondo opcional
//   fontColor?: string; // Color de texto opcional
// }

// const Footer: React.FC<FooterProps> = ({
//   backgroundColor = "#2E4372", // Color por defecto
//   fontColor = "#FFFFFF", // Texto blanco por defecto
// }) => {
//   return (
//     <footer
//       className="w-full py-8 px-4 text-center"
//       style={{ backgroundColor, color: fontColor }}
//     >
//       {/* Título */}
//       <h2 className="text-2xl font-bold mb-6">CONTACTOS</h2>

//       {/* Contenido principal */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-8">
//         {/* Mapa */}
//         <div className="w-full md:w-1/2">
//           {/* <iframe
//             title="Mapa de ubicación"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799145456!2d-74.2598678!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzgnMzcnMzQuOCJOIDc0wrAxNicwNS45Ilc!5e0!3m2!1ses!2sec!4v1617182909481!5m2!1ses!2sec"
//             width="100%"
//             height="250"
//             style={{ border: 0 }}
//             allowFullScreen={false}
//             loading="lazy"
//           ></iframe> */}
//         </div>

//         {/* Teléfono y Dirección */}
//         <div className="w-full md:w-1/3 text-left">
//           <h3 className="text-lg font-bold">Teléfonos</h3>
//           <p className="mb-4">0987654321 - 02134563</p>
//           <h3 className="text-lg font-bold">Dirección</h3>
//           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</p>
//         </div>
//       </div>

//       {/* Derechos reservados */}
//       <div className="mt-8">
//         <p className="text-sm">&copy; 2024 Kourilovitch - Todos los derechos reservados</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";
import Link from 'next/link';
import { useHeaderColorContext } from "../../context/HeaderColorContext";


const Footer = () => {
  const { headerColors } = useHeaderColorContext();
  const backgroundColor = headerColors.backgroundColor || "transparent";
  const fontColor = headerColors.fontColor || "#000000";

  return (
    <footer className="bg-white border-t border-gray-200 p-6"   style={{
      backgroundColor: backgroundColor, // Fondo en hexadecimal
      color: fontColor, // Color de fuente en hexadecimal
  }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-4">Contactos</h4>
          <p className="text-sm text-gray-600">Correo: <a href="mailto:info@kourilovitch.com" className="text-blue-600 hover:underline">info@kourilovitch.com</a></p>
          <p className="text-sm text-gray-600">Teléfono: +593 123 456 789</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Números de Teléfono</h4>
          <p className="text-sm text-gray-600">Principal: +593 987 654 321</p>
          <p className="text-sm text-gray-600">Secundario: +593 123 456 789</p>
          <h4 className="text-lg font-semibold mt-4">Dirección</h4>
          <p className="text-sm text-gray-600">Av. Principal y Calle Secundaria, Cuenca, Ecuador</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Mapa</h4>
          <div className="w-full h-48 border border-gray-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8784410032486!2d-79.007896!3d-2.900128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd19b2d3c60341%3A0xcdd3b0dd0f50ad69!2sCuenca%2C%20Ecuador!5e0!3m2!1sen!2s!4v1618987448097!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-4">
        <Link href="#" className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">F</Link>
        <Link href="#" className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">T</Link>
        <Link href="#" className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">I</Link>
        <Link href="#" className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">L</Link>
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; 2024 Kourilovitch - Todos los Derechos Reservados
      </div>
    </footer>
  );
};


export default Footer;

