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
    link: "#",
  },
  {
    time: "May 2023 - June 2023",
    title: "Holographic Whiteboard",
    description: [
      "Created an AR HoloLens 2 Whiteboard application empowered with Azure OCR service and Wolfram Alpha API",
    ],
    skills: ["Unity", "C#", "MRTK", "Augmented Reality", "Azure OCR"],
    link: "https://courses.cs.washington.edu/courses/cse493v/23sp/public/report_17/index.html",
  },
  {
    time: "Mar 2022 - June 2022",
    title: "xk Operating System",
    description: [
      "Implemented syscalls on an OS with a crash-safe file system for multiple processes to CRUD files concurrently",
    ],
    skills: ["C", "QEMU", "GDB", "Operating System"],
    link: "https://courses.cs.washington.edu/courses/cse451/22sp/index.html",
  },
  {
    time: "Jan 2022 - Mar 2022",
    title: "Codeforces",
    description: [
      "Implemented a website with interactive visualizations and dashboards to promote competitive programming",
    ],
    skills: ["D3.js", "jQuery", "Fullpage.js", "Bootstrap"],
    link: "https://cse442-22w.github.io/FP-codeforces/",
  },
  {
    time: "Mar 2022 - June 2022",
    title: "Vaccine Scheduler",
    description: ["Invented an CLI vaccination appointment scheduler"],
    skills: ["Python", "MS SQL", "Azure"],
    link: "https://sites.google.com/cs.washington.edu/cse414-22sp/",
  },
  {
    time: "Sep 2021 - Dec 2021",
    title: "333gle",
    description: [
      "Created a toy search engine with concurrent networking and disk-backed search query processing with file crawling and indexing",
    ],
    skills: ["C++", "Socket programming", "HTTP", "Boost"],
    link: "https://courses.cs.washington.edu/courses/cse333/21au/",
  },
];

function Project() {
  return (
    <Box
      id="project"
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
