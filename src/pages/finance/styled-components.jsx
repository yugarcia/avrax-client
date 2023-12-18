import styled from "@mui/styled-engine";
import Paragraph from "../../components/Paragraph";
import { Card } from "@mui/material";
import ContainerL from "../../components/Container/index.jsx";

export const ParagraphWrapper = styled(Paragraph)`
  padding: ${({ isMobile }) => (isMobile ? "0" : "0 150px")};
`;

export const TextContent = styled("div")`
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 30px;
  z-index: 100;
`;

export const Contenido = styled("div")`
  max-height: ${({ isHover }) => (isHover ? "1000px" : "0")};
  overflow: hidden;
  transition: all 3s;
  transition: max-height 3s ease;
`;

export const BlogSection = styled(Card)`
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: 20px;

  &:before {
    background: linear-gradient(
      180deg,
      rgba(37, 48, 65, 0.95),
      rgba(37, 48, 65, 0) 70%
    );
    border-radius: 20px;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    transition: all 0.3s;
    width: 100%;
    z-index: 1;
  }
`;


export const FinanceContainer = styled(ContainerL)`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
  background-color: ${({ theme }) => theme.palette.secondary.white};
`;