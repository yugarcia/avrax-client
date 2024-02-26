import styled, { css } from "@mui/styled-engine";
import { Box as BoxM, Typography } from "@mui/material";
import ContainerL from "../../../../components/Container";

export const SumaryContainer = styled(ContainerL)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  position: relative;
  padding: 0;
  margin-bottom: 50px;
`;

export const SumaryBox = styled(BoxM)`
  display: flex;
  flex-direction: column;
  width: ${({ isdesktop, istablet }) =>
    isdesktop === "true"
      ? "24%"
      : istablet === "true"
      ? "48%"
      : "100%"}; /* Porcentaje del ancho total para mostrar cuatro divs en una fila */
  box-sizing: border-box;
  text-align: center;
  text-wrap: ${({ istablet }) => (istablet === "true" ? "nowrap" : "initial")};
  padding: 50px;
  margin: 5px;
`;

export const SumaryBoxContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  padding: 0 20px;

  ${({ isdesktop, isMobile }) =>
    !isdesktop &&
    !isMobile &&
    css`
      align-items: baseline;
      gap: 20px;
    `}
`;

export const TitleText = styled(Typography)`
  text-shadow: 0.5px 0.5px ${({ theme }) => theme.palette.primary.main};
`;
