import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

import useHover from "../../hooks/useHover";

const paragraphs = [
  "Hello! My name is Wei Jun, and I am a rising senior at University of Washington. Back in 2019, I started my journey as a competitive programmer on Codeforces and found my enthusiasm in technology.",
  "Fast forward to today, I have had the privilege working at different innovation hubs, including hybrid cloud corporation, AI startup, and Paul G. Allen School. I have strong interest in full-stack development, systems programming, and machine learning.",
  "When I am not at the computer, I enjoy travelling, chess, table tennis, and having movie night.",
];

function About() {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    <Card
      sx={{
        display: "flex",
        padding: "2rem",
        flexDirection: "column",
        boxShadow: isHovered ? null : "none",
        bgcolor: isHovered ? null : "bgcolor",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {paragraphs.map((p) => (
          <Typography variant="body1" component="div" key={p}>
            {p}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default About;
