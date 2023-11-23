import React from "react";
import { Typography } from "@mui/material";
import { FixedHeaderWrapper , Title} from "./styled-components.jsx";

import backgroundImage from "../../assets/semi.png";
import MenuContent from "../../pages/home/components/Header/MenuContent.jsx";

const PagesHeader = ({title}) => {
  return (
    <FixedHeaderWrapper backgroundImage={backgroundImage}>
      <MenuContent />
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
