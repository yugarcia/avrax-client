import styled, { css } from "@mui/styled-engine";
import { Typography } from "@mui/material";
import ContainerL from "../../../../components/Container";

export const Container = styled(ContainerL)`
  align-items: start;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    filter: grayscale(100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://avraxwindows.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-01-at-12.39.41-PM-1.jpeg)
      center/cover no-repeat;
    z-index: -1;
    opacity: 0.4;
    background-attachment: fixed;
  }
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

export const Contact = styled("div")`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: space-around;
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
  gap: 50px;
`;

export const ContactItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;
