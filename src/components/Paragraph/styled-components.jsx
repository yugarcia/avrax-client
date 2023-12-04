import styled from "@mui/styled-engine";
import { Typography } from "@mui/material";

export const Paragraph = styled(Typography)`
  width: 100%;
  text-align: justify;

  &:first-letter {
    font-size: 32px;
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

  display: block; /* Removes bottom space under the image */
`;

export const ImgContainer = styled("div")`
  position: relative;
  width: fit-content;
  float: left;
  margin: 0 40px 10px 0;
`;

// Styled component for the frame
export const Frame = styled("div")`
  position: absolute;
  top: -15px;
  left: -15px;
  right: 15px;
  bottom: 15px;

  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  pointer-events: none; /* Makes sure clicks go through to the image */
`;
