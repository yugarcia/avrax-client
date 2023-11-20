import React from "react";
import { Typography } from "@mui/material";
import { Title, TitleText, Container, Content } from "./styled-components.jsx";
import TextContent from "./TextContent.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import Cities from "./Cities.jsx";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const OurServiceSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container>
      <Title isDesktop={isDesktop} isMobile={!isTablet}>
        <Typography
          variant="largeTitle"
          color="primary.light"
          textAlign={"right"}
        >
          Our Services
        </Typography>
        <TitleText
          variant="title"
          color="secondary"
          textAlign={"right"}
          lineHeight={"normal"}
        >
          We Provide Superior Installation Services
        </TitleText>
      </Title>
      <Content isDesktop={isDesktop}>
        <TextContent
          imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/3.jpg"
          title="Residential"
          paragraph="Impact windows and doors are not only convenient and meticulously manufactured, but are tested to back their durability."
          cta="READ MORE"
        />
        <TextContent
          imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/5.jpg"
          title="Comercial"
          paragraph="Impact windows and doors offer unmatched energy efficiency! Avoiding the increase in temperature in summer and keeping the heat inside your office or home in the winter months."
          cta="READ MORE"
        />
        <TextContent
          imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/4.jpg"
          title="Satisfaction"
          paragraph="Our main goal is the customer satisfaction with the final product. Get comfortable at your home!!!"
          cta="READ MORE"
        />
      </Content>
      <Cities />
    </Container>
  );
};

export default OurServiceSection;
