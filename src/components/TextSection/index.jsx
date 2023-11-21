import React from "react";
import { Typography } from "@mui/material";
import {
  Title,
  TitleText,
  Container,
  Content,
  Paragraph,
  Image,
  TextContent,
} from "./styled-components.jsx";
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
  footer
}) => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container isdesktop={isDesktop} background={backgroundColor}>
      <Title isdesktop={isDesktop} isMobile={!isTablet}>
        <Typography variant="largeTitle" color={titleColor} textAlign={"right"}>
          {title}
        </Typography>
        <TitleText
          variant="title"
          color={subtitleColor}
          textAlign={"right"}
          lineHeight={"normal"}
        >
          {subtitle}
        </TitleText>
      </Title>
      <Content isMobile={!isTablet}>
        <TextContent>
          <Paragraph
            variant="paragraph"
            textAlign={"left"}
            color={paragraphColor}
            initialcolor={paragraphInitialColor}
          >
            <Image src={imageSrc} isMobile={!isTablet} />
          {paragraph}
          </Paragraph>
            {footer}
        </TextContent>
      </Content>
    </Container>
  );
};

export default TextSection;
