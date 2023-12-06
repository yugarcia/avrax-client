import styled from "@mui/styled-engine";
import { Box } from "@mui/material";

export const Container = styled("div")`
  
  color: white;
  display: flex;
  flex-direction: column;
  gap: 33px;
 
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

export const TimeBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

