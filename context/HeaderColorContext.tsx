// /context/HeaderColorContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Definimos el tipo que permite colores opcionales
interface HeaderColors {
  backgroundColor?: string;
  fontColor?: string;
}

interface HeaderColorContextProps {
  headerColors: HeaderColors;
  setHeaderColors: Dispatch<SetStateAction<HeaderColors>>;
}

// Colores predeterminados
const defaultColors: HeaderColors = {
  backgroundColor: "#64aaf1",
  fontColor: "#000000",
};

const HeaderColorContext = createContext<HeaderColorContextProps | undefined>(
  undefined
);

export const HeaderColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headerColors, setHeaderColors] = useState<HeaderColors>(defaultColors);

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
