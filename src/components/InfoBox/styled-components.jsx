import styled from "@mui/styled-engine";
import { Typography } from "@mui/material";

export const TextContent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  width: 100%;
`;

export const Paragraph = styled(Typography)`
  width: 100%;
  &:first-letter {
    font-size: 32px;
    color: ${({ theme, color }) => {
      const colors = color?.split(".");
      if (colors) return theme.palette[colors[0]][colors[1] || "main"];
    }};
    font-weight: bold;
    line-height: 0.8;
  }
`;

export const Img = styled("img")`
  width: 100%;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
