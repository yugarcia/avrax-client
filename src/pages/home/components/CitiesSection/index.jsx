import React from "react";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import Cities from "./Cities.jsx";

const WIDTH = 1076;

const CitiesSection = () => {
  const isDesktop = useMediawidth(WIDTH);

  return <Cities isDesktop={isDesktop} />;
};

export default CitiesSection;
