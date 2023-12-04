import styled, { css } from "@mui/styled-engine";

import {
  Typography,
  Box as BoxM,
  Container as ContainerM,
} from "@mui/material";
import ContainerL from "../Container";

export const Container = styled(ContainerL)`
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
  overflow: hidden;
  background-color: ${({ theme, background }) => {
    const backgroundColors = background?.split(".");
    if (backgroundColors)
      return theme.palette[backgroundColors[0]][backgroundColors[1] || "main"];
  }};
  gap: 50px;
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: ${({ isdesktop, isMobile }) =>
    isdesktop || isMobile ? "column" : "row"};
  width: ${({ isdesktop }) => (isdesktop ? "30%" : "auto")};

  ${({ isdesktop, isMobile }) =>
    !isdesktop &&
    !isMobile &&
    css`
      align-items: baseline;
      gap: 20px;
    `}
`;

export const Content = styled("div")`
  display: flex;
  align-items: flex-start;
`;

export const SubitleText = styled(Typography)`
  text-shadow: 0.5px 0.5px ${({ theme }) => theme.palette.primary.main};
`;

export const TextContent = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const SumaryContainer = styled(ContainerM)`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 50px;
  justify-content: space-between;
  max-width: 100%;
  position: relative;
  top: 100px;
`;

export const SumaryBox = styled(BoxM)`
  display: flex;
  flex-direction: column;
  width: ${({ isdesktop, isTablet }) =>
    isdesktop
      ? "24%"
      : isTablet
      ? "48%"
      : "100%"}; /* Porcentaje del ancho total para mostrar cuatro divs en una fila */
  box-sizing: border-box;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.main}`};
  text-align: center;
  text-wrap: nowrap;
  padding: 50px;
  margin: 5px;
  background-color: ${({ theme, background }) => {
    const backgroundColors = background?.split(".");
    if (backgroundColors)
      return theme.palette[backgroundColors[0]][backgroundColors[1] || "main"];
  }};
`;
