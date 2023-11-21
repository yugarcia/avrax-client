import styled, { keyframes, css } from "@mui/styled-engine";
import { Breadcrumbs } from "@mui/material";

export const HeaderWrapper = styled('header')`
  position: absolute;
  width: 100%;
  height: 64px;

  display: flex;
`;

export const MenuContainer = styled(Breadcrumbs)`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 14px;
  }
`;

export const fadeIn = keyframes`
  from {
    top: -84px;
  }
  to {
    top: 0;
  }
`;

export const fadeOut = keyframes`
  from {
    top: 0;
  }
  to {
    top: -84px;
  }
`;

export const FixedHeaderWrapper = styled(HeaderWrapper)`
  position: fixed;
  top: 0;
  z-index: 2000;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  justify-content: space-between;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: auto;
  background-repeat: repeat;

  ${({ hideHeader, duration, isdesktop }) =>
  isdesktop &&
    css`
      animation: ${hideHeader ? fadeOut : fadeIn} ${duration}ms ease-in-out
        backwards;
    `}
`;

export const Logo = styled('img')`
  z-index: 2000;
  height: 50px;
  padding-left: ${({ isdesktop }) => (isdesktop ? "5vw" : "20vw")};
`;
