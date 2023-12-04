import React from "react";
import { GridLines, GridLine } from "./styled-components.jsx";

const BackgroundLines = () => {
  return (
    <GridLines>
      {Array.from(Array(7).keys()).map((item, index) => (
        <GridLine key={index} delay={index % 2 ? 0 : 1} />
      ))}
    </GridLines>
  );
};

export default BackgroundLines;
