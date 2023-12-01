import styled from "@mui/styled-engine";
import { Typography } from "@mui/material";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
`;

export const Content = styled("div")`
  position: relative;
  top: -153px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background-color: ${({ theme }) => theme.palette.secondary.dark};
  opacity: 0.8;
  width: fit-content;
  min-width: 17rem;
  padding: 1rem;
`;

export const Img = styled("img")`
  width: 100%;
`;

export const CTA = styled(Typography)`
  border: 2px solid ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.primary.light};
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;
