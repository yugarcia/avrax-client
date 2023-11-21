import React from "react";
import { CitiesContainer } from "./styled-components";
import City from "./City";
import { useIntersect } from "../../../../hooks/useIntersect";

const TIME = 300;
const Cities = () => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });

  return (
    <CitiesContainer ref={intersectRef}>
      <City
        cityName="Miami Dade"
        isIntersecting={entry.isIntersecting}
        timeout={TIME * 0}
      />
      <City
        cityName="Broward"
        isIntersecting={entry.isIntersecting}
        timeout={TIME * 1}
      />
      <City
        cityName="West Palm Beach"
        isIntersecting={entry.isIntersecting}
        timeout={TIME * 2}
      />
      <City
        cityName="Monroe"
        isIntersecting={entry.isIntersecting}
        timeout={TIME * 3}
      />
      <City
        cityName="Lee"
        isIntersecting={entry.isIntersecting}
        timeout={TIME * 4}
      />
    </CitiesContainer>
  );
};

export default Cities;
