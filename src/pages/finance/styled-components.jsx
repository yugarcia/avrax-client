import styled from "@mui/styled-engine";

export const TextContent = styled("div")`
  position: relative;
  bottom: 68px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  opacity: 0.8;
  width: fit-content;
  padding: 1rem;
`;
