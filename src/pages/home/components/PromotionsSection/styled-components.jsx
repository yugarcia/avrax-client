import styled, { css } from "@mui/styled-engine";

export const Section = styled("section")`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `}
`;
