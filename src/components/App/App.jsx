import React from "react";

import { Box } from "@mui/material";

import About from "../About/About";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Project from "../Project/Project";

function App() {
  return (
    <Box
      sx={{
        py: {
          xs: 3,
          sm: 6,
        },
        px: {
          xs: 1.5,
          sm: 3,
          md: 6,
          xl: 18,
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: 1,
            md: 2 / 5,
          },
          position: {
            md: "sticky",
          },
          top: {
            md: "3rem",
          },
          height: "fit-content",
          mb: 6,
          px: 2,
        }}
      >
        <Header />
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Nav />
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: 1,
            md: 3 / 5,
          },
          px: 2,
        }}
      >
        <main>
          <About />
          <Experience />
          <Project />
        </main>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
