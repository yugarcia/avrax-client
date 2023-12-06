import styled, { css } from "@mui/styled-engine";

export const Section = styled("section")`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: white;

  ${({ center }) =>
    center &&
    css`
      flex-direction: column;
      justify-content: center;
    `}
`;
export const Content = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: ${({ isDesktop }) => (isDesktop ? "140px 0 100px" : "140px 0 50px")};

  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  align-items: ${({ isDesktop }) => (isDesktop ? "flex-start" : "center")};
  gap: 50px;
`;

export const PromotionsContent = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const ContactContainer = styled("div")`
  z-index: 200;
`;

export const RegresiveContainer = styled("div")`
  position: relative;
`;
