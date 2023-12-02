import styled from "@mui/styled-engine";
import Paragraph from "../../../../../components/Paragraph/index.jsx";

export const Img = styled("img")`
  width: 100%;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgContainer = styled("div")`
  position: relative;
  width: 100%; /* ajusta el ancho según tus necesidades */
  overflow: hidden;
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
  position: absolute;
  top: ${({ isMobile, isHover }) =>
    isMobile ? "20%" : isHover ? "30%" : "50%"};
  left: ${({ isMobile, isHover }) =>
    isMobile ? "20%" : isHover ? "30%" : "50%"};
  transform: ${({ isMobile, isHover }) =>
    isMobile
      ? "translate(-10%, -10%)"
      : isHover
      ? "translate(-20%, -20%)"
      : "translate(-50%, -50%)"};
  color: white; /* ajusta el color del texto según tus necesidades */
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ParagraphWrapper = styled(Paragraph)`
  line-height: 1.5;
`;
