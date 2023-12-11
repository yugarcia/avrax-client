import React from "react";
import PagesHeader from "../../components/PagesHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import {
  Title,
  TitleText,
  Container,
  BanefitContainer,
} from "./styled-components.jsx";
import { Typography } from "@mui/material";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import Services from "./components/Services/index.jsx";
import BackgroundLines from "../../components/BackgroundLines/index.jsx";
import Benefits from "../../components/Benefits/index.jsx";
import backgroundImage from "../../assets/background_vector.png";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const OurServicePage = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const variant = isTablet ? "extraLargeTitle" : "largeTitle";

  return (
    <>
      <PagesHeader title="Our Service" />
      <BackgroundLines />
      <Container isdesktop={isDesktop} isMobile={!isTablet}>
        <TitleText
          variant="title"
          color="secondary.dark"
          textAlign={"right"}
          lineHeight={"normal"}
        >
          Our Services
        </TitleText>
        <Title isdesktop={isDesktop} isMobile={!isTablet}>
          <Typography variant={variant} color="primary" textAlign={"right"}>
            Trust the Experience
          </Typography>
        </Title>
      </Container>
      <Services isTablet={isTablet} />

      <BanefitContainer
        height={isDesktop ? 1500 : isTablet ? 1000 : 600}
        backgroundImage={backgroundImage}
      >
        <Benefits />
      </BanefitContainer>
      <Footer />
    </>
  );
};

export default OurServicePage;
