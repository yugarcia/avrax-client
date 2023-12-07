import React from "react";
import { Box, Grid } from "@mui/material";
import Service from "../Service/index.jsx";
import { theme } from "../../../../theme.js";
import engIcon from "../../../../assets/image (7).png";
import safetyIcon from "../../../../assets/image (9).png";
import instaIcon from "../../../../assets/image (7) copy.png";
import repairIcon from "../../../../assets/image (9) copy.png";
import lekingIcon from "../../../../assets/image (9) copy 2.png";
import especialMaterialsIcon from "../../../../assets/image (10).png";

const services = [
  {
    image:
      "https://ventanasroma.com/wp-content/uploads/2023/07/instalacion-de-ventanas-de-PVC-scaled.jpg",
    title: "Installation",
    icon: instaIcon,
  },
  {
    image: "https://img.freepik.com/foto-gratis/mano-escribiendo-mujer-negocios-teclado-portatil-cha-financiera_1150-724.jpg?t=st=1701646157~exp=1701646757~hmac=1e15d318348b20b3f680dd636d75e1f8f293e8b5b1e4214ede220bbfcf3a77eb",
    title: "Engineering",
    icon: engIcon,
  },
  {
    image: "https://estaticos-cdn.prensaiberica.es/clip/a96c52d6-7bb3-496c-97ee-de4f4aaaadc0_16-9-aspect-ratio_default_0.jpg",
    title: "Safety",
    icon: safetyIcon,
  },
  {
    image: "https://thermiabarcelona.com/wp-content/uploads/2019/02/ventanas-de-aluminio-condensacion-923x563.jpg",
    title: "Leaking",
    icon: lekingIcon,
  },
  {
    image: "https://png.pngtree.com/background/20230611/original/pngtree-man-working-on-a-window-in-a-living-room-picture-image_3146533.jpg",
    title: "Repair",
    icon: repairIcon,
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/7.jpeg",
    title: "Specialty Materials",
    icon: especialMaterialsIcon,
  },
];

const Services = ({ isTablet }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: isTablet ? "100px 100px" : "100px 20px",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {services.map((service, index) => {
          return (
            <Service
              title={service.title}
              image={service.image}
              icon={service.icon}
              index={index}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
