import React from "react";
import { Typography } from "@mui/material";
import { SumaryBox as Box, SumaryContainer } from "./styled-components";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import { useIntersect } from "../../../../hooks/useIntersect";
import { useIncrement } from "../../../../hooks/useIncrement";

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

  return (
    <SumaryContainer ref={intersectRef}>
      <Box isdesktop={isDesktop} istablet={isTablet} background="primary">
        <Typography variant="title" color="primary.light">
          {years}
        </Typography>
        <Typography variant="menu" color="primary.light">
          Years in Business
        </Typography>
      </Box>
      <Box isdesktop={isDesktop} istablet={isTablet} background="primary.light">
        <Typography variant="title" color="primary">
          {houses}+
        </Typography>
        <Typography variant="menu" color="primary">
          Houses Protected
        </Typography>
      </Box>
      <Box isdesktop={isDesktop} istablet={isTablet} background="red.light">
        {" "}
        <Typography variant="title" color="primary.light">
          {projects}
        </Typography>
        <Typography variant="menu" color="primary.light">
          New Projects
        </Typography>
      </Box>
      <Box
        isdesktop={isDesktop}
        istablet={isTablet}
        background="secondary.dark"
      >
        {" "}
        <Typography variant="title" color="primary.light">
          {cities}+
        </Typography>
        <Typography variant="menu" color="primary.light">
          Cities
        </Typography>
      </Box>
    </SumaryContainer>
  );
};

export default Sumary;
