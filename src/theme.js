import { createTheme } from "@mui/material/styles";

const FAMILY = "Raleway,sans-serif";

const SIZE = {
  SMALL: 14,
  MEDIUM: 18,
  LARGE: 24,
  XLARGE: 32,
};

const WEIGHT = {
  LIGHT: 300,
  MEDIUM: 600,
  BOLD: 800,
};

export const theme = createTheme({
  typography: {
    fontFamily: FAMILY,
    menu: {
      fontSize: SIZE.MEDIUM,
      fontWeight: WEIGHT.BOLD,
    },
    sideMenu: {
      fontSize: SIZE.MEDIUM,
      fontWeight: WEIGHT.LIGHT,
    },
  },
  palette: {
    primary: {
      main: "#070E91",
      light: "#e1f5fe",
    },
  },
});
