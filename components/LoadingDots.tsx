// LoadingDots.js
import React, { useEffect, useState } from 'react';
import '../styles/LoadingDots.css'; // Archivo de estilo para Tailwind CSS

const LoadingDots = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots % 3) + 1);
    }, 500); // Cambia el tiempo según tus preferencias

    return () => clearInterval(interval);
  }, []);

  const getDots = () => {
    return Array.from({ length: dots }, (_, index) => (
      <span key={index} className="dot">
        .
      </span>
    ));
  };

  return <div className="loading-dots">{getDots()}</div>;
};

export default LoadingDots;