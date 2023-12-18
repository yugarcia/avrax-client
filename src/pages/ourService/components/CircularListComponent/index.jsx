import React, { useEffect, useState } from "react";
import {
  Container,
  DonutContainer,
  Hole,
  Segment,
  Icon,
  Logo,
} from "./styled-components.jsx";
import { Typography } from "@mui/material";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const CORDENATE = [
  { top: 50, left: 75 }, 
  { top: 90, left: 38 }, 
  { top: 52, left: 1 }, 
  { top: 7, left: 10 }, 
  { top: 7, left: 70 }, 
];

// Componente que representa cada segmento del donut
const DonutSegment = ({ angle, icon, percentage, size }) => (
  <Segment angle={angle} percentage={percentage} size={size}>
    <Icon startAngle={angle}>{icon}</Icon>
  </Segment>
);

const DonutChartComponent = ({ segments }) => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const [cordenate, setCordenate] = useState(CORDENATE);

  const size = isDesktop ? 400 : isTablet ? 300 : 200;
  const angle = 360 / segments.length;

  const percentage = (() => {
    switch (segments.length) {
      case 5:
        return 160;

      case 7:
        return 780;

      default:
        return 100;
    }
  })();

  useEffect(() => {
    if (isDesktop) {
      setCordenate(CORDENATE);
    } else if (isTablet) {
      setCordenate([
        { top: 63, left: 64 },
        { top: 87, left: 30 },
        { top: 60, left: 0 },
        { top: 18, left: 0 },
        { top: 12, left: 65 },
      ]);
    } else {
      setCordenate([
        { top: 0, left: 0 },
        { top: 65, left: 0 },
        { top: 80, left: 0 },
        { top: 28, left: 0 },
        { top: 13, left: 0 },
      ]);
    }
  }, [isDesktop, isTablet]);

  return (
    <Container
      isDesktop={isDesktop}
      height={isDesktop ? 700 : isTablet ? 700 : 1000}
    >
      <DonutContainer>
        {segments.map((seg, index) => (
          <>
            <Hole size={size}>
              <div
                style={{
                  backgroundColor: "rgb(34, 66, 135,0.3)",
                  borderRadius: "50%",
                  width: `${size / 3}px`,
                  height: `${size / 3}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Logo
                  src="https://avraxwindows.com/wp-content/uploads/2023/07/cropped-logo-1-204x149.png"
                  isdesktop="false"
                  size={isDesktop? 60:40}
                />
              </div>
            </Hole>
            <DonutSegment
              key={index}
              angle={angle * index}
              icon={seg.icon}
              percentage={percentage}
              size={size}
            />
          </>
        ))}
      </DonutContainer>
      {segments.map((seg, index) => (
        <div
          style={{
            position: "absolute",
            top: `${cordenate[index].top}%`,
            left: `${cordenate[index].left}%`,
            width: isTablet ? "300px" : "100%",
            gap: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="menu" color="primary">
            {seg.title}
          </Typography>
          <Typography
            variant="cardContentMobile"
            sx={{ textAlign: "justify", width: "100%", display: "flex" }}
            color="secondary.light"
          >
            {seg.paragraph}
          </Typography>
        </div>
      ))}
    </Container>
  );
};

export default DonutChartComponent;
