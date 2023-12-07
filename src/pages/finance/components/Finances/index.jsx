import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../Card/index.jsx";

const finances = [
  {
    title: "Affordability",
    image:
      "https://cdn-res.keymedia.com/cdn-cgi/image/w=1000,h=600,f=auto/https://cdn-res.keymedia.com/cms/images/us/075/0308_637928142956252559.jpg",
    paragraph:
      "Impact windows and doors are an investment that can significantly enhance your home's security, energy efficiency, and overall value.",
    direction: "right",
  },
  {
    image:
      "https://www.accru.com/wp-content/uploads/2021/07/Accru-Melb-Cash-Flow-Blog-1-768x461.jpg",
    title: "Improved Cash Flow",
    paragraph:
      "By financing your impact windows and doors, you don't have to deplete your savings or rely on high-interest credit cards to cover the upfront cost.",
    direction: "down",
  },
  {
    image:
      "https://www.indialawoffices.com/images/subcategory/191645770416.jpg",
    title: "Potential Tax Benefits",
    paragraph:
      "In some cases, financing impact windows and doors may qualify for tax credits or deductions. These tax benefits can further reduce the overall cost of the project.",
    direction: "left",
  },
  {
    image:
      "https://blog.easyknock.com/wp-content/uploads/2023/07/Home-Equity-Loan-vs-Second-Mortgage-860x484.jpg",
    title: "Home Equity Preservation",
    paragraph:
      "Instead of depleting your savings, you're essentially trading future payments for the benefits of impact windows and doors. This helps preserve your home equity, which is a valuable asset that can grow over time.",
    direction: "right",
  },
  {
    image:
      "https://s.yimg.com/ny/api/res/1.2/DnrpV1FUa0.EVscoVXI5Fw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/gobankingrates_644/5dd7b577920e1b4777ec371b8bad44d7",
    title: "Enhanced Home Value",
    paragraph:
      "By financing you're essentially making an investment that can potentially yield a higher return when you sell your home in the future.",
    direction: "up",
  },
  {
    image:
      "https://www.segurosbilbao.com/blog/assets/multimedia/2018/04/ventanas-seguridad.jpg",
    title: "Lower Energy Bills",
    paragraph:
      "Impact windows and doors are designed to enhance energy efficiency, reducing heat loss in winter and heat gain in summer. This can lead to lower energy bills and long-term savings on your utility costs.",
    direction: "left",
  },
  {
    image:
      "https://www.aluminiosprado.com/elimine-el-ruido-de-su-casa-cambiando-las-ventanas_img51940t1m0w640h480.jpg",
    title: "Noise Reduction",
    paragraph:
      "Impact windows and doors can effectively block out external noise, creating a quieter and more peaceful living environment. This is particularly beneficial for homes located in areas with high traffic or noise pollution.",
    direction: "up",
  },
];

const Finances = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "5px 50px", overflow: "hidden" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        <>
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
        </>
      </Grid>
    </Box>
  );
};

export default Finances;
