import React from "react";
import { CitiesContainer } from "./styled-components";
import City from "./City";
import { useIntersect } from "../../../../hooks/useIntersect";
import { Box, Grid } from "@mui/material";
import backgroungImage from "../../../../assets/cities.jpg";

const TIME = 300;

const cities = [
  { name: "Miami-Dade" },
  { name: "Broward" },
  { name: "West Palm Beach" },
  { name: "Monroe" },
  { name: "Lee" },
  { name: "Hillsborough" },
];

const Cities = ({isDesktop}) => {
 const [intersectRef, entry] = useIntersect({ threshold: 0 });

  return (
    <CitiesContainer ref={intersectRef} isDesktop={isDesktop} backgroungImage={backgroungImage}>
      <Box sx={{ flexGrow: 1, padding: "150px 0 0" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, md: 3 }}
        >
          {cities.map((city, index) => (
            <City
              cityName={city.name}
              isIntersecting={entry.isIntersecting}
              timeout={TIME * index}
              key={index}
            />
          ))}
        </Grid>
      </Box>
    </CitiesContainer>
  );
};

export default Cities;
