import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";
import { ContentContainerOld, Content } from "./styled-components.jsx";

import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import { useIntersect } from "../../../../hooks/useIntersect.js";
import residential from '../../../../assets/expertise page-residential.jpg';
import comercial from '../../../../assets/expertise page-Commercial.jpg';
import glassPartitions from '../../../../assets/expertise page-Partition.jpg';

import Card from "../Card";

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
      imageSrc: residential,
      title: "Residential",
      onClick: () => handleCardClick("residential"),
    },
    {
      imageSrc:
       comercial,
      title: "Comercial",
      onClick: () => handleCardClick("comercial"),
    },
    {
      imageSrc: glassPartitions,
      title: "Glass partitions",
      onClick: () => handleCardClick("glass-partitions"),
    },
  ];

  return (
    <ContentContainerOld ref={intersectRef}>
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
    </ContentContainerOld>
  );
};

export default Expertise;
