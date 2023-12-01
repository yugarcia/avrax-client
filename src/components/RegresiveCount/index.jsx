import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Container, CircularTimeContent } from "./styled-components.jsx";
import CircularTime from "./CircularTime.jsx";

const DATE = "2023-12-29T00:00:00.000Z";
const INIT_DATE = "2023-11-15T00:00:00.000Z";

const RegresiveCount = ({ isMobile }) => {
  const currentDate = new Date();
  const date = new Date(DATE);
  const initDate = new Date(INIT_DATE);

  const [daysPercentage, setDaysPercentage] = useState(0);
  const [hoursPercentage, setHoursPercentage] = useState(0);
  const [minutesPercentage, setMinutesPercentage] = useState(0);

  const diff = date - currentDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const totalDiff = date - initDate;
  const daysTotal = Math.floor(totalDiff / (1000 * 60 * 60 * 24));

  useEffect(() => {
    setTimeout(() => {
      setDaysPercentage(100 - (days * 100) / daysTotal);
      setHoursPercentage(100 - (hours * 100) / 24);
      setMinutesPercentage(100 - (minutes * 100) / 60);
    }, 1000);
  }, [days, hours, minutes, daysTotal]);

  return (
    <Container isMobile={isMobile}>
      <Typography variant="title" color="primary.light">
        Comming Soon
      </Typography>
      <CircularTimeContent>
        <CircularTime value={days} title="Days" percentage={daysPercentage} />
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
