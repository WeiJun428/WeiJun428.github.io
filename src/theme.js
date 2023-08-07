// import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    bgcolor: "rgba(249, 250, 251, 0.7)",
  },
  typography: {
    h1: {
      fontFamily: ["Playfair Display"],
      fontWeight: 800,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: ["Playfair Display"],
      fontWeight: 800,
      fontSize: "1rem",
    },
    h3: {
      fontFamily: ["Playfair Display"],
      fontWeight: 800,
    },
    h4: {
      fontFamily: ["Playfair Display"],
      fontWeight: 800,
    },
    h5: {
      fontFamily: ["Playfair Display"],
      fontWeight: 800,
    },
    h6: {
      fontFamily: ["Playfair Display"],
      fontWeight: 800,
    },
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
});

export default theme;
