import React, { useEffect, useMemo, useState } from "react";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import {
  Container,
  ContactItem,
  ElementsContainer,
} from "./styled-components.jsx";
import mrGlass from "../../assets/mr-glass.png";
import ewindows from "../../assets/eswindow.png";
import crl from "../../assets/crl.png";
import igt from "../../assets/igt.png";

const EXTRA_LARGE_WIDTH = 1270;
const WIDTH = 1076;
const MOBILE_WIDTH = 600;
const IMAGE_WIDTH = 250;

const Providers = () => {
  const [imageWidth, setImageWidth] = useState(IMAGE_WIDTH);

  const isExtraLarge = useMediawidth(EXTRA_LARGE_WIDTH);
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const [translateValue, setTranslateValue] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [index, setIndex] = useState(0);

  const providers = useMemo(
    () => [
      {
        name: "Mr Glass Doors & Windows Manufacturing LLC",
        logo: mrGlass,
        alt: "Mr Glass Doors & Windows Manufacturing LLC",
        value: imageWidth + 50,
      },
      {
        name: "ESW Logo",
        logo: ewindows,
        alt: "ESW Logo",
        value: imageWidth + 50,
      },
      {
        name: "CRL Logo",
        logo: crl,
        alt: "CRL Logo",
        value: imageWidth + 50,
      },
      {
        name: "IGT Logo",
        logo: igt,
        alt: "IGT Logo",
        value: imageWidth + 50,
      },
      {
        name: "Mr Glass Doors & Windows Manufacturing LLC",
        logo: mrGlass,
        alt: "Mr Glass Doors & Windows Manufacturing LLC",
        value: imageWidth + 50,
      },
      {
        name: "ESW Logo",
        logo: ewindows,
        alt: "ESW Logo",
        value: imageWidth + 50,
      },
      {
        name: "CRL Logo",
        logo: crl,
        alt: "CRL Logo",
        value: imageWidth + 50,
      },
      {
        name: "IGT Logo",
        logo: igt,
        alt: "IGT Logo",
        value: imageWidth + 50,
      },
    ],
    [imageWidth]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIsShow(!isShow);
      let currentIndex = index;
      let currentTranslateValue = translateValue;
      if (!isShow) {
        setAnimation(false);
        if (currentIndex === 4) {
          setTranslateValue(0);
          setIndex(0);
        }
        return;
      }
      setTranslateValue(currentTranslateValue - providers[currentIndex].value);
      setIndex(index + 1);
      setAnimation(true);
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, [providers, index, translateValue, animation, isShow]);

  useEffect(() => {
    console.log("isExtraLarge", isExtraLarge);
    console.log("isDesktop", isDesktop);
    console.log("isTablet", isTablet);

    if (isExtraLarge) {
      setImageWidth(IMAGE_WIDTH);
    } else if (isDesktop) {
      setImageWidth(150);
    } else if (isTablet) {
      setImageWidth(100);
    } else {
      setImageWidth(100);
    }
  }, [isExtraLarge, isDesktop, isTablet]);

  return (
    <Container isdesktop={isDesktop} isMobile={!isTablet}>
      <div
        style={{
          overflow: "hidden",
          paddingLeft: "25px",
          maxWidth: `${4 * imageWidth + 200}px`,
        }}
      >
        <ElementsContainer
          translateValue={translateValue}
          animation={animation}
        >
          {providers.map((provider) => (
            <div
              style={{
                width: `${imageWidth}px`,
                display: "flex",
                alignItems: "center",
              }}
            >
              <ContactItem key={provider.name} imageWidth={imageWidth}>
                <img
                  src={provider.logo}
                  alt={provider.alt}
                  width={imageWidth}
                />
              </ContactItem>
            </div>
          ))}
        </ElementsContainer>
      </div>
    </Container>
  );
};

export default Providers;
