import styled from "@mui/styled-engine";
import Card from "@mui/material/Card";

export const CardsContainer = styled("div")`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  margin: auto;
  transition: transform 0.3s ease-out;
  transform-origin: center center; /* Centra el punto de rotación */
`;

/* Ajusta según la apariencia deseada de la tarjeta */
export const CardWrapper = styled(Card)`
  width: 50px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: transform 0.3s ease-out;
  border-radius: 20px;

  &:before {
    background: ${({ isHighlighted }) => `linear-gradient(
      180deg,
      rgba(37, 48, 65, 0.95),
      rgba(37, 48, 65, ${isHighlighted ? "0.5" : "0"}) 70%
    )`};
    border-radius: 20px;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    transition: all 0.3s;
    width: 100%;
    z-index: 1;
  }
`;

export const TextContent = styled("div")`
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 15px;
  z-index: 100;
`;

export const Contenido = styled("div")`
  max-height: ${({ isHover }) => (isHover ? "1000px" : "0")};
  overflow: hidden;
  transition: all 3s;
  transition: max-height 3s ease;
`;
