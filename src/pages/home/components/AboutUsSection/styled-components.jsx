import styled, { css } from "@mui/styled-engine";
import { Typography } from "@mui/material";

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
