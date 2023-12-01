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

      <Container>
        <Map />
      </Container>

      <Footer />
    </>
  );
};

export default ContactPage;
