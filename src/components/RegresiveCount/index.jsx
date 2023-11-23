import React from "react";
import { Typography } from "@mui/material";
import { Container, CircularTimeContent } from "./styled-components.jsx";
import CircularTime from "./CircularTime.jsx";

const DATE = "2023-12-29T00:00:00.000Z";

const RegresiveCount = ({ isMobile }) => {
  const currentDate = new Date();
  const date = new Date(DATE);
  const diff = date - currentDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const hoursPercentage = 100 - (hours * 100) / 24;
  const minutesPercentage = 100 - (minutes * 100) / 60;

  return (
    <Container isMobile={isMobile}>
      <Typography variant="title" color="primary.light">
        Comming Soon
      </Typography>
      <CircularTimeContent>
        <CircularTime value={days} title="Days" percentage={100} />
        <CircularTime
          value={hours}
          title="Hours"
          percentage={hoursPercentage}
        />
        <CircularTime
          value={minutes}
          title="Minutes"
          percentage={minutesPercentage}
        />
      </CircularTimeContent>
    </Container>
  );
};

export default RegresiveCount;
