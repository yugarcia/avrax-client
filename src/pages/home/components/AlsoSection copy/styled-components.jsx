import styled, { css } from "@mui/styled-engine";
import { Card as CardM, CardContent as CardContentM } from "@mui/material";
import ContainerL from "../../../../components/Container";

export const Container = styled(ContainerL)`
  align-items: start;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1));
 

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://www.wallpapertip.com/wmimgs/9-99444_15456-rain-drops-on-the-window-background-images.jpg)
      center/cover no-repeat;
    z-index: -1;
    opacity: 0.3;
  }
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
  justify-content: space-around;
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-top: 50px;
`;

export const CardContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;


  ${({ isdesktop }) =>
    !isdesktop &&
    css`
      flex-direction: column;
    `}
  }

`;

export const Card = styled("div")`
  min-width: 31%;
  height: 200px;
`;

export const CardContent = styled(CardContentM)`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: transparent;

  gap: 20px;
  padding: 0;
  background-color: ${({ theme, background }) => {
    const backgroundColors = background?.split(".");
    if (backgroundColors)
      return theme.palette[backgroundColors[0]][backgroundColors[1] || "main"];
  }};
`;

export const Border = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 50%;
`;

export const LuzCercana = styled("div")`
  padding: 7px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.1) 80%
  );
`;

export const LuzLejana = styled("div")`
  padding: 7px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.1) 80%
  );
`;
