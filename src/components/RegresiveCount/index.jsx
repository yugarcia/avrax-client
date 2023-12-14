import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Container, CircularTimeContent } from "./styled-components.jsx";
import CircularTime from "./CircularTime.jsx";
import promotionDate from "../../promotionDate.json";

const RegresiveCount = () => {
  const currentDate = new Date();
  const date = new Date(promotionDate.end);
  const initDate = new Date(promotionDate.initial);

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

  const circularTime = [
    { type: days, percentage: daysPercentage, title: "Days" },
    { type: hours, percentage: hoursPercentage, title: "Hours" },
    { type: minutes, percentage: minutesPercentage, title: "Minutes" },
  ];
  return (
    <>
      {promotionDate?.end && diff > 0 && (
        <Container>
          <Typography variant="title" color="secondary.main">
          Hurricane Season is coming
          </Typography>
          <CircularTimeContent>
            {circularTime.map((item, index) => (
              <CircularTime
                key={index}
                value={item.type}
                title={item.title}
                percentage={item.percentage}
              />
            ))}
          </CircularTimeContent>
        </Container>
      )}
    </>
  );
};

export default RegresiveCount;
