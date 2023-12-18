import styled from "@mui/styled-engine";

export const Container = styled("div")`
  position: relative;
  width:100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center ;
  height: ${({ height }) => height}px;
`;
// Contenedor principal del gráfico de anillo
export const DonutContainer = styled("div")`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilo para el círculo hueco en el centro
export const Hole = styled("div")`
  position: absolute;
  width: ${(props) => props.size / 2}px;
  height: ${(props) => props.size / 2}px;
  border-radius: 50%;
  background-color: white; // El color de fondo del contenedor
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Segmento individual del donut chart
export const Segment = styled("div")`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  clip-path: polygon(52% 50%, ${(props) => props.percentage}% 0, 100% 100%);
  background-color: ${({ theme }) => theme.palette.primary.main};
  transform: rotate(${(props) => props.angle}deg);
  box-shadow: 1px 0 10px rgba(34, 66, 135, 1);
`;

// Estilo para los íconos
export const Icon = styled("div")`
  position: absolute;
  font-size: 2rem; // Tamaño del ícono
  transform: translate(-50%, -50%) rotate(${(props) => -props.startAngle}deg);

  left: 85%; // Posiciona el ícono hacia la mitad exterior del segmento
  top: 64%;
  z-index: 3;
`;

export const Logo = styled("img")`
  z-index: 2000;
  height: ${({ size }) => `${size}px`};
`;
