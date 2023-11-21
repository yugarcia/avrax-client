import styled, { css } from "@mui/styled-engine";
import { Card as CardM, CardContent as CardContentM } from "@mui/material";

export const Container = styled("div")`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 50px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    filter: grayscale(100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://avraxwindows.com/wp-content/uploads/2023/11/1.jpeg)
      center/cover no-repeat;
    z-index: -1;
    opacity: 0.1;
  }
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-top: 50px;
`;

export const CardContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;


  ${({ isdesktop }) =>
    !isdesktop &&
    css`
      flex-direction: column;
    `}
  }

`;

export const Card = styled(CardM)`
  min-width: 31%;
  height: 200px;
`;

export const CardContent = styled(CardContentM)`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
  background-color: ${({ theme, background }) => {
    const backgroundColors = background?.split(".");
    if (backgroundColors)
      return theme.palette[backgroundColors[0]][backgroundColors[1] || "main"];
  }};
`;

export const Border = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
  width: ${({ ishover }) => (ishover ? "50%" : "99%")};
  height: ${({ ishover }) => (ishover ? "50%" : "97%")};
  border: ${({ theme, borderColor }) => {
    const borderColors = borderColor?.split(".");
    if (borderColors)
      return `3px solid ${
        theme.palette[borderColors[0]][borderColors[1] || "main"]
      }`;
  }};
  border-radius: 4px;
`;
