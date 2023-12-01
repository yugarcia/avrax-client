import styled from "@mui/styled-engine";

export const Content = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 25px;
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
`;
