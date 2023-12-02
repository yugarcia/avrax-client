import styled from "@mui/styled-engine";
import Paragraph from "../../../../../components/Paragraph/index.jsx";

export const Img = styled("img")`
  width: ${({ isMobile }) => (isMobile ? "100%" : "50%")};
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgContainer = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: ${({ isMobile, reverse }) =>
    isMobile ? "column" : reverse ? "row-reverse" : "row"};
`;

export const DarkCape = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isHover }) =>
    isHover
      ? ` rgba(
    0,
    0,
    0,
    0.8
  ); `
      : `rgba(
    0,
    0,
    0,
    0.4
  );`};

  /* ajusta el valor de opacidad según tus necesidades */
`;

export const CenterText = styled("div")`
  background-color: #1b1b1b;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
 
  padding: 20px;
`;

export const ParagraphWrapper = styled(Paragraph)`
  line-height: 1.5;
`;
