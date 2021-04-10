import { createMuiTheme } from "@material-ui/core/styles";

export const theme = {
  palette: {
    primary: {
      light: "#4C00C2",
      main: "#3B058E",
      dark: "#32007E",
      contrastText: "#fff",
    },
    secondary: {
      light: "#D3D8E1",
      main: "#798291",
      dark: "#444E5D",
      contrastText: "#fff",
    },
    common: {
      white: "#FFFFFF",
      grey: "#E5E5E5",
      black: "#1A212C",
      red: "#FC484C",
      green: "#19AC51",
    },
  },
  spacings: {
    4: "4px",
    8: "8px",
    16: "16px",
    24: "24px",
    32: "32px",
    40: "40px",
    48: "48px",
    56: "56px",
  },
  fontSize: {
    10: "10px",
    14: "14px",
    16: "16px",
    24: "24px",
    30: "30px",
  },
  borderRadius: {
    16: "16px",
    24: "24px",
    100: "100px",
  },
  typography: {
    fontFamily: `CircularPro`,
  },
};

export default createMuiTheme(theme);
