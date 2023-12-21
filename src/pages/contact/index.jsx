import React from "react";
import PagesHeader from "../../components/PagesHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { Title, TitleText, Container } from "./styled-components.jsx";
import { Typography } from "@mui/material";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import ContactForm from "../../components/ContactForm/index.jsx";
import CardContainer from "./components/CardContainer/index.jsx";
import Map from "./components/Map/index.jsx";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const ADDRESS1 = "8350 NW 52nd Terrace Suite 301";
const FULL_ADDRESS1 = "8350 NW 52nd Terrace, Doral, FL 33166, EE. UU.";
const COORDENATE1 = { lat: 25.819487, lng: -80.332749 };

const ADDRESS2 = "809 NE 7th Terr Cape Coral";
const FULL_ADDRESS2 = "805 NE 7th Terrace, Cape Coral, FL 33909, EE. UU.";
const COORDENATE2 = { lat: 26.66634929186132, lng: -81.95674444813756 };

const ContactPage = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const variant = isTablet ? "extraLargeTitle" : "largeTitle";

  return (
    <>
      <PagesHeader title="Contact" />
      <Container isdesktop={isDesktop} isMobile={!isTablet}>
        <div>
          <Title isdesktop={isDesktop} isMobile={!isTablet}>
            <Typography variant={variant} color="primary" textAlign={"right"}>
              Get In Touch
            </Typography>
          </Title>

          <TitleText
            variant="title"
            color="secondary.dark"
            textAlign={"right"}
            lineHeight={"normal"}
          >
            Any Question? Write And Send Us
          </TitleText>
        </div>
        <ContactForm isDesktop={isDesktop} width="450px" />
      </Container>

      <CardContainer />

      <Container isdesktop={isDesktop} isMobile={!isTablet}>
        <Map
          address={ADDRESS1}
          fullAdress={FULL_ADDRESS1}
          coordenate={COORDENATE1}
        />
        <Map
          address={ADDRESS2}
          fullAdress={FULL_ADDRESS2}
          coordenate={COORDENATE2}
        />
      </Container>

      <Footer />
    </>
  );
};

export default ContactPage;
