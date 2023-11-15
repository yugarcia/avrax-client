import { styled } from "@mui/material/styles";

export const Gradient = styled("div")`
  height: inherit;
  position: absolute;
  z-index: 200;
  width: 100%;
  background: ${({ theme }) =>
    `linear-gradient( to bottom, ${theme.palette.primary.main} 1%,#00ff0000 10%,#00ff0000 90%)`};
`;
