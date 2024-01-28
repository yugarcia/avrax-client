import styled, { css } from "@mui/styled-engine";
import { Box as BoxM } from "@mui/material";

export const CitiesContainer = styled("section")`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ isDesktop }) =>
    isDesktop ? "100px 100px 50px" : "100px 20px 50px"};
  gap: ${({ isDesktop }) => (isDesktop ? "100px" : "50px")};
  justify-content: center;
  max-width: 100%;

  position: relative;
  overflow: hidden;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.palette.primary.dark}, rgba(225, 245, 254, 0))`};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: url(${({ backgroungImage }) => backgroungImage});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
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
