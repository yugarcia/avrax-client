import styled from "@mui/styled-engine";
import { Link } from "@mui/material";

export const Container = styled("div")`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 500;
  top: 50%;
  right: 7px;
  gap: 8px;
`;

export const IconContainer = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 6px;
  width: 24px;
  height: 24px;
  background-color: ${({ theme, ishover }) =>
  ishover==='true' ? theme.palette.primary.main : theme.palette.secondary.main};
  border-radius: 20px;
  border: 1px solid
    ${({ theme, ishover }) =>
    ishover==='true' ? theme.palette.secondary.main : theme.palette.primary.main};
`;

export const SocialMediaContainer = styled("div")`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 30px;
`;
