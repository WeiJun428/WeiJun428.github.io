import React from "react";

import { Box } from "@mui/material";

import ExperienceCard from "../Experience/ExperienceCard";

const project = [
  {
    time: "July 2023 - Present",
    title: "Personal Website",
    description: [
      "Created a personal website entailed recent employment, achievements, and projects hosted on GitHub Pages",
    ],
    skills: [
      "React",
      "JavaScript",
      "Material UI",
      "MUI System",
      "Github Pages",
    ],
  },
];

function Project() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        my: 5,
      }}
    >
      {project.map((item) => {
        return <ExperienceCard item={item} key={item.title} />;
      })}
    </Box>
  );
}

export default Project;
