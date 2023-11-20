import React from "react";
import { CitiesContainer } from "./styled-components";
import City from "./City";

const Cities = () => {
  return (
    <CitiesContainer>
      <City cityName="Miami Dade" />
      <City cityName="Broward" />
      <City cityName="West Palm Beach" />
      <City cityName="Monroe" />
      <City cityName="Lee" />
    </CitiesContainer>
  );
};

export default Cities;
