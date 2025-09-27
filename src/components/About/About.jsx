import React from "react";

import { Card, CardContent, Link, Typography } from "@mui/material";

import useHover from "../../hooks/useHover";

const paragraphs = [
  "I'm Wei Jun — a software engineer at Databricks focused on backend systems that power large-scale data and AI products. My work often lives at the intersection of performance, reliability, and new feature development.",
  "My journey started in competitive programming on Codeforces — not the most typical entry point, but one that sparked my passion for tech. From there, I grew through academic research and diverse internships during my 5 years at University of Washington.",
  "Outside of tech, you’ll find me exploring new hiking trails, playing chess or ping pong, or chasing down great food — though I’ll argue Malaysia still has the best in the world.",
];

const highlightedWords = [
  {
    text: "Wei Jun",
    link: "https://chat.openai.com/share/58e9ca4b-b318-484c-bd37-4b20a5a853eb",
  },
  {
    text: "University of Washington",
    link: "https://www.washington.edu/",
  },
  {
    text: "Codeforces",
    link: "https://codeforces.com/",
  },
  {
    text: "Databricks",
    link: "https://www.databricks.com/",
  },
  {
    text: "Malaysia",
    link: "https://www.google.com/search?q=Best+food+in+malaysia",
  },
];

// Utility to escape regex special chars
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightParagraph = (paragraph, isHovered) => {
  if (!highlightedWords?.length) return paragraph;

  // Build regex that matches any highlighted word text
  const regex = new RegExp(
    highlightedWords.map((w) => escapeRegExp(w.text)).join("|"),
    "g",
  );

  const parts = [];
  let lastIndex = 0;

  paragraph.replace(regex, (match, offset) => {
    // push preceding plain text
    if (lastIndex < offset) {
      parts.push(paragraph.slice(lastIndex, offset));
    }

    // find the word metadata
    const word = highlightedWords.find((w) => w.text === match);
    if (word) {
      parts.push(
        <Link
          href={word.link}
          key={`${word.text}-${offset}`}
          underline="hover"
          target="_blank"
          color={isHovered ? "primary" : "unset"}
          sx={{
            fontWeight: "bold",
            textDecorationColor: "transparent",
            transition: "400ms",
          }}
        >
          {word.text}
        </Link>,
      );
    }

    lastIndex = offset + match.length;
    return match;
  });

  // push remaining tail
  if (lastIndex < paragraph.length) {
    parts.push(paragraph.slice(lastIndex));
  }

  return parts;
};

function About() {
  const {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  } = useHover();

  return (
    <Card
      sx={{
        display: "flex",
        p: 4,
        flexDirection: "column",
        boxShadow: isHovered ? null : "none",
        bgcolor: isHovered ? null : "background.default",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      id="about"
      component="section"
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          px: { xs: 0, md: "1rem" },
        }}
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
