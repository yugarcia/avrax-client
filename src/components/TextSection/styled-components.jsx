import styled, { css } from "@mui/styled-engine";
import {
  Typography,
  Box as BoxM,
  Container as ContainerM,
} from "@mui/material";
import  ContainerL  from "../Container";

export const Container = styled(ContainerL)`
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
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

export const TitleText = styled(Typography)`
  text-shadow: 0.5px 0.5px ${({ theme }) => theme.palette.primary.main};
`;

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
