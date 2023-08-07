import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

import useHover from "../../hooks/useHover";

const paragraphs = [
  "Hello! My name is Wei Jun, and I am a rising senior studing Computer Science and Statistics at University of Washington. Back in 2019, I started my journey as a competitive programmer on Codeforces and found my enthusiasm in technology.",
  "Fast forward to today, I have had the privilege interning at different innovation hubs, including a hybrid cloud corporation and an AI startup. Currently, I have strong interest in full-stack development, systems programming, and machine learning.",
  "When I am not at the computer, I enjoy travelling, chess, table tennis, and having movie night.",
];

const highlightedWords = [
  "Wei Jun",
  "University of Washington",
  "Codeforces",
  "Paul G. Allen School of Computer Science and Engineering",
  "hybrid cloud corporation",
  "AI startup",
];

const highlightParagraph = (paragraph, isHovered) => {
  let ret = paragraph;
  highlightedWords.forEach((word) => {
    ret = ret.replaceAll(word, `HIGHLIGHT[${word}]`);
  });

  const outputArray = ret.split(/(HIGHLIGHT\[[^\]]+\])/).map((part) => {
    if (part.startsWith("HIGHLIGHT[")) {
      const highlightedText = part.slice(10, -1);
      return (
        <Typography
          key={highlightedText}
          component="span"
          color={isHovered ? "primary" : "default"}
          sx={{ fontWeight: "bold" }}
        >
          {highlightedText}
        </Typography>
      );
    }
    return part;
  });

  return outputArray;
};

function About() {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <Card
      sx={{
        display: "flex",
        padding: "2rem",
        flexDirection: "column",
        boxShadow: isHovered ? null : "none",
        bgcolor: isHovered ? null : "background.default",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {paragraphs.map((p) => (
          <Typography variant="body1" component="div" key={p} paragraph>
            {highlightParagraph(p, isHovered)}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default About;
