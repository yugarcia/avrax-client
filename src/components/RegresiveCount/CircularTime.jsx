import React from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import { TimeContainer } from "./styled-components.jsx";

const CircularTime = ({ title, value, percentage }) => {
  return (
    <TimeContainer>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
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
          sx={{
            color: "primary.light",
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
          }}
          size={65}
          value={percentage}
        />

        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="title" color="primary.light">
            {value}
          </Typography>
        </Box>
      </Box>
      <Typography variant="menu" color="primary.light">
        {title}
      </Typography>
    </TimeContainer>
  );
};

export default CircularTime;
