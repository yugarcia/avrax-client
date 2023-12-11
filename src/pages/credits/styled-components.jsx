import styled from "@mui/styled-engine";
import Paragraph from "../../components/Paragraph";

export const ParagraphWrapper = styled(Paragraph)`
  padding: ${({ isMobile }) => (isMobile ? "0" : "0 150px")};
`;
