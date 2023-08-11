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
        py: "3rem",
        px: {
          xs: "1.5rem",
          sm: "3rem",
          md: "6rem",
        },
      }}
    >
      <Box
        sx={{
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
              xs: "static",
              md: "sticky",
            },
            top: {
              xs: "auto",
              md: "3rem",
            },
            height: "fit-content",
            mb: "3rem",
            px: "1rem",
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
            px: "1rem",
          }}
        >
          <main>
            <section>
              <About />
            </section>
            <section>
              <Experience />
            </section>
            <section>
              <Project />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
