import React from "react";
import { Box, Grid } from "@mui/material";
import Service from "../Service/index.jsx";
import { theme } from "../../../../theme.js";
import engIcon from "../../../../assets/services/engIcon.png";
import safetyIcon from "../../../../assets/services/safetyIcon.png";
import instaIcon from "../../../../assets/services/instaIcon.png";
import repairIcon from "../../../../assets/services/repairIcon.png";
import lekingIcon from "../../../../assets/services/lekingIcon.png";
import especialMaterialsIcon from "../../../../assets/services/especialMaterialsIcon.png";
import engImage from "../../../../assets/services/instalacion-de-ventanas-de-PVC-scaled.jpg";
import safetyImage from "../../../../assets/services/mano-escribiendo-mujer-negocios-teclado-portatil-cha-financiera_1150-724.avif";
import instaImage from "../../../../assets/services/a96c52d6-7bb3-496c-97ee-de4f4aaaadc0_16-9-aspect-ratio_default_0.jpg";
import leakinImage from "../../../../assets/services/ventanas-de-aluminio-condensacion-923x563.jpg";
import repairImage from "../../../../assets/services/pngtree-man-working-on-a-window-in-a-living-room-picture-image_3146533.jpg";
import especialMaterialsImage from "../../../../assets/services/adeolu-eletu-101178-unsplash-1920x1316.jpg";

const services = [
  {
    image: engImage,
    title: "Installation",
    icon: instaIcon,
    paragraph:
      "Installing impact windows and doors requires specialized knowledge and skills. Avrax® has professionals with the training and experience to handle the complex procedures involved, ensuring a proper and secure installation that meets all building codes and manufacturer specifications. Our Professional installers understand the importance of precise measurements, meticulous attention to detail, and proper use of tools and materials. This ensures the installation is not only aesthetically pleasing but also structurally sound and resistant to the elements. Most impact windows and doors come with a manufacturer's warranty, which typically covers defects in materials and workmanship. However, the warranty may be void if the installation is done incorrectly by an unqualified individual, improper installation can create vulnerabilities that compromise the effectiveness of the security features.",
  },
  {
    image: safetyImage,
    title: "Engineering",
    icon: engIcon,
    paragraph:
      "As a License Business, Avrax® Engineering and Permit department identify the scope of work and make the entire process easy and quickly, preparing detailed plans and specifications adhering to building codes and regulations. After research we identify the specific permits required for your project, which may vary depending on location and type of work. This process might be tough and complicate for not hiring the right company to take care of your project. Hire the right company can handle this process on your behalf is synonym of saving your time and hassle.",
  },
  {
    image: instaImage,
    title: "Safety",
    icon: safetyIcon,
    paragraph:
      "Avrax impact Windows and Doors® safety rules and regulations are followed closely and always monitored by one of our superintendence. Our worker’s safety is top priority for us and in order to maintain it we proceed to develop the job under strict conducts in order to avoid any potential hazard. Avrax® operates under Insurance Liability and Workers Compensation policies keeping our employees cover at any time if anything happens.",
  },
  {
    image: leakinImage,
    title: "Leaking",
    icon: lekingIcon,
    paragraph:
      "When a major problem arises, it's crucial to identify the right professional to handle the situation effectively. Avrax® team is 100% commitment with a proper job finished. Many could be the reasons for, cracks in walls, uneven floors, sagging beams, unfinish or unproper sealing with caulking, etc. Calling us you will have a professional taking care of your liability minimizing your potential problem right away and giving you the right solution at the best price. Guaranteed 100%.",
  },
  {
    image: repairImage,
    title: "Repair",
    icon: repairIcon,
    paragraph:
      "When a major problem arises, it's crucial to identify the right professional to handle the situation effectively. Avrax® team is 100% commitment with a proper job finished. Calling us you will have a professional taking care of your liability minimizing your potential problem right away and giving you the right solution at the best price. Guaranteed 100%.",
  },
  {
    image: especialMaterialsImage,
    title: "Specialty Materials",
    icon: especialMaterialsIcon,
    paragraph:
      "Specialty materials play a vital role in the performance and benefits of impact windows and doors. To maintain the highest standards and giving our customer the most advanced technology in our industry, Avrax® is committed to and only works with the most recognized manufacturers, who’s can create windows and doors that offer superior security, weather resistance, energy efficiency, and durability for homeowners (Residential) and business owners (Commercial).",
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
              paragraph={service.paragraph}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
