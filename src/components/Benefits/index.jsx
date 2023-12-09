// App.js
import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import { CardsContainer } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const SIZE = 400;
const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const Benefits = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  const [rotationAngle, setRotationAngle] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [size, setSize] = useState(
    isDesktop ? SIZE : isTablet ? SIZE / 2 : SIZE / 3
  );
  const [cards, setCards] = useState([
    {
      id: 1,
      size: size,
      title: "Increased security",
      image:
        "https://www.superiorlocks.com.au/wp-content/uploads/2018/11/window-lock.jpg",
      paragraph:
        "Impact windows and doors offer superior protection against break-ins and forced entry compared to traditional windows and doors.",
      isHighlighted: false,
    },
    {
      id: 2,
      size: size,
      title: "Improved weather resistance",
      image:
        "https://www.attainablehome.com/wp-content/uploads/2022/07/hurricane-windows_featured.jpg",
      paragraph:
        "The materials used in impact windows and doors are designed to withstand harsh weather conditions, including hurricanes, high winds, and heavy rain.",
      isHighlighted: false,
    },
    {
      id: 3,
      size: size,
      title: "Enhanced energy efficiency",
      image:
        "https://www.timeandleisure.co.uk/wp-content/uploads/2023/10/view-empty-waiting-room-scaled.jpg",
      paragraph:
        "The combination of laminated glass, polymer films, and efficient frame materials helps reduce energy consumption and lower utility bills.",
      isHighlighted: false,
    },
    {
      id: 4,
      size: size,
      title: "Reduced noise pollution",
      image:
        "https://www.windowworldtucson.com/uploads/article_images/block-out-noise-windows.jpg",
      paragraph:
        "Impact windows and doors offer improved soundproofing, creating a quieter and more peaceful living environment.",
      isHighlighted: false,
    },
    {
      id: 5,
      size: size,
      title: "Increased durability",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*W5GoEqNYBCW4vCFCT3gUjw.jpeg",
      paragraph:
        "Specialty materials like aluminum, vinyl, and fiberglass resist corrosion, warping, and fading, ensuring the windows and doors last for years to come.",
      isHighlighted: false,
    },
  ]);

  const calculateCardPosition = (index, totalCards) => {
    const angle = (360 / totalCards) * index + rotationAngle;
    const radius = size; // Ajusta el radio según tus necesidades
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    return `translate(${x}px, ${y}px)`;
  };

  useEffect(() => {
    setSize(isDesktop ? SIZE : isTablet ? SIZE / 2 : SIZE / 3);
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards.forEach((card) => {
        card.size = isDesktop ? SIZE : isTablet ? SIZE / 2 : SIZE / 3;
      });
      return updatedCards;
    });
  }, [isDesktop, isTablet]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa la rotación del contenedor
      setRotationAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 100); // Ajusta la velocidad de rotación según tus necesidades
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa el tamaño de la tarjeta actual y resalta la siguiente
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards[highlightedIndex].isHighlighted = true;
        updatedCards[highlightedIndex].size = size + 50;

        // Después de aumentar el tamaño, desactiva el resaltado de la tarjeta actual
        if (highlightedIndex === 0) {
          updatedCards[prevCards.length - 1].size = size;
          updatedCards[prevCards.length - 1].isHighlighted = false;
        } else if (highlightedIndex > 0) {
          updatedCards[highlightedIndex - 1].size = size;
          updatedCards[highlightedIndex - 1].isHighlighted = false;
        }

        // Actualiza el índice resaltado
        setHighlightedIndex((prevIndex) =>
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );

        return updatedCards;
      });
    }, 3000); // Ajusta el intervalo según tus necesidades

    return () => clearInterval(intervalId);
  }, [highlightedIndex, size]);

  return (
    <CardsContainer size={size}>
      {cards.map((card, index) => (
        <CardComponent
          key={card.id}
          position={calculateCardPosition(index, 5)}
          size={card.size}
          isHighlighted={card.isHighlighted}
          title={card.title}
          paragraph={card.paragraph}
          image={card.image}
        />
      ))}
    </CardsContainer>
  );
};

export default Benefits;
