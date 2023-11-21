import React from "react";
import { Typography, Button as ButtonM } from "./styled-component.jsx";

const Button = ({ text, type, disabled, isRotate, mode, className }) => {
  return (
    <ButtonM
      variant="contained"
      type={type}
      disabled={disabled}
      className={className}
      background={mode === "NIGHT" ? "primary.light" : "primary"}
    >
      <Typography
        variant="button"
        color={mode === "NIGHT" ? "primary" : "primary.light"}
        isrotate={isRotate}
      >
        {text}
      </Typography>
    </ButtonM>
  );
};

export default Button;
