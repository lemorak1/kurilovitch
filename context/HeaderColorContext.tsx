// /context/HeaderColorContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

interface HeaderColorContextProps {
  headerColors: { backgroundColor?: string; fontColor?: string };
  setHeaderColors: (colors: {
    backgroundColor?: string;
    fontColor?: string;
  }) => void;
}

const defaultColors = {
  backgroundColor: "transparent", // Color de fondo predeterminado
  fontColor: "#ffffff", // Color de texto predeterminado
};

const HeaderColorContext = createContext<HeaderColorContextProps | undefined>(
  undefined
);

export const HeaderColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headerColors, setHeaderColors] = useState(defaultColors);

  return (
    <HeaderColorContext.Provider value={{ headerColors, setHeaderColors }}>
      {children}
    </HeaderColorContext.Provider>
  );
};

export const useHeaderColorContext = () => {
  const context = useContext(HeaderColorContext);
  if (!context) {
    throw new Error(
      "useHeaderColorContext must be used within a HeaderColorProvider"
    );
  }
  return context;
};
