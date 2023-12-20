import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Container } from "./styled-components.jsx";
import promotionDate from "../../../../../promotionDate.json";

const HurricaneSeason = () => {
  const endDate = new Date(promotionDate.end);

  const [diff, setDiff] = useState(endDate - new Date()); // in ms
  const [days, setDays] = useState(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const [minutes, setMinutes] = useState(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [seconds, setSeconds] = useState(
    Math.floor((diff % (1000 * 60)) / 1000)
  );

  useEffect(() => {
    const currentDate = new Date();
    const timer = setInterval(() => {
      if (diff > 0) {
        let newDiff = endDate - currentDate;
        setDiff(newDiff);
        setDays(Math.floor(newDiff / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((newDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((newDiff % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((newDiff % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [diff]);

  return (
    <>
      {promotionDate?.end && diff > 0 && (
        <Container>
          <Typography variant="menu" color="secondary.main">
            Hurricane Season start:
          </Typography>
          <Typography variant="menu" color="secondary.main">
            {days}:{hours}:{minutes}:{seconds}
          </Typography>
        </Container>
      )}
    </>
  );
};

export default HurricaneSeason;
