import styled, { css } from "@mui/styled-engine";
import {
  Typography,
  Box as BoxM,
} from "@mui/material";
import ContainerL from "../../../../components/Container";

export const Container = styled(ContainerL)`
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  max-width: 100%;
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 150px;

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
  margin: 50px 0;
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
`;

export const TitleText = styled(Typography)`
  text-shadow: 0.5px 0.5px ${({ theme }) => theme.palette.primary.main};
`;

export const Box = styled(BoxM)`
  width: 100%;
  box-sizing: border-box;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.light}`};
  text-align: center;
  padding: 20px;
  margin: 5px;

  ${({ theme, ishover }) =>
    !!ishover &&
    css`
      background-color: ${theme.palette.primary.light};
    `}
  }

`;

export const CitiesContainer = styled("section")`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
  justify-content: center;
  max-width: 100%;
`;