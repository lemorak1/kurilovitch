// /components/Header.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useHeaderColorContext } from "../../context/HeaderColorContext";
import styles from "./style/Header.module.css";

const NAV_LINKS = [
  {
    title: "Curso",
    dropdown: [
     // { label: "Frances", path: "/courses/Frances" },
       // { label: "Ingles", path: "/courses/Ingles" },
    { label: "Español", path: "/courses/Espanol" },
      { label: "Aleman", path: "/courses/Aleman" },
      { label: "Italiano", path: "/courses/Italiano" },
      { label: "Ruso", path: "/courses/Ruso" },
    ],
  },
  {
    title: "Contactos",
    action: () => {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    },
  },
  { title: "Blog", path: "/blog" },
  { title: "Quiénes Somos", path: "/about" },
];

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { headerColors } = useHeaderColorContext();
  const backgroundColor = headerColors.backgroundColor || "transparent";
  const fontColor = headerColors.fontColor || "#000000";
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDropdown = (index: number) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowDropdown(null); // Cierra cualquier dropdown abierto
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowDropdown(null); // Cierra cualquier dropdown abierto también
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si el menú móvil está abierto, no hacemos nada aquí
      if (menuOpen) return;

      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        setShowDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleClick = () => {
    window.open('https://srv763830.hstgr.cloud/login/index.php', '_blank')
  }

  return (
    <header
      className={styles.header}
      style={{ backgroundColor, color: fontColor }}
    >
      <div className="flex items-center justify-between p-4 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/imagenes/Logo_Horizontal.webp"
              alt="Logo"
              className={`${styles.logoImg} h-15 cursor-pointer`}
            />
          </Link>
        </div>

        {/* Botón de menú hamburguesa */}
        <button
          onClick={toggleMenu}
          className="lg:hidden md:hidden sm:flex text-white ml-auto"
        >
          {/* Icono de menú */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav className="hidden md:flex items-center flex-1 justify-center">
          {NAV_LINKS.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    className={`${styles.button} text-white px-4`}
                    onClick={() => toggleDropdown(index)}
                    style={{ color: fontColor }}
                  >
                    {link.title}
                  </button>
                  {showDropdown === index && (
                    <div
                      ref={(el) => {
                        dropdownRefs.current[index] = el;
                      }}
                      className={`${styles.dropdownContainer} absolute bg-white shadow-md rounded mt-2`}
                    >
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={i}
                          href={item.path || "#"}
                          className={`block px-4 py-2 hover:bg-gray-200 ${styles.dropdownItem}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : link.action ? (
                <button
                  onClick={link.action}
                  className={`${styles.button} text-white px-4 hover:underline`}
                  style={{ color: fontColor }}
                >
                  {link.title}
                </button>
              ) : (
                <Link
                  href={link.path || "#"}
                  className={`${styles.button} text-white px-4 hover:underline`}
                  style={{ color: fontColor }}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Botones Login y Sign Up */}
        <div className="hidden md:flex space-x-4">
          <button className="px-8 py-2 bg-blue-500 text-white rounded" onClick={()=>handleClick()}>
            Login
          </button>
          {/* <button className="px-4 py-2 bg-green-500 text-white rounded">
            Sign Up
          </button> */}
        </div>
      </div>

      {/* Menú móvil transparente */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col p-4"
          onClick={closeMenu} // Cierra el menú al hacer clic fuera
        >
          {/* Contenido del menú */}
          <div
            className="bg-white p-6 rounded-md shadow-lg w-3/4 mx-auto"
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del menú cierre el menú
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeMenu}
              className="self-end text-black mb-4 focus:outline-none"
            >
              {/* Icono de cerrar */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {NAV_LINKS.map((link, index) => (
              <div key={index} className="mb-4">
                {link.dropdown ? (
                  <>
                    <button
                      className="text-black py-2 w-full text-left font-bold"
                      onClick={() => toggleDropdown(index)}
                    >
                      {link.title}
                    </button>
                    {showDropdown === index && (
                      <div className="ml-4 mt-2">
                        {link.dropdown.map((item, i) => (
                          <Link
                            key={i}
                            href={item.path || "#"}
                            className="block px-4 py-2 hover:bg-gray-200 text-black"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : link.action ? (
                  <button
                    onClick={link.action}
                    className="text-black py-2 w-full text-left font-bold"
                  >
                    {link.title}
                  </button>
                ) : (
                  <Link
                    href={link.path || "#"}
                    className="text-black py-2 w-full text-left font-bold"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 flex space-x-4">
              <button className="w-full px-8 py-2 bg-blue-500 text-white rounded" onClick={()=>handleClick()}>
                Login
              </button>
              {/* <button className="w-full px-4 py-2 bg-green-500 text-white rounded">
                Sign Up
              </button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
