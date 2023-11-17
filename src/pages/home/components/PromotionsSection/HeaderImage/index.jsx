import React, { useState, useEffect } from "react";
import { Fade } from "@mui/material";
import { ImageContainer, Img } from "./styled-components.jsx";

const IMAGES = [
  "https://avraxwindows.com/wp-content/uploads/2023/09/24.jpg",
  "https://comodecorarmicuarto.com/wp-content/uploads/2021/03/casas-con-ventanas-grandes-de-dos-pisos.jpg.webp",
  "https://www.visitacasas.com/wp-content/uploads/2018/01/3.jpg.webp",
  "https://www.estudio3arquitectos.com/wp-content/uploads/casavillaviciosa1.jpg",
  // Agrega más URLs de imágenes según sea necesario
];

const HeaderImage = () => {
  const [fadeType, setFadeType] = useState(true);
  const [imagePIndex, setImagePIndex] = useState(0);
  const [imageIIndex, setImageIIndex] = useState(1);

  const actualImage = IMAGES[imagePIndex];
  const nextImage = IMAGES[imageIIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageToggle();
    }, 5000);

    return () => clearInterval(interval);
  }, [fadeType]);

  const handleImageToggle = () => {
    handleFadeChange();
    handleImageChange();
  };

  const handleImageChange = () => {
    setTimeout(() => {
      if (fadeType)
        setImagePIndex((prevIndex) =>
          prevIndex + 2 >= IMAGES.length ? 0 : prevIndex + 2
        );
      else
        setImageIIndex((prevIndex) =>
          prevIndex + 2 >= IMAGES.length ? 1 : prevIndex + 2
        );
    }, 2000);
  };

  const handleFadeChange = () => {
    setFadeType((prevType) => !prevType);
  };

  return (
    <>
      <ImageContainer>
        <Fade in={fadeType} timeout={1000}>
          <Img src={actualImage} alt="Imagen" />
        </Fade>
        <Fade in={!fadeType} timeout={1000}>
          <Img src={nextImage} alt="Imagen" />
        </Fade>
      </ImageContainer>
    </>
  );
};

export default HeaderImage;
