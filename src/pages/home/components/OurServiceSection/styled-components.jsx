import styled, { css } from "@mui/styled-engine";
import {
  Typography,
  Box as BoxM,
  Container as ContainerM,
} from "@mui/material";

export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: column;
  padding: ${({ isMobile }) => (isMobile ? "0 10px" : "0 50px")};
  margin-top: 150px;

  ${({ isDesktop, isMobile }) =>
    !isDesktop &&
    !isMobile &&
    css`
      align-items: baseline;
      gap: 20px;
    `}
`;

export const Content = styled("div")`
  padding: 0 50px;
  display: flex;
  align-items: flex-start;
  gap: 25px;
  margin: 50px 0;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
`;

export const TitleText = styled(Typography)`
  text-shadow: 0.5px 0.5px ${({ theme }) => theme.palette.primary.main};
`;

export const TextContent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  width: ${({ isDesktop }) =>
    isDesktop
      ? "33%"
      : "100%"}; /* Porcentaje del ancho total para mostrar cuatro divs en una fila */
`;

export const Paragraph = styled(Typography)`
  width: 100%;
  &:first-letter {
    font-size: 32px;
    color: ${({ theme }) => theme.palette.primary.light};
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

export const Box = styled(BoxM)`
  width: ${({ isDesktop }) =>
    isDesktop
      ? "19%"
      : "50%"}; /* Porcentaje del ancho total para mostrar cuatro divs en una fila */
  box-sizing: border-box;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.light}`};
  text-align: center;
  padding: 20px;
  margin: 5px;

  ${({ theme, isHover }) =>
    isHover &&
    css`
      background-color: ${theme.palette.primary.light};
    `}
  }

`;

export const CitiesContainer = styled(ContainerM)`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 50px;
  justify-content: center;
  max-width: 100%;
`;
