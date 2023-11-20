import styled, { css } from "@mui/styled-engine";
import {
  Typography,
  Box as BoxM,
  Container as ContainerM,
} from "@mui/material";

export const Title = styled("div")`
  display: flex;
  flex-direction: ${({ isDesktop, isMobile }) =>
    isDesktop || isMobile ? "column" : "row"};
  width: ${({ isDesktop }) => (isDesktop ? "30%" : "auto")};
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : "0 50px")};

  ${({ isDesktop, isMobile }) =>
    !isDesktop &&
    !isMobile &&
    css`
      align-items: baseline;
      gap: 20px;
    `}
`;

export const Content = styled("div")`
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : "0 50px")};
  display: flex;
  align-items: flex-start;
`;

export const TitleText = styled(Typography)`
  text-shadow: 0.5px 0.5px ${({ theme }) => theme.palette.primary.main};
`;

export const Container = styled("section")`
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  margin: 50px 0;
`;

export const Paragraph = styled(Typography)`
  width: 100%;
  &:first-letter {
    font-size: 53px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
    line-height: 0.8;
  }
`;

export const Image = styled("img")`
  max-width: ${({ isMobile }) => (isMobile ? "100%" : "500px")};
  float: left;
  margin: 0 40px 10px 0;
`;

export const TextContent = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const FooterContent = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const SumaryContainer = styled(ContainerM)`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 50px;
  justify-content: space-between;
  max-width: 100%;
`;

export const SumaryBox = styled(BoxM)`
  display: flex;
  flex-direction: column;
  width: ${({ isDesktop, isTablet }) =>
    isDesktop
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

export const CitiesContainer = styled(ContainerM)`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 50px;
  justify-content: center;
  max-width: 100%;
`;

export const Box = styled(BoxM)`
  width: ${({ isDesktop }) =>
    isDesktop
      ? "19%"
      : "50%"}; /* Porcentaje del ancho total para mostrar cuatro divs en una fila */
  box-sizing: border-box;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.main}`};
  text-align: center;
  padding: 20px;
  margin: 5px;
`;
