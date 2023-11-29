import styled from "@mui/styled-engine";
import { Typography } from "@mui/material";

export const Paragraph = styled(Typography)`
  width: 100%;
  &:first-letter {
    font-size: 53px;
    color: ${({ theme, initialcolor }) => {
      const initialColors = initialcolor?.split(".");
      if (initialColors)
        return theme.palette[initialColors[0]][initialColors[1] || "main"];
    }};
    font-weight: bold;
    line-height: 0.8;
  }
`;

export const Image = styled("img")`
  max-width: ${({ isMobile }) => (isMobile ? "100%" : "500px")};
  max-height: ${({ isMobile }) => (isMobile ? "100%" : "500px")};
  float: left;
  margin: 0 40px 10px 0;
`;
