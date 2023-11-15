import React, { useState, useEffect } from "react";
import { Fade } from "@mui/material";
import { ImageContainer, Img } from "./styled-components.jsx";

const IMAGE =
  "https://avraxwindows.com/wp-content/uploads/2023/08/5.jpg";

const HotelImage = () => {
  return (
    <ImageContainer>
      <Img src={IMAGE} alt="Imagen" />
    </ImageContainer>
  );
};

export default HotelImage;
