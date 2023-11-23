import styled from "@mui/styled-engine";

export const Container = styled("div")`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 5000;
  top: 50%;
  right: 25px;
  gap: 8px;
`;

export const IconContainer = styled("div")`
  padding: 6px;
  background-color: ${({ theme, isHover }) =>
    isHover ? theme.palette.primary.main : theme.palette.secondary.main};
  border-radius: 20px;
  border: 1px solid
    ${({ theme, isHover }) =>
      isHover ? theme.palette.secondary.main : theme.palette.primary.main};
`;

export const SocialMediaContainer = styled("div")`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 30px;
`;
