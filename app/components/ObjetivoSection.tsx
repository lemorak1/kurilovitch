"use client";

import React from "react";

interface Objective {
  title: string;
  description: string;
  icon?: string; // URL o clase de ícono opcional
}

interface ObjectivesProps {
  title: string;
  objectives: Objective[];
  backgroundColor?: string;
  fontColor?: string;
}

const Objectives: React.FC<ObjectivesProps> = ({
  title,
  objectives,
  backgroundColor = "#f9f9f9",
  fontColor = "#333",
}) => {
  return (
    <section
      className="py-16 px-8"
      style={{
        backgroundColor,
        color: fontColor,
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
          >
            {objective.icon && (
              <div className="mb-4">
                <img
                  src={objective.icon}
                  alt={`${objective.title} icon`}
                  className="w-12 h-12 mx-auto"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-4">{objective.title}</h3>
            <p>{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
