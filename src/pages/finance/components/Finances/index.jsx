import React from "react";
import { FinanceContainer } from "../../styled-components.jsx";
import CircularComponent from "../CircularListComponent/index.jsx";
import NoiseAwareIcon from "@mui/icons-material/NoiseAware";
import BoltIcon from "@mui/icons-material/Bolt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { useMediawidth } from "../../../../hooks/useMediawidth";

import { theme } from "../../../../theme.js";

const WIDTH = 1076;

const finances = [
  {
    title: "Affordability",
    paragraph:
      "Impact windows and doors are an investment that can significantly enhance your home's security, energy efficiency, and overall value.",
    icon: (
      <ShoppingCartCheckoutIcon
        sx={{ color: theme.palette.secondary.white, fontSize: 40 }}
      />
    ),
  },
  {
    title: "Improved Cash Flow",
    paragraph:
      "By financing your impact windows and doors, you don't have to deplete your savings or rely on high-interest credit cards to cover the upfront cost.",
    icon: (
      <CurrencyExchangeIcon
        sx={{ color: theme.palette.secondary.white, fontSize: 40 }}
      />
    ),
  },
  {
    title: "Potential Tax Benefits",
    paragraph:
      "In some cases, financing impact windows and doors may qualify for tax credits or deductions. These tax benefits can further reduce the overall cost of the project.",
    icon: (
      <AccountBalanceOutlinedIcon
        sx={{ color: theme.palette.secondary.white, fontSize: 40 }}
      />
    ),
  },
  {
    title: "Home Equity Preservation",
    paragraph:
      "Instead of depleting your savings, you're essentially trading future payments for the benefits of impact windows and doors. This helps preserve your home equity, which is a valuable asset that can grow over time.",
    icon: (
      <HomeOutlinedIcon
        sx={{ color: theme.palette.secondary.white, fontSize: 40 }}
      />
    ),
  },
  {
    title: "Enhanced Home Value",
    paragraph:
      "By financing you're essentially making an investment that can potentially yield a higher return when you sell your home in the future.",
    icon: (
      <HomeWorkOutlinedIcon
        sx={{ color: theme.palette.secondary.white, fontSize: 40 }}
      />
    ),
  },
  {
    title: "Lower Energy Bills",
    paragraph:
      "Impact windows and doors are designed to enhance energy efficiency, reducing heat loss in winter and heat gain in summer. This can lead to lower energy bills and long-term savings on your utility costs.",
    icon: (
      <BoltIcon sx={{ color: theme.palette.secondary.white, fontSize: 40 }} />
    ),
  },
  {
    title: "Noise Reduction",
    paragraph:
      "Impact windows and doors can effectively block out external noise, creating a quieter and more peaceful living environment. This is particularly beneficial for homes located in areas with high traffic or noise pollution.",
    icon: (
      <NoiseAwareIcon
        sx={{ color: theme.palette.secondary.white, fontSize: 40 }}
      />
    ),
  },
];

const Finances = () => {
  const isDesktop = useMediawidth(WIDTH);

  return (
    <FinanceContainer isDesktop={isDesktop}>
      <CircularComponent segments={finances} />
    </FinanceContainer>
  );
};

export default Finances;
