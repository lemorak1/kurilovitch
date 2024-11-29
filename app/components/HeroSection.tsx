"use client";

import React from "react";

interface HeroPageProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const HeroPage: React.FC<HeroPageProps> = ({
  title,
  description,
  buttonText,
  buttonLink = "#",
  gradientFrom = "blue-500",
  gradientTo = "blue-300",
}) => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-${gradientFrom} to-${gradientTo} text-white px-8 text-center`}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-2xl max-w-3xl mb-8">{description}</p>
      {buttonText && (
        <a
          href={buttonLink}
          className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition"
        >
          {buttonText}
        </a>
      )}
    </section>
  );
};

export default HeroPage;
