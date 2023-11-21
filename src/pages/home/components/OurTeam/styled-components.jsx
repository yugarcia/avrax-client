import styled, { css } from "@mui/styled-engine";
import { Typography } from "@mui/material";

export const Container = styled("div")`
  display: flex;
  padding: 50px;
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: ${({ isdesktop, isMobile }) =>
    isdesktop || isMobile ? "column" : "row"};
  width: ${({ isdesktop }) => (isdesktop ? "30%" : "auto")};
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : "0 50px")};

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
  width: ${({ isdesktop }) => (isdesktop ? "70%" : "100%")};
  padding: ${({ isdesktop }) => (isdesktop ? "0 50px" : "0 20px")};
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
`;

export const TextContent = styled("div")`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  width: 80%;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ImgContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
