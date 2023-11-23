import React from "react";
import { Typography } from "@mui/material";
import { FixedHeaderWrapper, Title } from "./styled-components.jsx";

import backgroundImage from "../../assets/semi.png";
import Menu from "../Menu/index.jsx";

const PagesHeader = ({ title }) => {
  return (
    <FixedHeaderWrapper backgroundImage={backgroundImage}>
      <Menu />
      <Title>
        <Typography
          variant="extraLargeTitle"
          color="primary.light"
          textAlign={"right"}
        >
          {title}
        </Typography>
      </Title>
    </FixedHeaderWrapper>
  );
};

export default PagesHeader;
