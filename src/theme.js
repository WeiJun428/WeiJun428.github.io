// import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    bgcolor: "rgba(249, 250, 251, 0.7)",
    // mode: "dark",
  },
  // palette: {
  // primary: {
  //   main: red[700],
  // },
  // secondary: {
  //   main: red[400],
  // },
  // error: {
  //   main: red.A400,
  // },
  // },
  typography: {
    h1: {
      fontFamily: ["Playfair Display"],
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: ["Playfair Display"],
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h3: {
      fontFamily: ["Playfair Display"],
      fontWeight: 600,
    },
    h4: {
      fontFamily: ["Playfair Display"],
      fontWeight: 600,
    },
    h5: {
      fontFamily: ["Playfair Display"],
      fontWeight: 600,
    },
    h6: {
      fontFamily: ["Playfair Display"],
      fontWeight: 600,
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
