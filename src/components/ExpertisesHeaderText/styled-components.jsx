import styled, { keyframes, css } from "@mui/styled-engine";

export const Section = styled("section")`
  background: ${({ backgroundImage }) =>
    `url(${backgroundImage}) no-repeat fixed 0 0 `};

  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:after {
    background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;
    content: "";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

const slideInLeftBefore = keyframes`
    0% {
        left: 0%;
    }

    100% {
        left: 8%;
    }
`;

const slideInLeftAfter = keyframes`
    0% {
        right: 100%;
    }

    100% {
        right: 91%;
    }
`;

export const BoxLeft = styled("div")`
  z-index: 1;
  width: 30%;
  opacity: 0.7;

  ${({ isShow }) =>
    isShow &&
    css`
      &: after {
        animation: ${slideInLeftAfter} 3s ease-in-out;
      }

      &: before {
        animation: ${slideInLeftBefore} 3s ease-in-out;
      }
    `}

  &:before {
    background: #fff none repeat scroll 0 0;
    left: 8%;
    width: 70px;

    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transform: skewX(45deg);
    z-index: -1;
  }

  &:after {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transform: skewX(45deg);
    z-index: -1;

    background: ${({ theme }) => theme.palette.primary.main} none repeat scroll
      0 0;
    right: 91%;
    width: 2430px;
  }
`;
