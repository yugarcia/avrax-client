import React from "react";

import { Grid } from "@mui/material";
import { Title, TitleText, Container } from "./styled-components.jsx";
import TextTitle from "../../../../components/Title/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import Card from "./Card/index.jsx";
import residentia from "../../../../assets/our services-640-640(1).jpg";
import comercial from "../../../../assets/our services-640-640(2).jpg";
import glass from "../../../../assets/our services-640-640(1)-GLASS PARTITION.jpg";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const OurServiceSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  const handleCardClick = (path) => {
    window.location.href = `/expertise/${path}`;
  };

  const Services = [
    {
      imageSrc: residentia,
      title: "Residential",
      paragraph:
        "Impact windows and doors are not only convenient and meticulously manufactured, but are tested to back their durability.",
      onClick: () => handleCardClick("residential"),
    },
    {
      imageSrc: comercial,
      title: "Comercial",
      paragraph:
        "Impact windows and doors offer unmatched energy efficiency! Avoiding the increase in temperature in summer and keeping the heat inside your office or home in the winter months.",
      onClick: () => handleCardClick("comercial"),
      reverse: true,
    },
    {
      imageSrc: glass,
      title: "Glass partitions",
      paragraph:
        "Our main goal is the customer satisfaction with the final product. Get comfortable at your home!!!",
      onClick: () => handleCardClick("glass-partitions"),
    },
  ];

  return (
    <>
      <Container isdesktop={isDesktop}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item xs={3} sm={1} md={1}>
            <Title isdesktop={isDesktop} isMobile={!isTablet}>
              <TextTitle color="primary.light" textAlign={"right"}>
                Our Services
              </TextTitle>
              <TitleText
                variant="title"
                color="secondary"
                textAlign={"right"}
                lineHeight={"normal"}
              >
                We Provide Superior Installation Services
              </TitleText>
            </Title>
          </Grid>
          {Services.map((service, index) => (
            <Card
              imageSrc={service.imageSrc}
              title={service.title}
              paragraph={service.paragraph}
              cta="READ MORE"
              color="primary.light"
              onClick={service.onClick}
              reverse={service.reverse ?? false}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default OurServiceSection;
