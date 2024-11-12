"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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

  const handleFechaChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setFormData({ ...formData, fecha: value });
    } else if (Array.isArray(value) && value.length > 0) {
      setFormData({ ...formData, fecha: value[0] }); // Ajusta según tus necesidades
    } else if (value === null) {
      // Manejar el caso de valor null si es necesario
      setFormData({ ...formData, fecha: new Date() }); // O el valor por defecto que prefieras
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
      // Aquí prepararás la lógica para enviar a una base de datos
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: colorFondo }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Agenda una clase gratuita en {curso}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... otros campos del formulario ... */}

          {/* Calendario */}
          <div className="mt-4">
            <Calendar onChange={handleFechaChange} value={formData.fecha} />
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
