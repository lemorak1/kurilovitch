"use client"

import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "";
// import DatePicker from "./DatePicker.tsx";
import DateTimePicker from "./DateTimePicker";
interface FormularioAgendarClaseProps {
  colorFondo: string;
  curso: string;
}

const FormularioAgendarClase: React.FC<FormularioAgendarClaseProps> = ({
  colorFondo,
  curso,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    edad: "",
    fecha: new Date(),
    hora: "",
    prefijo: "+1", // Prefijo predeterminado (USA)
  });

  const [errores, setErrores] = useState({
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    edad: false,
  });

  const prefijosTelefono = [
    { pais: "Estados Unidos", codigo: "+1" },
    { pais: "Ecuador", codigo: "+593" },
    { pais: "México", codigo: "+52" },
    { pais: "España", codigo: "+34" },
    // Agrega más países según sea necesario
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePrefijoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, prefijo: e.target.value });
  };

  const handleFechaChange = (date: Date | null) => {
    if (date) {
      setFormData({ ...formData, fecha: date });
    }
  };

  const validarCampos = () => {
    const nuevosErrores = {
      nombre: !formData.nombre,
      apellido: !formData.apellido,
      correo: !formData.correo,
      telefono: !formData.telefono,
      edad: !formData.edad,
    };
    setErrores(nuevosErrores);
    return !Object.values(nuevosErrores).includes(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validarCampos()) {
      console.log("Formulario enviado:", { ...formData, curso });
      // Aquí prepararás la lógica para enviar a una base de datosjhvjfjyf
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: colorFondo }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">
           {curso}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campos de entrada */}
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className={`w-full border p-2 rounded text-black ${
                  errores.nombre ? "border-red-500" : ""
                }`}
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                className={`w-full border p-2 rounded text-black ${
                  errores.apellido ? "border-red-500" : ""
                }`}
                value={formData.apellido}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <input
                type="email"
                name="correo"
                placeholder="Correo"
                className={`w-full border p-2 rounded text-black ${
                  errores.correo ? "border-red-500" : ""
                }`}
                value={formData.correo}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 flex items-center">
              <select
                name="prefijo"
                value={formData.prefijo}
                onChange={handlePrefijoChange}
                className="border p-2 rounded-l w-1/3 text-black"
              >
                {prefijosTelefono.map((prefijo) => (
                  <option key={prefijo.codigo} value={prefijo.codigo}>
                    {prefijo.codigo}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                className={`w-full border p-2 rounded-r text-black ${
                  errores.telefono ? "border-red-500" : ""
                }`}
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <input
                type="number"
                name="edad"
                placeholder="Edad"
                className={`w-full border p-2 rounded text-black ${
                  errores.edad ? "border-red-500" : ""
                }`}
                value={formData.edad}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="time"
                name="hora"
                className="w-full border p-2 rounded text-black"
                value={formData.hora}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* DatePicker */}
          <div className="mt-4">
            <label className="block mb-2">Fecha</label>
            <DateTimePicker
              selected={formData.fecha}
              onChange={handleFechaChange}
              dateFormat="dd/MM/yyyy"
              className="w-full border p-2 rounded text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-4"
          >
            Agendar Clase
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormularioAgendarClase;
