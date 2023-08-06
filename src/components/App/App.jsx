import React from "react";

import { Box } from "@mui/material";

import About from "../About/About";
import Experience from "../Experience/Experience";

function App() {
  return (
    <Box className="app" sx={{ bgcolor: "bgcolor" }}>
      <Box
        sx={{
          padding: "3rem 10vw",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <About />
        <Box>
          <Experience />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
