import React from "react";
import { CitiesContainer } from "./styled-components";
import City from "./City";
import { useIntersect } from "../../../../hooks/useIntersect";
import { Box, Grid } from "@mui/material";

const TIME = 300;

const cities = [
  { name: "Miami-Dade" },
  { name: "Broward" },
  { name: "West Palm Beach" },
  { name: "Monroe" },
  { name: "Lee" },
  { name: "Hillsborough" },
];

const Cities = () => {
 const [intersectRef, entry] = useIntersect({ threshold: 0 });

  return (
    <CitiesContainer ref={intersectRef}>
      <Box sx={{ flexGrow: 1, padding: "0 50px 100px" }}>
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
              index={index}
            />
          ))}
        </Grid>
      </Box>
    </CitiesContainer>
  );
};

export default Cities;
