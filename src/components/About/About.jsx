import React from "react";

import { Card, CardContent, Link, Typography } from "@mui/material";

import useHover from "../../hooks/useHover";

const paragraphs = [
  "Hello! My name is Wei Jun, and I am a rising senior studing Computer Science and Statistics at University of Washington. Back in 2019, I started my journey as a competitive programmer on Codeforces and found my enthusiasm in technology.",
  "Fast forward to today, I have had the privilege building software for a hybrid cloud corporation, an AI startup, a data collection platform, and an education platform. Currently, I have strong interest in full-stack development, systems programming, and machine learning.",
  "When I am not at the computer, I enjoy travelling, chess, table tennis, and having movie night.",
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
    text: "hybrid cloud corporation",
    link: "https://www.nutanix.com/",
  },
  {
    text: "AI startup",
    link: "https://www.akirakan.com/",
  },
  {
    text: "data collection platform",
    link: "https://getodk.org/",
  },
  {
    text: "education platform",
    link: "#",
  },
];

const highlightParagraph = (paragraph, isHovered) => {
  let ret = paragraph;
  highlightedWords.forEach((word) => {
    ret = ret.replaceAll(word.text, `HIGHLIGHT[${JSON.stringify(word)}]`);
  });

  const outputArray = ret.split(/(HIGHLIGHT\[[^\]]+\])/).map((part) => {
    if (part.startsWith("HIGHLIGHT[")) {
      const obj = JSON.parse(part.slice(10, -1));
      return (
        <Link
          href={obj.link}
          key={obj.text}
          underline="hover"
          target="_blank"
          color={isHovered ? "primary" : "unset"}
          sx={{
            fontWeight: "bold",
            textDecorationColor: "transparent",
            transition: "400ms",
          }}
        >
          {obj.text}
        </Link>
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
      id="about"
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
