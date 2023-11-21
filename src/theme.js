import { createTheme } from "@mui/material/styles";

const FAMILY = "Raleway,sans-serif";

const SIZE = {
  SMALL: 14,
  SEMI: 16,
  MEDIUM: 18,
  LARGE: 24,
  XLARGE: 32,
  XXLARGE: 80,
};

const WEIGHT = {
  LIGHT: 300,
  MEDIUM: 600,
  BOLD: 800,
};

const LINE_HEIGHT = {
  MEDIUM: 2.5,
};
const COLOR = {
  PRIMARY: "#070E91",
  PRIMARY_DARK: "#05083F",
  PRIMARY_LIGHT: "#e1f5fe",
  SECONDARY: "#FFFFFF",
  BLACK: "#000000",
  GREY: "#666666",
  PURPLE: "#8A0791",
  RED: "#910753",
  RED_LIGHT: "#A56186",

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
    button: {
      fontSize: SIZE.SEMI,
      fontWeight: WEIGHT.BOLD,
      textTransform: "none",
    },
    title: {
      fontSize: SIZE.XLARGE,
      fontWeight: WEIGHT.BOLD,
    },
    largeTitle: {
      fontSize: SIZE.XXLARGE,
      fontWeight: WEIGHT.BOLD,
    },
    paragraph: {
      fontSize: SIZE.SMALL,
      fontWeight: WEIGHT.LIGHT,
      lineHeight: LINE_HEIGHT.MEDIUM,
    },
  },
  palette: {
    primary: {
      main: COLOR.PRIMARY,
      light: COLOR.PRIMARY_LIGHT,
      dark: COLOR.PRIMARY_DARK,
    },
    secondary: {
      main: COLOR.SECONDARY,
      light: COLOR.GREY,
      dark: COLOR.BLACK,
    },
    purple: {
      main: COLOR.PURPLE,
    },
    red:{
      main: COLOR.RED,
      light: COLOR.RED_LIGHT,
    }
  },

  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: SIZE.SEMI,
          fontWeight: WEIGHT.BOLD,
          color: COLOR.SECONDARY,
          "&:after": {
            borderBottom: `2px solid ${COLOR.SECONDARY}`,
          },
          "&:before": {
            borderBottom: `2px solid ${COLOR.PRIMARY}`,
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: `2px solid ${COLOR.SECONDARY}`,
          },
          "&.Mui-focused:after": {
            borderBottom: `2px solid ${COLOR.SECONDARY}`,
          },
        },
      },
    },
  },
});
