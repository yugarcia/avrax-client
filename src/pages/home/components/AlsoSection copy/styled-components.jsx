import styled, { css } from "@mui/styled-engine";
import { CardContent as CardContentM } from "@mui/material";
import ContainerL from "../../../../components/Container";

export const Container = styled(ContainerL)`
  align-items: start;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  background: ${({ theme }) =>
    `linear-gradient(to top, ${theme.palette.primary.dark}, rgba(255, 255, 255, 1))`};
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
  justify-content: space-around;
  width: 100%;
  height: 100%;
  gap: 50px;
  margin-top: 50px;
`;

export const CardContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
bac
  ${({ isdesktop }) =>
    !isdesktop &&
    css`
      flex-direction: column;
    `}
  }

`;

export const Card = styled("div")`
  min-width: 31%;
  height: 200px;
  border-radius: 10px;
`;

export const CardContent = styled(CardContentM)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${({ isdesktop }) => (isdesktop ? "0 50px" : "0")};
  padding: 20px;
  position: relative;
  box-shadow: 0 5px 20px 0 ${({ theme }) => theme.palette.primary.main};
  gap: 20px;
`;

export const Border = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 50%;
`;

export const LuzCercana = styled("div")`
  padding: 7px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.1) 80%
  );
`;

export const LuzLejana = styled("div")`
  padding: 7px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.1) 80%
  );
`;
