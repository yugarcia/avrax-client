import styled, { css } from "@mui/styled-engine";
import { Typography as TypographyM, Button as ButtonM } from "@mui/material";

export const Typography = styled(TypographyM)`
  ${({ isRotate }) =>
    isRotate &&
    css`
      transform: translateY(-50%) rotate(-90deg);
      white-space: nowrap;
    `}
`;

export const Button = styled(ButtonM)`
  background-color: ${({ theme, background }) => {
    const backgroundColors = background?.split(".");
    if (backgroundColors)
      return theme.palette[backgroundColors[0]][backgroundColors[1] || "main"];
  }};
`;
