"use client";

import React, { useEffect, useRef } from "react";

interface ScrollPageProps {
  children: React.ReactNode;
}

const ScrollPage: React.FC<ScrollPageProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("animate-fadeInUp");
        }
      },
      { threshold: 0.5 } // Activa la animación cuando la sección está 50% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="scroll-page">
      {children}
    </div>
  );
};

export default ScrollPage;
