import React, { useState, useEffect, useRef } from "react";
import {
  Title,
  SubitleText,
  Container,
  Content,
  TextContent,
} from "./styled-components.jsx";
import { Slide } from "@mui/material";
import TextTitle from "../Title/index.jsx";
import Paragraph from "../Paragraph/index.jsx";
import { useIntersect } from "../../hooks/useIntersect.js";
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
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isShow, setIsShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsShow(entry?.isIntersecting);
  }, [entry]);

  return (
    <Container isdesktop={isDesktop} background={backgroundColor} ref={ref}>
      {(title || subtitle) && (
        <Slide
          direction="right"
          in={isShow}
          timeout={3000}
          container={ref.current}
        >
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
        </Slide>
      )}

      <Content isMobile={!isTablet} ref={intersectRef}>
        <TextContent>
          <Slide
            direction="left"
            in={isShow}
            timeout={3000}
            container={ref.current}
          >
            <div>
              <Paragraph
                imageSrc={imageSrc}
                paragraphColor={paragraphColor}
                paragraphInitialColor={paragraphInitialColor}
              >
                {paragraph}
              </Paragraph>
              {footer}
            </div>
          </Slide>
        </TextContent>
      </Content>
    </Container>
  );
};

export default TextSection;
