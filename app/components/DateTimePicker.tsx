"use client"
import React from "react";

const DateTimePicker = ({
  selected,
  onChange,
  dateFormat = "yyyy-MM-dd",
  className = "",
}) => {
  // Formatear la fecha para el input `type="date"`
  const formatDate = (date, format) => {
    const options = {};
    if (format.includes("dd")) options.day = "2-digit";
    if (format.includes("MM")) options.month = "2-digit";
    if (format.includes("yyyy")) options.year = "numeric";
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    onChange && onChange(newDate);
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
          value={selected ? formatDate(selected, dateFormat) : ""}
          onChange={handleDateChange}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black`}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
