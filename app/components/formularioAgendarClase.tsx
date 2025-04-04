// "use client";

// import React, { useState } from "react";

// interface FormularioAgendarClaseProps {
//   colorFondo: string;
//   curso: string;
// }

// const FormularioAgendarClase: React.FC<FormularioAgendarClaseProps> = ({
//   colorFondo,
//   curso,
// }) => {
//   const [formData, setFormData] = useState({
//     nombre: "",
//     apellido: "",
//     correo: "",
//     telefono: "",
//     prefijo: "+593", // Prefijo predeterminado
//   });

//   const [errores, setErrores] = useState({
//     nombre: false,
//     apellido: false,
//     correo: false,
//     telefono: false,
//   });

//   const prefijosTelefono = [
//     { pais: "Afganistán", codigo: "+93" },
//   { pais: "Albania", codigo: "+355" },
//   { pais: "Alemania", codigo: "+49" },
//   { pais: "Andorra", codigo: "+376" },
//   { pais: "Angola", codigo: "+244" },
//   { pais: "Antártida", codigo: "+672" },
//   { pais: "Arabia Saudita", codigo: "+966" },
//   { pais: "Argentina", codigo: "+54" },
//   { pais: "Armenia", codigo: "+374" },
//   { pais: "Australia", codigo: "+61" },
//   { pais: "Austria", codigo: "+43" },
//   { pais: "Azerbaiyán", codigo: "+994" },
//   { pais: "Bahamas", codigo: "+1-242" },
//   { pais: "Bangladés", codigo: "+880" },
//   { pais: "Baréin", codigo: "+973" },
//   { pais: "Bélgica", codigo: "+32" },
//   { pais: "Belice", codigo: "+501" },
//   { pais: "Bolivia", codigo: "+591" },
//   { pais: "Brasil", codigo: "+55" },
//   { pais: "Canadá", codigo: "+1" },
//   { pais: "Chile", codigo: "+56" },
//   { pais: "China", codigo: "+86" },
//   { pais: "Colombia", codigo: "+57" },
//   { pais: "Corea del Sur", codigo: "+82" },
//   { pais: "Costa Rica", codigo: "+506" },
//   { pais: "Cuba", codigo: "+53" },
//   { pais: "Dinamarca", codigo: "+45" },
//   { pais: "Ecuador", codigo: "+593" },
//   { pais: "Egipto", codigo: "+20" },
//   { pais: "El Salvador", codigo: "+503" },
//   { pais: "Emiratos Árabes Unidos", codigo: "+971" },
//   { pais: "España", codigo: "+34" },
//   { pais: "Estados Unidos", codigo: "+1" },
//   { pais: "Estonia", codigo: "+372" },
//   { pais: "Filipinas", codigo: "+63" },
//   { pais: "Finlandia", codigo: "+358" },
//   { pais: "Francia", codigo: "+33" },
//   { pais: "Grecia", codigo: "+30" },
//   { pais: "Guatemala", codigo: "+502" },
//   { pais: "Honduras", codigo: "+504" },
//   { pais: "Hungría", codigo: "+36" },
//   { pais: "India", codigo: "+91" },
//   { pais: "Indonesia", codigo: "+62" },
//   { pais: "Irán", codigo: "+98" },
//   { pais: "Irlanda", codigo: "+353" },
//   { pais: "Israel", codigo: "+972" },
//   { pais: "Italia", codigo: "+39" },
//   { pais: "Jamaica", codigo: "+1-876" },
//   { pais: "Japón", codigo: "+81" },
//   { pais: "Kuwait", codigo: "+965" },
//   { pais: "México", codigo: "+52" },
//   { pais: "Mónaco", codigo: "+377" },
//   { pais: "Nicaragua", codigo: "+505" },
//   { pais: "Noruega", codigo: "+47" },
//   { pais: "Nueva Zelanda", codigo: "+64" },
//   { pais: "Pakistán", codigo: "+92" },
//   { pais: "Panamá", codigo: "+507" },
//   { pais: "Paraguay", codigo: "+595" },
//   { pais: "Perú", codigo: "+51" },
//   { pais: "Portugal", codigo: "+351" },
//   { pais: "Puerto Rico", codigo: "+1-787" },
//   { pais: "Reino Unido", codigo: "+44" },
//   { pais: "República Dominicana", codigo: "+1-809" },
//   { pais: "Rusia", codigo: "+7" },
//   { pais: "Sudáfrica", codigo: "+27" },
//   { pais: "Suecia", codigo: "+46" },
//   { pais: "Suiza", codigo: "+41" },
//   { pais: "Tailandia", codigo: "+66" },
//   { pais: "Turquía", codigo: "+90" },
//   { pais: "Uruguay", codigo: "+598" },
//   { pais: "Venezuela", codigo: "+58" },
//   { pais: "Vietnam", codigo: "+84" },
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePrefijoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFormData({ ...formData, prefijo: e.target.value });
//   };

//   const validarCampos = () => {
//     const nuevosErrores = {
//       nombre: !formData.nombre,
//       apellido: !formData.apellido,
//       correo: !formData.correo,
//       telefono: !formData.telefono,
//     };
//     setErrores(nuevosErrores);
//     return !Object.values(nuevosErrores).includes(true);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validarCampos()) {
//       // Construimos la URL de Calendly con los datos prellenados
//       const calendlyUrl = `https://calendly.com/tu_usuario/clase-gratuita?name=${encodeURIComponent(
//         formData.nombre + " " + formData.apellido
//       )}&email=${encodeURIComponent(formData.correo)}&a1=${encodeURIComponent(
//         formData.prefijo + formData.telefono
//       )}&a2=${encodeURIComponent(curso)}`;

//       // Redirigir a Calendly
//       window.open(calendlyUrl, "_blank");
//     }
//   };

//   return (
//     <section
//       className="min-h-screen flex items-center justify-center px-4"
//       style={{ backgroundColor: colorFondo }}
//     >
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
//         <h2 className="text-3xl font-bold text-center mb-6 text-black">
//           Agendar Clase - {curso}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Nombre y Apellido */}
//           <div className="flex flex-wrap -mx-2">
//             <div className="w-full md:w-1/2 px-2">
//               <input
//                 type="text"
//                 name="nombre"
//                 placeholder="Nombre"
//                 className={`w-full border p-2 rounded text-black ${
//                   errores.nombre ? "border-red-500" : ""
//                 }`}
//                 value={formData.nombre}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2">
//               <input
//                 type="text"
//                 name="apellido"
//                 placeholder="Apellido"
//                 className={`w-full border p-2 rounded text-black ${
//                   errores.apellido ? "border-red-500" : ""
//                 }`}
//                 value={formData.apellido}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           {/* Correo */}
//           <div className="w-full px-2">
//             <input
//               type="email"
//               name="correo"
//               placeholder="Correo"
//               className={`w-full border p-2 rounded text-black ${
//                 errores.correo ? "border-red-500" : ""
//               }`}
//               value={formData.correo}
//               onChange={handleInputChange}
//             />
//           </div>

//           {/* Teléfono */}
//           <div className="flex flex-wrap -mx-2">
//             <div className="w-full md:w-1/2 px-2 flex items-center">
//               <select
//                 name="prefijo"
//                 value={formData.prefijo}
//                 onChange={handlePrefijoChange}
//                 className="border p-2 rounded-l w-1/3 text-black"
//               >
//                 {prefijosTelefono.map((prefijo) => (
//                   <option key={prefijo.codigo} value={prefijo.codigo}>
//                     {prefijo.codigo}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="tel"
//                 name="telefono"
//                 placeholder="Teléfono"
//                 className={`w-full border p-2 rounded-r text-black ${
//                   errores.telefono ? "border-red-500" : ""
//                 }`}
//                 value={formData.telefono}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           {/* Botón de enviar */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-4"
//           >
//             Elegir Fecha y Hora
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default FormularioAgendarClase;
"use client";

import React, { useState,useEffect } from "react";

interface FormularioAgendarClaseProps {
  colorFondo: string;
  curso: string;
}

const FormularioAgendarClase: React.FC<FormularioAgendarClaseProps> = ({
  colorFondo,
  curso,
}) => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
     className="relative h-screen w-full flex flex-col items-center justify-end"
    style={{ backgroundColor: colorFondo }}
  >
    <div
      className="calendly-inline-widget w-full max-w-[900px]"
      data-url="https://calendly.com/kourilovitch_institute?background_color=ffffff&primary_color=63adf2"
      style={{ minHeight: "90vh" }}
    ></div>
    </section>
  );
};


export default FormularioAgendarClase;
