import styled from "@mui/styled-engine";

export const Container = styled("section")`
  display: flex;
  padding: ${({ isMobile }) => (isMobile ? "50px 20px" : "50px")};
`;
