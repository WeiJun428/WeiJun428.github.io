import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const headerStyle = {
  fontFamily: ["Playfair Display"],
  fontWeight: 800,
};

// A custom theme for this app
const getTheme = (mode) => {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        background: {
          default: mode === "light" ? "rgba(249, 250, 251, 0.7)" : "#000",
        },
        primary: {
          main: mode === "light" ? red[700] : red[300],
        },
      },
      typography: {
        h1: {
          ...headerStyle,
          fontSize: "3rem",
        },
        h2: {
          ...headerStyle,
          fontSize: "1rem",
        },
        h3: headerStyle,
        h4: headerStyle,
        h5: headerStyle,
        h6: headerStyle,
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
    }),
  );
};

export default getTheme;
