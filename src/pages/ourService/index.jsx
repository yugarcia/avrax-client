import React from "react";
import PagesHeader from "../../components/PagesHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { Title, TitleText, Container } from "./styled-components.jsx";
import { Typography } from "@mui/material";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import Services from "./components/Services/index.jsx";
import BackgroundLines from "../../components/BackgroundLines/index.jsx";

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
      <Footer />
    </>
  );
};

export default OurServicePage;
