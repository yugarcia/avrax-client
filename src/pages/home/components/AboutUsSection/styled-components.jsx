import styled from "@mui/styled-engine";
import { Box as BoxM, Container as ContainerM } from "@mui/material";

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

export const FooterContent = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
