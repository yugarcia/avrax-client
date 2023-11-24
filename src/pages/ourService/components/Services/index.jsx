import React from "react";
import { Box, Grid } from "@mui/material";
import Service from "../Service/index.jsx";

const services = [
  {
    image:
      "https://avraxwindows.com/wp-content/uploads/2023/11/Installation.jpg",
    title: "Installation",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/21.jpg",
    title: "Engineering",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/safety-1.jpg",
    title: "Safety",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/2-2.jpg",
    title: "Leaking",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/20.jpg",
    title: "Repair",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/7.jpeg",
    title: "Specialty Materials",
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "0 50px 100px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {services.map((service, index) => {
          return <Service title={service.title} image={service.image} index={index} />;
        })}
      </Grid>
    </Box>
  );
};

export default Services;
