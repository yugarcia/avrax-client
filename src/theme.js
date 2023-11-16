import { createTheme } from "@mui/material/styles";

const FAMILY = "Raleway,sans-serif";

const SIZE = {
  SMALL: 14,
  SEMI: 16,
  MEDIUM: 18,
  LARGE: 24,
  XLARGE: 32,
};

const WEIGHT = {
  LIGHT: 300,
  MEDIUM: 600,
  BOLD: 800,
};

const COLOR = {
  PRIMARY: "#070E91",
  PRIMARY_LIGHT: "#e1f5fe",
  SECONDARY: "#FFFFFF",
};

export const theme = createTheme({
  typography: {
    fontFamily: FAMILY,
    menu: {
      fontSize: SIZE.MEDIUM,
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
  },
  palette: {
    primary: {
      main: COLOR.PRIMARY,
      light: COLOR.PRIMARY_LIGHT,
    },
    secondary: {
      main: COLOR.SECONDARY,
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
  },
});
