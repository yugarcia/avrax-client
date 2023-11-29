import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../Card/index.jsx";

const finances = [
  {
    title: "Affordability",
    image:
      "https://avraxwindows.com/wp-content/uploads/2023/11/Installation.jpg",
    paragraph:
      "Impact windows and doors are an investment that can significantly enhance your home's security, energy efficiency, and overall value.",
    direction: "right",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/21.jpg",
    title: "Improved Cash Flow",
    paragraph:
      "By financing your impact windows and doors, you don't have to deplete your savings or rely on high-interest credit cards to cover the upfront cost.",
    direction: "down",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/safety-1.jpg",
    title: "Potential Tax Benefits",
    paragraph:
      "In some cases, financing impact windows and doors may qualify for tax credits or deductions. These tax benefits can further reduce the overall cost of the project.",
    direction: "left",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/2-2.jpg",
    title: "Home Equity Preservation",
    paragraph:
      "Instead of depleting your savings, you're essentially trading future payments for the benefits of impact windows and doors. This helps preserve your home equity, which is a valuable asset that can grow over time.",
    direction: "right",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/20.jpg",
    title: "Enhanced Home Value",
    paragraph:
      "By financing you're essentially making an investment that can potentially yield a higher return when you sell your home in the future.",
    direction: "up",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/7.jpeg",
    title: "Lower Energy Bills",
    paragraph:
      "Impact windows and doors are designed to enhance energy efficiency, reducing heat loss in winter and heat gain in summer. This can lead to lower energy bills and long-term savings on your utility costs.",
    direction: "left",
  },
  {
    image: "https://avraxwindows.com/wp-content/uploads/2023/11/7.jpeg",
    title: "Noise Reduction",
    paragraph:
      "Impact windows and doors can effectively block out external noise, creating a quieter and more peaceful living environment. This is particularly beneficial for homes located in areas with high traffic or noise pollution.",
    direction: "up",
  },
];

const Finances = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "0 50px", overflow: "hidden" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {finances.map((finance, index) => {
          return (
            <Card
              index={index}
              title={finance.title}
              image={finance.image}
              paragraph={finance.paragraph}
              direction={finance.direction}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Finances;
