import styled from "@mui/styled-engine";

export const Container = styled("div")`
  position: ${({ isMobile }) => (isMobile ? "relative" : "absolute")};
  color: white;
  display: flex;
  flex-direction: column;
  gap: 33px;
  right: ${({ isMobile }) => (isMobile ? "0px" : "70px")};
  top: 110px;
`;

export const CircularTimeContent = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const TimeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
