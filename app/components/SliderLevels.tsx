"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface Level {
  level: string;
  description: string;
  image: string;
  links: { text: string; href: string }[];
}

interface SliderLevelsProps {
  title: string;
  subtitle: string;
  levels: Level[];
  backgroundColor?: string; // Prop para color de fondo
  fontColor?: string; // Prop para color de fuente
  cardBackgroundColor?: string; // Prop para color de fondo de las tarjetas
}

const SliderLevels: React.FC<SliderLevelsProps> = ({
  title,
  subtitle,
  levels,
  backgroundColor = "#ffffff", // Fondo por defecto
  fontColor = "#333333", // Fuente por defecto
  cardBackgroundColor, // Fondo por defecto de las tarjetas
}) => {
  const computedCardBackgroundColor =
    cardBackgroundColor || adjustBrightness(backgroundColor, -10);

  return (
    <section
      className="py-16"
      style={{ backgroundColor, color: fontColor }}
    >
      {/* Título y subtítulo */}
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold" style={{ color: fontColor }}>
          {title}
        </h2>
        <p className="text-lg" style={{ color: fontColor }}>
          {subtitle}
        </p>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{
          padding: "20px 0", // Espaciado superior e inferior
        }}
      >
        {levels.map((level, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
          >
            <div
              className="p-6 rounded-lg transition-transform hover:scale-105 shadow-lg"
              style={{
                backgroundColor: computedCardBackgroundColor,
                color: fontColor,
                boxShadow:
                  "0px 8px 20px rgba(0, 0, 0, 0.2), 0px 4px 10px rgba(0, 0, 0, 0.15)", // Sombra prominente
                borderRadius: "15px", // Bordes redondeados adicionales
                maxWidth: "100%", // Ajustar tamaño máximo de las tarjetas
              }}
            >
              <img
                src={level.image}
                alt={level.level}
                className="rounded-md mb-4 w-full h-48 object-contain"
                style={{
                  borderRadius: "10px",
                }}
              />
              <h3 className="text-xl font-semibold mb-2">{level.level}</h3>
              <p className="mb-4">{level.description}</p>
              <div className="flex flex-col gap-2">
                {level.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="font-medium transition hover:underline"
                    style={{
                      color: fontColor === "#ffffff" ? "#007bff" : fontColor,
                    }}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

// Helper para ajustar brillo
const adjustBrightness = (hex: string, percent: number): string => {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.min(255, Math.max(0, ((num >> 16) + percent) | 0));
  const g = Math.min(255, Math.max(0, (((num >> 8) & 0x00ff) + percent) | 0));
  const b = Math.min(255, Math.max(0, ((num & 0x0000ff) + percent) | 0));
  return `rgb(${r},${g},${b})`;
};

export default SliderLevels;
