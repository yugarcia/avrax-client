import styled, { css } from "@mui/styled-engine";
import { Typography, Box as BoxM } from "@mui/material";
import ContainerL from "../../../../components/Container";

export const Container = styled(ContainerL)`
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
  align-items: ${({ isdesktop }) => (isdesktop ? "flex-start" : "center")};
  justify-content: space-around;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  max-width: 100%;
  padding: ${({ isdesktop }) =>
    isdesktop ? "100px 100px 0" : "100px 20px 0;"};

  gap: ${({ isdesktop }) => (isdesktop ? "100px" : "50px")};
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
  flex-direction: column;
  gap: 50px;
  max-width: 600px;
`;

export const TitleText = styled(Typography)`
  text-shadow: 0.5px 0.5px ${({ theme }) => theme.palette.primary.main};
`;

export const Box = styled(BoxM)`
  width: 100%;
  box-sizing: border-box;
  border: ${({ theme }) => `6px solid ${theme.palette.primary.light}`};
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

  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #05083f, rgba(225, 245, 254, 0));

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://images.unsplash.com/photo-1613231365704-22aa7ad7cffc?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
      center/cover no-repeat;
    z-index: -1;
  }
`;
