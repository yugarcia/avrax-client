/* eslint-disable consistent-return, no-shadow */
import { useState, useEffect } from "react";

export const useIncrement = (visible, max, increment) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (visible) {
      const intervalId = setInterval(() => {
        setValue((prevNumber) =>
          prevNumber < max ? prevNumber + increment : prevNumber
        );
      }, 20); // Ajusta la velocidad de incremento según tus preferencias

      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }
  }, [visible, max, increment]);

  return value;
};
