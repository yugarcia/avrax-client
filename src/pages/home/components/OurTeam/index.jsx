import React from "react";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import {
  Title,
  TitleText,
  Container,
  ImgContent,
} from "./styled-components.jsx";
import TextTitle from "../../../../components/Title/index.jsx";
import Img from "./Img.jsx";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const OurTeamSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container isdesktop={isDesktop}>
      <Title isdesktop={isDesktop} isMobile={!isTablet}>
        <TextTitle
          color="primary"
          textAlign={"right"}
        >
          Our
        </TextTitle>
        <TitleText
          variant="title"
          color="secondary.dark"
          textAlign={"right"}
          lineHeight={"normal"}
        >
          Team
        </TitleText>
      </Title>
      <ImgContent isdesktop={isDesktop}>
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
