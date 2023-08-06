import React from "react";

import { Box } from "@mui/material";

import About from "../About/About";
import Experience from "../Experience/Experience";
import AppBar from "../NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <AppBar />
      <Box
        sx={{
          padding: "3rem 15vw",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <About />
        <Experience />
      </Box>
    </div>
  );
}

export default App;
