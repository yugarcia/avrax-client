import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Container, CircularTimeContent } from "./styled-components.jsx";
import CircularTime from "./CircularTime.jsx";
import promotionDate from "../../promotionDate.json";

const RegresiveCount = () => {
  const [endDate, setEndDate] = useState(new Date(promotionDate.end));
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

  const initDate = new Date(promotionDate.initial);

  const [daysPercentage, setDaysPercentage] = useState(0);
  const [hoursPercentage, setHoursPercentage] = useState(0);
  const [minutesPercentage, setMinutesPercentage] = useState(0);
  const [secondsPercentage, setSecondsPercentage] = useState(0);

  const totalDiff = endDate - initDate;
  const daysTotal = Math.floor(totalDiff / (1000 * 60 * 60 * 24));

  useEffect(() => {
    setTimeout(() => {
      setDaysPercentage(100 - (days * 100) / daysTotal);
      setHoursPercentage(100 - (hours * 100) / 24);
      setMinutesPercentage(100 - (minutes * 100) / 60);
      setSecondsPercentage(100 - (seconds * 100) / 60);
    }, 1000);
  }, [days, hours, minutes, daysTotal]);

  useEffect(() => {
    const currentDate = new Date();
    const timer = setInterval(() => {
      if (diff > 0) {
        let newDiff = endDate - currentDate;
        setDiff(newDiff);
        let newDays = Math.floor(newDiff / (1000 * 60 * 60 * 24));
        setDays(newDays);
        let newHours = Math.floor(
          (newDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(newHours);
        let newMinutes = Math.floor((newDiff % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(newMinutes);
        let newSeconds = Math.floor((newDiff % (1000 * 60)) / 1000);
        setSeconds(newSeconds);

        setDaysPercentage(100 - (newDays * 100) / daysTotal);
        setHoursPercentage(100 - (newHours * 100) / 24);
        setMinutesPercentage(100 - (newMinutes * 100) / 60);
        setSecondsPercentage(100 - (newSeconds * 100) / 60);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [diff]);

  const circularTime = [
    { type: days, percentage: daysPercentage, title: "Days" },
    { type: hours, percentage: hoursPercentage, title: "Hours" },
    { type: minutes, percentage: minutesPercentage, title: "Minutes" },
    { type: seconds, percentage: secondsPercentage, title: "Seconds" },
  ];
  return (
    <>
      {promotionDate?.end && diff > 0 && (
        <Container>
          <Typography variant="title" color="secondary.main">
          Hurricane Season Starts in:
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
