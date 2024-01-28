import React from "react";
import {
  SumaryContainer,
  SumaryBoxContainer,
  Title,
  TitleText,
} from "./styled-components";
import { useIntersect } from "../../../../hooks/useIntersect";
import { useIncrement } from "../../../../hooks/useIncrement";
import SumaryBox from "./SumaryBox";
import TextTitle from "../../../../components/Title/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import backgroundImage from "../../../../assets/our-numbers.jpg";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const Sumary = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  const [intersectRef, entry] = useIntersect({ threshold: 0 });

  const years = useIncrement(entry?.isIntersecting, 8, 1);
  const houses = useIncrement(entry?.isIntersecting, 765, 15);
  const projects = useIncrement(entry?.isIntersecting, 28, 1);
  const cities = useIncrement(entry?.isIntersecting, 115, 5);

  const Sumaries = [
    {
      title: `${years}+`,
      subtitle: "Years in Business",
      background: "primary",
      color: "primary.light",
    },
    {
      title: `${houses}+`,
      subtitle: "Houses Protected",
      background: "primary.light",
      color: "primary",
    },
    {
      title: `${projects}+`,
      subtitle: "New Projects",
      background: "red.light",
      color: "primary.light",
    },
    {
      title: `${cities}+`,
      subtitle: "Cities",
      background: "secondary.dark",
      color: "primary.light",
    },
  ];

  return (
    <SumaryContainer   backgroundImage={backgroundImage}>
      <Title isdesktop={isDesktop} isMobile={!isTablet}>
        <TextTitle color="primary.light" textAlign={"right"}>
          Our numbers
        </TextTitle>
        <TitleText
          variant="title"
          color="#0986B9"
          textAlign={"right"}
          lineHeight={"normal"}
        >
          as of 2023
        </TitleText>
      </Title>

      <SumaryBoxContainer ref={intersectRef}>
        {Sumaries.map((sumary, index) => (
          <SumaryBox
            title={sumary.title}
            subtitle={sumary.subtitle}
            color="secondary"
          />
        ))}
      </SumaryBoxContainer>
    </SumaryContainer>
  );
};

export default Sumary;
