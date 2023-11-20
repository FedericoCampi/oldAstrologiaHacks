import React, { useEffect, useState } from 'react';
import '../styles/textAnimation.css';

const TextAnimation = () => {

    const textos = [
        'Astro guía al alcance de todos',
        'La luna revela tus miedos más profundos',
        'Donde está Saturno están tus limitaciones',
        'Conócete a ti mismo',
        'La astrología es un lenguaje, si lo entiendes el cielo te habla'
      ];
    
      const [indiceTexto, setIndiceTexto] = useState(0);
      const [animar, setAnimar] = useState(false);
    
      useEffect(() => {
        const intervalo = setInterval(() => {
          setAnimar(true);
    
          setTimeout(() => {
            setIndiceTexto((prevIndice) => (prevIndice + 1) % textos.length);
            setAnimar(false);
          }, 500); // Este tiempo debe ser igual o mayor a la duración de la transición
        }, 7000);
    
        return () => clearInterval(intervalo);
      }, [textos]);
    
      return (
        <div className="texto-cambiante text-center text-white px-[20px] text-[35px] sm:px-[60px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px] sm:text-[50px] sm:text-[70px] 2xl:text-[80px]">
          <div className={`rotar-texto ${animar ? 'animar' : ''} opacity-100 transition hover:opacity-75 `}>
            <span>{textos[indiceTexto]}</span>
          </div>
        </div>
      );
    };

export default TextAnimation;