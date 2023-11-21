/* eslint-disable consistent-return, no-shadow */
import { useState, useEffect } from "react";

export const useMediawidth= (width) => {
  const [isDesktop, setisDesktop] = useState(window.innerWidth > width);

  useEffect(() => {
    const handleResize = () => {
      // Ajusta la lógica según tus necesidades
      setisDesktop(window.innerWidth > width);
    };

    // Suscribe el manejador de eventos al evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el manejador de eventos al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]); // El segundo argumento [] asegura que useEffect solo se ejecute al montar y desmontar el componente

  return isDesktop;
};
