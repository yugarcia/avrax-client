import styled, { keyframes, css } from "@mui/styled-engine";

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

export const FixedHeaderWrapper = styled("header")`
  position: fixed;
  top: 0;
  z-index: 2000;
  width: 100%;
  height: 64px;
  display: flex;
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
