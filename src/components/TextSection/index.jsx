import React from "react";
import {
  Title,
  SubitleText,
  Container,
  Content,
  Image,
  TextContent,
} from "./styled-components.jsx";
import TextTitle from "../Title/index.jsx";
import Paragraph from "../Paragraph/index.jsx";

import { useMediawidth } from "../../hooks/useMediawidth.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const TextSection = ({
  backgroundColor,
  title,
  titleColor,
  subtitle,
  subtitleColor,
  imageSrc,
  paragraph,
  paragraphColor,
  paragraphInitialColor,
  footer,
}) => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container isdesktop={isDesktop} background={backgroundColor}>
      {(title || subtitle) && (
        <Title isdesktop={isDesktop} isMobile={!isTablet}>
          <TextTitle color={titleColor} textAlign={"right"}>
            {title}
          </TextTitle>
          <SubitleText
            variant="title"
            color={subtitleColor}
            textAlign={"right"}
            lineHeight={"normal"}
          >
            {subtitle}
          </SubitleText>
        </Title>
      )}
      <Content isMobile={!isTablet}>
        <TextContent>
          <Paragraph
            imageSrc={imageSrc}
            paragraph={paragraph}
            paragraphColor={paragraphColor}
            paragraphInitialColor={paragraphInitialColor}
          />
          {footer}
        </TextContent>
      </Content>
    </Container>
  );
};

export default TextSection;
