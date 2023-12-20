import React from "react";
import { Typography, Button as ButtonM } from "./styled-component.jsx";

const Button = ({
  text,
  type,
  disabled,
  isRotate,
  mode,
  className,
  sx,
  onClick,
}) => {
  return (
    <ButtonM
      variant="contained"
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
      background={mode === "NIGHT" ? "primary.light" : "primary"}
      sx={sx}
    >
      <Typography
        variant="button"
        color={mode === "NIGHT" ? "primary" : "secondary.main"}
        isrotate={isRotate}
      >
        {text}
      </Typography>
    </ButtonM>
  );
};

export default Button;
