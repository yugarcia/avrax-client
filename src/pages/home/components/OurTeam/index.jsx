import React from "react";
import { Typography } from "@mui/material";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import {
  Title,
  TitleText,
  Container,
  ImgContent,
} from "./styled-components.jsx";
import Img from "./Img.jsx";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const OurTeamSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container isdesktop={isDesktop}>
      <Title isdesktop={isDesktop} isMobile={!isTablet}>
        <Typography variant="largeTitle" color="primary" textAlign={"right"}>
          Our
        </Typography>
        <TitleText
          variant="title"
          color="secondary.dark"
          textAlign={"right"}
          lineHeight={"normal"}
        >
          Team
        </TitleText>
      </Title>
      <ImgContent isdesktop={isDesktop} isMobile={!isTablet}>
        <Img
          src="https://avraxwindows.com/wp-content/uploads/2023/08/cesar.jpg"
          name="Cesar Espinosa"
          charge="President"
        />
        <Img
          src="https://avraxwindows.com/wp-content/uploads/2023/08/leynier.jpg"
          name="Leynier Diaz"
          charge="Project Manager"
        />
      </ImgContent>
    </Container>
  );
};

export default OurTeamSection;
