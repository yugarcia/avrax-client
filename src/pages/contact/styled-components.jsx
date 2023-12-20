import styled, { css } from "@mui/styled-engine";
import { Typography } from "@mui/material";
import ContainerL from "../../components/Container/index.jsx";

export const Container = styled(ContainerL)`
  align-items: ${({ isdesktop }) => (isdesktop ? "start" : "center")};
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
  justify-content: space-around;
  gap: 50px;
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: ${({ isdesktop, isMobile }) =>
    isdesktop || isMobile ? "column" : "row"};

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

export const CardContainer = styled(ContainerL)`
  display: flex;
  align-items: center;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  justify-content: space-around;
  gap: 50px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://avraxwindows.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-01-at-12.39.41-PM-1.jpeg)
      center/cover no-repeat;
    z-index: -1;
    background-attachment: fixed;
  }
`;
