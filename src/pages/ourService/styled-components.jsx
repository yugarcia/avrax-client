import styled, { css } from "@mui/styled-engine";
import { Typography } from "@mui/material";
import ContainerL from "../../components/Container/index.jsx";

export const Container = styled(ContainerL)`
  align-items: start;
  flex-direction: column;
  position: relative;
  z-index: 100;
  background-color: ${({ theme }) => theme.palette.secondary.white};
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: ${({ isdesktop, isMobile }) =>
    isdesktop || isMobile ? "column" : "row"};
  position: relative;

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
  position: relative;
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

export const ServicesInnerBlock = styled("div")`
  border-radius: 10px;
  box-shadow: 4px 4px 15px 10px rgba(51, 60, 68, 0.05);
  margin-bottom: 30px;
  margin-left: 15px;
  margin-top: 25px;
  padding: 50px 24px;
  position: relative;
  text-align: center;
  transition: all 0.5s ease-in-out;

  &:after {
    content: "";
    background: rgba(0, 42, 92, 0.5);
    border-radius: 10px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.5s ease-in-out;
    width: 100%;
  }

  &:hover {
    &:after {
      background: rgba(0, 42, 92, 0);
    }
  }
`;

export const Image = styled("img")`
  border-radius: 10px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 100%;
  opacity: 1;
  object-fit: cover;
`;

export const IconImage = styled("div")`
  position: relative;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;

  & > img {
    display: initial;
    position: relative;
    transition: all 0.8s ease-in-out;
    width: auto;
    z-index: 99;

    width: 73px;
    height: 73px;
  }

  ${({ isHover }) =>
    isHover &&
    css`
      & > img {
        transform: rotateY(180deg);
      }
    `}
`;

export const BanefitContainer = styled(ContainerL)`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
  background-color: ${({ theme }) => theme.palette.secondary.white};
  padding: ${({ isDesktop }) => (isDesktop ? "100px 150px" : "100px 50px")};
`;

export const Contenido = styled("div")`
  max-height: ${({ isHover }) => (isHover ? "1000px" : "0")};
  overflow: hidden;
  transition: all 3s;
  transition: max-height 3s ease;
`;
