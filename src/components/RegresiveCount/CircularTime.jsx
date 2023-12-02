import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import { TimeContainer, TimeBox } from "./styled-components.jsx";

const ANIMATION_SPEED = 20;
const SPEED = 1;

const CircularTime = ({ title, value, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress >= percentage) return;
      setProgress((prevProgress) => prevProgress + SPEED);
    }, ANIMATION_SPEED);

    return () => {
      clearInterval(timer);
    };
  }, [percentage, progress]);

  return (
    <TimeContainer>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          sx={{
            color: "primary",
          }}
          size={65}
          value={100}
        />
        <CircularProgress
          variant="determinate"
          size={65}
          sx={{
            color: "primary.light",
            position: "absolute",
            left: 0,
          }}
          value={progress}
        />

        <TimeBox>
          <Typography variant="title" color="secondary">
            {value}
          </Typography>
        </TimeBox>
      </Box>
      <Typography variant="menu" color="secondary">
        {title}
      </Typography>
    </TimeContainer>
  );
};

export default CircularTime;
