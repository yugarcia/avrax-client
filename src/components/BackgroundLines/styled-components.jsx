import styled, { keyframes } from "@mui/styled-engine";

const gridanim = keyframes`
0% {
  top: 0;
}
100% {
  top: 100%;
}
`;

export const GridLines = styled("ul")`
  bottom: -800px;
  left: 0;
  list-style-type: none;
  margin: 0;
  padding: 0 calc(2.01875rem + 7.90714vw);
  position: absolute;
  right: 0;
  top: 400px;
  z-index: 0;
  display: flex;
  justify-content: space-between;
`;

export const GridLine = styled("li")`
  background: ${({ theme }) => theme.palette.primary.dark};
  display: inline-block;
  height: 100%;
  mix-blend-mode: difference;
  position: relative;
  width: 1px;

  &:before {
    animation: ${gridanim} 25s linear infinite;
    background: #fff;
    background: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0.3),
      hsla(0, 0%, 100%, 0)
    );
    content: "";
    height: 60px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1px;

    animation-delay: ${({ delay }) => delay}s;
  }
`;
