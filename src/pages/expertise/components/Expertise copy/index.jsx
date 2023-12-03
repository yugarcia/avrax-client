import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";
import { ContentContainer, Content } from "./styled-components.jsx";

import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import { useIntersect } from "../../../../hooks/useIntersect.js";
import Card from "../Card copy";

const WIDTH = 1076;

const Expertise = () => {
  const isDesktop = useMediawidth(WIDTH);
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsMounted(true);
    }
  }, [entry]);

  const handleCardClick = (path) => {
    window.location.href = `/expertise/${path}`;
  };

  const expertises = [
    {
      imageSrc:
        "https://lithoreact.themezaa.com/assets/img/webp/architecture-img-10.webp",
      title: "Residential",
      onClick: () => handleCardClick("residential"),
    },
    {
      imageSrc:
        "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/07/casas-de-dos-pisos-3.jpg",
      title: "Comercial",
      onClick: () => handleCardClick("comercial"),
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/a1/51/91/a15191e94586ca45956000f9b41277ac.jpg",
      title: "Satisfaction",
      onClick: () => handleCardClick("glass-partitions"),
    },
  ];

  return (
    <ContentContainer ref={intersectRef}>
      <Content isdesktop={isDesktop}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {expertises.map((expertise, index) => (
            <Card
              imageSrc={expertise.imageSrc}
              title={expertise.title}
              onClick={expertise.onClick}
              index={index}
              isMounted={isMounted}
            />
          ))}
        </Grid>
      </Content>
    </ContentContainer>
  );
};

export default Expertise;
