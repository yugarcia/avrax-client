import React, { useEffect, useState } from "react";
import {
  SumaryContainer,
  SumaryBoxContainer,
  Title,
  TitleText,
  SumaryContent,
} from "./styled-components";
import { useIntersect } from "../../../../hooks/useIntersect";
import { useIncrement } from "../../../../hooks/useIncrement";
import SumaryBox from "./SumaryBox";
import TextTitle from "../../../../components/Title/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import backgroundImage from "../../../../assets/our-numbers.jpg";

import { Parallax } from "react-parallax";

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

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Parallax
      bgImage={backgroundImage}
      strength={500}
      className="parallax-container"
    >
      <SumaryContainer>
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
              key={index}
            />
          ))}
        </SumaryBoxContainer>
      </SumaryContainer>
    </Parallax>
  );
};

export default Sumary;
