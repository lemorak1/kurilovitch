"use client"; // Esto asegura que el componente se renderice del lado del cliente

import React, { useState } from "react";
import styles from "./style/Header.module.css";

const NAV_LINKS = [
  { title: "Curso", dropdown: ["English", "Spanish", "French"] },
  { title: "Contactos" },
  { title: "Blog" },
  { title: "Quiénes Somos", dropdown: ["Opción 1", "Opción 2", "Opción 3"] },
];

const Header = () => {
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div
        className={`${styles.container} flex justify-between items-center p-4`}
      >
        <div className="flex items-center">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=🌍"
            alt="Kourilovitch Institute Logo"
            className={`${styles.logoImg} h-10`}
          />
        </div>

        {/* Botón para menú móvil */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
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
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú de navegación */}

        <nav
          className={` hidden md:block lg:flex lg:justify-right xl:justify-evenly `}
        >
          {NAV_LINKS.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    className={`${styles.button} text-white`}
                    onClick={() => toggleDropdown(index)}
                  >
                    {link.title}
                  </button>
                  {showDropdown === index && (
                    <div
                      className={`${styles.dropdownContainer} absolute mt-2 bg-white shadow-md`}
                    >
                      {link.dropdown.map((item, i) => (
                        <a key={i} href="#" className={styles.dropdownLink}>
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href="#" className="text-white px-4 py-2 hover:bg-muted">
                  {link.title}
                </a>
              )}
            </div>
          ))}
          <div className={styles.authButtons}>
            <button
              className={`${styles.authButton} px-4 py-2 bg-primary text-white rounded hover:bg-muted`}
            >
              Login
            </button>
            <button
              className={`${styles.authButton} px-4 py-2 bg-primary text-white rounded hover:bg-muted`}
            >
              Sign In
            </button>
          </div>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="lg:hidden absolute left-0 right-0 bg-white mt-2 p-4 shadow-lg">
          <div className={` flex justify-center items-center space-x-4`}>
            <button
              // className={`${styles.authButton} px-4 py-2 bg-primary text-white rounded hover:bg-muted`}
              className={`${styles.authButton} w-32 px-4 py-2 bg-blue-500 text-white rounded`}
            >
              Login
            </button>
            <button
              className={`${styles.authButton} w-32 px-4 py-2 bg-blue-500 text-white rounded`}
            >
              Sign In
            </button>
          </div>
          {NAV_LINKS.map((link, index) => (
            <div key={index}>
              {link.dropdown ? (
                <>
                  <button
                    className="text-black py-2"
                    onClick={() => toggleDropdown(index)}
                  >
                    {link.title}
                  </button>
                  {showDropdown === index && (
                    <div className="mt-2 bg-white shadow-md">
                      {link.dropdown.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block px-4 py-2 text-black hover:bg-muted"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href="#"
                  className="block text-black py-2 px-4 hover:bg-muted"
                >
                  {link.title}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
