import styled, { css } from "@mui/styled-engine";
import { Typography } from "@mui/material";
import ContainerL from "../../../../components/Container";

export const Container = styled(ContainerL)`
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  gap: 50px;
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: ${({ isdesktop, isMobile }) =>
    isdesktop || isMobile ? "column" : "row"};
  justify-content: ${({ isdesktop }) => (isdesktop ? "flex-start" : "center")};

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

export const ImgContent = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${({ isdesktop }) => (isdesktop ? "70%" : "100%")};
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
  gap: 50px;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border: 2px solid #ededed;

  gap: 20px;
  padding: 35px 30px 40px 35px;
`;

export const ImgContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 20px;
`;
