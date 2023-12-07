import styled, { css } from "@mui/styled-engine";

export const Container = styled("figure")`
  overflow: hidden;
  position: relative;
  height: 100%;
  margin: 0;
`;

export const Image = styled("img")`
  transition-duration: 2s;

  ${({ isHover }) =>
    isHover &&
    css`
      transform: scale(1.4);
      transition-duration: 4s;
    `}
`;

export const FigCaption = styled("figcaption")`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
export const IconContainer = styled("div")`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 60px;
  left: 60px;
  position: absolute;
  transform: scale(1);
  transition: all 0.5s ease-in-out;
`;

export const Gradient = styled("div")`
  bottom: ${({ isHover }) => (isHover ? "0" : "-25px")};
  height: 100%;
  opacity: ${({ isHover }) => (isHover ? "1" : "0")};
  position: absolute;
  transition: all 0.5s ease-in-out;
  width: 100%;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0) 0,
    rgba(0, 0, 0, 0.18) 48%,
    rgba(0, 0, 0, 0.45)
  );
`;
