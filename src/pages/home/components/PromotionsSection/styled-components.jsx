import styled, { css } from "@mui/styled-engine";

export const Section = styled("section")`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 600;
  background-color: white;

  ${({ center }) =>
    center &&
    css`
      flex-direction: column;
      justify-content: center;
    `}
`;

export const ContactContainer = styled("div")`
  z-index: 100;
  margin: ${({ isDesktop }) =>
  isDesktop ? "140px 0 100px 12vw" : "140px 0 50px 0"};
`;
