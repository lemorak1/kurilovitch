"use client";

import React from "react";

const QuienesSomos: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center p-8 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenidos a Kourilovitch Institute</h1>
        <p className="text-lg md:text-xl max-w-3xl mb-6">
          Transformamos el aprendizaje de idiomas en experiencias culturales y educativas de excelencia.
        </p>
        <a
          href="#introduccion"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition"
        >
          Conócenos más
        </a>
      </section>

      {/* Introducción */}
      <section
        id="introduccion"
        className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-8 gap-8 bg-white"
      >
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/learning-global.png" // Coloca una ruta a la imagen representativa
            alt="Aprendizaje global"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
            Creemos en el poder transformador del aprendizaje
          </h2>
          <p className="text-gray-700 leading-relaxed">
            En Kourilovitch Institute, creemos en el poder transformador del aprendizaje de idiomas para abrir puertas, crear conexiones y construir un entendimiento global. 
            Con sede en Cuenca y alcance internacional a través de nuestras clases en línea, ofrecemos programas de excelencia en ruso, alemán, italiano y español.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="w-full py-16 px-8 bg-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Nuestra Misión y Visión</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Misión */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 text-center hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Misión</h3>
            <p className="text-gray-700">
              Fomentar el aprendizaje de idiomas de manera integral y accesible, promoviendo la comprensión intercultural y la excelencia académica.
            </p>
          </div>
          {/* Visión */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 text-center hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Visión</h3>
            <p className="text-gray-700">
              Ser un referente en la enseñanza de idiomas en Latinoamérica, destacándonos por nuestra calidad educativa y compromiso con la diversidad cultural.
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="w-full py-16 px-8 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Nuestros Objetivos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Excelencia Académica",
              text: "Diseñar programas de aprendizaje adaptados a las necesidades de cada estudiante.",
            },
            {
              title: "Inmersión Cultural",
              text: "Brindar experiencias educativas que acerquen a los estudiantes a las tradiciones y valores culturales.",
            },
            {
              title: "Idiomas Poco Comunes",
              text: "Permitir a los estudiantes acceder a idiomas menos convencionales con profesores especializados.",
            },
            {
              title: "Desarrollo Personal y Profesional",
              text: "Preparar a los estudiantes con habilidades lingüísticas para abrir nuevas oportunidades.",
            },
          ].map((objective, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-4">{objective.title}</h3>
              <p className="text-gray-700">{objective.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
