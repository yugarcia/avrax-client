import React, { useState, useEffect } from "react";
import { Fade } from "@mui/material";
import { ImageContainer, Img } from "./styled-components.jsx";
import backgroundImage1 from "../../../../../assets/header/Main page-fixed.jpg";
import backgroundImage2 from "../../../../../assets/header/Main page-fixed2.jpg";
import backgroundImage3 from "../../../../../assets/header/Main page-fixed3.jpg";
import backgroundImage4 from "../../../../../assets/header/Main page-fixed5.jpg";
import backgroundImage5 from "../../../../../assets/header/Main page-fixed6.jpg";

const IMAGES = [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3,
  backgroundImage4,
  backgroundImage5,
  // Agrega más URLs de imágenes según sea necesario
];

const HeaderImage = () => {
  const [fadeType, setFadeType] = useState(true);
  const [imagePIndex, setImagePIndex] = useState(0);
  const [imageIIndex, setImageIIndex] = useState(1);

  const actualImage = IMAGES[imagePIndex];
  const nextImage = IMAGES[imageIIndex];

  useEffect(() => {
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

    const interval = setInterval(() => {
      handleImageToggle();
    }, 5000);

    return () => clearInterval(interval);
  }, [fadeType]);

  return (
    <ImageContainer>
      <Fade in={fadeType} timeout={1000}>
        <Img src={actualImage} alt="Imagen" />
      </Fade>
      <Fade in={!fadeType} timeout={1000}>
        <Img src={nextImage} alt="Imagen" />
      </Fade>
    </ImageContainer>
  );
};

export default HeaderImage;
