import React from "react";

import { Box } from "@mui/material";

import ExperienceCard from "../Experience/ExperienceCard";

const project = [
  {
    time: "July 2023 - Present",
    title: "Personal Website",
    description: [
      "Created and maintain a personal website entailed recent employment, achievements, and projects hosted on GitHub Pages",
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
    time: "Jan 2024 - Mar 2024",
    title: "Simple DB",
    description: [
      "Implemented a simple database with features such as catalog, buffer pool, operators, concurrent transactions, rollback, and recovery",
    ],
    skills: ["Java", "SQL"],
    link: "https://courses.cs.washington.edu/courses/cse444/24wi/",
  },
  {
    time: "Sep 2023 - Dec 2023",
    title: "Welp",
    description: [
      "Developed and evaluated the performance of a Yelp-like restaurant microservice",
    ],
    skills: ["Go", "Python", "Docker", "Kubernetes", "gRPC"],
    link: "https://courses.cs.washington.edu/courses/cse453/23au/",
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
    time: "Dec 2022",
    title: "Text Summarizer",
    description: [
      "Train a deep learning model to automatically generate summaries for text documents.",
    ],
    skills: ["PyTorch", "GRU", "Deep Learning"],
    link: "https://weijun428.github.io/text-summarizer/",
  },
  {
    time: "Oct 2022",
    title: "Aidhere",
    description: [
      "Implement a MVP mobile application that helps people in emergency to seek help from nearby certified first responder in DubHacks",
    ],
    skills: ["Java", "Android Studio", "Google Maps", "Figma"],
    link: "https://devpost.com/software/aidhere",
  },
  {
    time: "Mar 2022 - June 2022",
    title: "xk Operating System",
    description: [
      "Implemented syscalls on an OS with a crash-safe file system for multiple processes to CRUD files concurrently",
    ],
    skills: ["C", "QEMU", "GDB", "Operating System"],
    link: "https://courses.cs.washington.edu/courses/cse451/22sp",
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
    time: "Jan 2022 - Mar 2022",
    title: "Remind",
    description: [
      "Created a reminder app with alarm and emergency calls that aims to help people with Alzheimer",
    ],
    skills: ["Java", "Android Studio"],
    link: "https://courses.cs.washington.edu/courses/cse340/22wi/assignments/final-project.html",
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
  {
    time: "June 2021 - Aug 2021",
    title: "Campus Path",
    description: [
      "Built a MVC shortest-path wayfinding tool for UW school campus",
    ],
    skills: ["Java Spring", "TypeScript", "React", "Bootstrap"],
    link: "https://courses.cs.washington.edu/courses/cse331/21su/hw/hw9/hw-campuspaths.html",
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
      component="section"
    >
      {project.map((item) => {
        return <ExperienceCard item={item} key={item.title} />;
      })}
    </Box>
  );
}

export default Project;
