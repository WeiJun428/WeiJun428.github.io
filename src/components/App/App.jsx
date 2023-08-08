import React from "react";

import { Box } from "@mui/material";

import About from "../About/About";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Project from "../Project/Project";

function App() {
  return (
    <Box
      sx={{
        p: "3rem 10vw",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "horizontal" }}>
        <Box
          sx={{
            width: 2 / 5,
            position: "sticky",
            top: "3rem",
            height: "80vh",
          }}
        >
          <Header />
          <Nav />
        </Box>
        <Box sx={{ width: 3 / 5, px: "2rem" }}>
          <main>
            <About />
            <Experience />
            <Project />
          </main>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
