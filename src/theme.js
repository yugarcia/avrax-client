import { createTheme } from "@mui/material/styles";

const FAMILY = "Raleway,sans-serif";

const SIZE = {
  SMALL: 14,
  SEMI: 16,
  MEDIUM: 18,
  LARGE: 24,
  LARGER: 28,
  XLARGE: 32,
  XXLARGE: 60,
  XXXLARGE: 80,
};

const WEIGHT = {
  LIGHT: 400,
  MEDIUM: 600,
  BOLD: 800,
};

const LINE_HEIGHT = {
  SMALL: 1,
  SEMI: 1.5,
  MEDIUM: 2.5,
};
const COLOR = {
  // PRIMARY: "#070E91",
  PRIMARY: "#224287",
  // PRIMARY_DARK: "#05083F",
  PRIMARY_DARK: "#0c2458",
  PRIMARY_LIGHT: "#36aaec",
  SECONDARY: "#e1f5fe",

  WHITE: "#FFFFFF",
  BLACK: "#000000",
  GREY: "#666666",
  PURPLE: "#8A0791",
  RED: "#910753",
  RED_LIGHT: "#A56186",
  DARK: "#23262D",
};

export const theme = createTheme({
  typography: {
    fontFamily: FAMILY,
    menu: {
      fontSize: SIZE.MEDIUM,
      fontWeight: WEIGHT.BOLD,
    },
    subMenu: {
      fontSize: SIZE.SMALL,
      fontWeight: WEIGHT.MEDIUM,
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
      lineHeight: LINE_HEIGHT.SMALL,
    },
    extraLargeTitle: {
      fontSize: SIZE.XXXLARGE,
      fontWeight: WEIGHT.BOLD,
    },
    subtitle: {
      fontSize: SIZE.SEMI,
      fontWeight: WEIGHT.LIGHT,
    },
    paragraph: {
      fontSize: SIZE.SEMI,
      fontWeight: WEIGHT.LIGHT,
      lineHeight: LINE_HEIGHT.MEDIUM,
    },
    cardContent: {
      fontSize: SIZE.SEMI,
      fontWeight: WEIGHT.MEDIUM,
      lineHeight: LINE_HEIGHT.SEMI,
    },
    cardTitle: {
      fontSize: SIZE.LARGE,
      fontWeight: WEIGHT.MEDIUM,
      lineHeight: LINE_HEIGHT.SEMI,
    },
    imageTitle: {
      fontSize: SIZE.LARGER,
      fontWeight: WEIGHT.LIGHT,
    },
    alsoText: {
      fontSize: SIZE.LARGE,
      fontWeight: WEIGHT.MEDIUM,
    },
    ourServiceText: {
      fontSize: SIZE.XLARGE,
      fontWeight: WEIGHT.MEDIUM,
    },
    ourNumberTitle: {
      fontSize: SIZE.XXLARGE,
      fontWeight: WEIGHT.MEDIUM,
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
      white: COLOR.WHITE,
    },
    purple: {
      main: COLOR.PURPLE,
    },
    red: {
      main: COLOR.RED,
      light: COLOR.RED_LIGHT,
    },
    background: {
      main: COLOR.DARK,
    },
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

    // MuiCircularProgress: {
    //   styleOverrides: {
    //     root: {
    //       transition: "transform 4300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms",
    //     },
    //   },
    // },
  },
});
