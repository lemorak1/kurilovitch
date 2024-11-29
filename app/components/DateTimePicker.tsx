"use client";

import React, { useState } from "react";

interface DateTimePickerProps {
  selected: Date | null; // La fecha seleccionada
  onChange: (date: Date | null) => void; // Función para manejar el cambio de fecha
  dateFormat?: string; // Formato de fecha (por defecto "yyyy-MM-dd")
  className?: string; // Clases adicionales para estilos
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selected,
  onChange,
  dateFormat = "yyyy-MM-dd",
  className = "",
}) => {
  // Formatear la fecha en función del formato dado
  const formatDate = (date: Date, format: string): string => {
    const options: Intl.DateTimeFormatOptions = {};
    if (format.includes("dd")) options.day = "2-digit";
    if (format.includes("MM")) options.month = "2-digit";
    if (format.includes("yyyy")) options.year = "numeric";
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? new Date(e.target.value) : null;
    onChange(newDate);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Input de Fecha */}
      <div className="flex flex-col">
        <label
          htmlFor="date-picker"
          className="text-sm text-gray-600 mb-1 font-medium"
        >
          Fecha:
        </label>
        <input
          type="date"
          id="date-picker"
          value={
            selected
              ? formatDate(selected, dateFormat)
              : "" // Valor por defecto si no hay fecha seleccionada
          }
          onChange={handleDateChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
