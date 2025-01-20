"use client";

import React from "react";

interface WhyChooseUsSectionProps {
  sections: { title: string; description: string }[];
  backgroundColor?: string;
  backgroundColorSecond?: string;
  textColor?: string;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  sections,
  backgroundColor = "gray",
  backgroundColorSecond="white",
  textColor = "black",
}) => {
  return (
    <section className="py-16"  style={{
        backgroundColor: backgroundColor, // Fondo en hexadecimal
        color: textColor, // Color de fuente en hexadecimal
      }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              style={{
                backgroundColor: backgroundColorSecond, // Fondo en hexadecimal
                color: textColor, // Color de fuente en hexadecimal
              }}
            >
              <h3 className="text-2xl font-semibold">{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
