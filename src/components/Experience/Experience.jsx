import React from "react";

import { Box } from "@mui/material";

import ExperienceCard from "./ExperienceCard";

const experience = [
  {
    time: "June 2023 - Present",
    title: "Software Defined Networking Intern - Nutanix",
    description: [
      "Created a drag-and-drop wizard that allows client to configure and visualize cloud cluster architecture",
    ],
    skills: [
      "React",
      "React Flow",
      "JavaScript",
      "Ant Design",
      "Less.js",
      "Flask",
    ],
  },
  {
    time: "Sep 2022 - June 2023",
    title:
      "Undergraduate Teaching Assistant - Paul G. Allen School of Computer Science and Engineering",
    description: [
      "Collaborate with 6+ TAs to teach and grade a data visualization class of 130+ students for 3 quarters",
    ],
    skills: ["D3.js", "P5.js", "Vega-Lite", "Tableau", "JavaScript", "Python"],
  },
  {
    time: "Sep 2021 - June 2023",
    title: "Developer - Impact++",
    description: [
      "Created and published a Google Sheet add-on to streamline the process of uploading new forms to ODK Central",
    ],
    skills: ["JavaScript", "TypeScript", "Apps Script", "Azure", "ESLint"],
  },
  {
    time: "June 2022 - Sep 2022",
    title: "Software Engineering (AI/ML) Intern - AkiraKan",
    description: [
      "Accelerated the inference of deep learning model by 2x through migrating to self-compiled TensorFlow C++ API",
    ],
    skills: ["C++", "Python", "Tensorflow", "Flatbuffers", "ZeroMQ", "Docker"],
  },
  {
    time: "Oct 2021 - Dec 2021",
    title: "Freelance Software Developer - Educoo",
    description: [
      "Built a desktop application to help non-tech-savvy educators manage and browse teaching materials",
    ],
    skills: ["Electron.js", "Node.js", "jQuery", "Bootstrap"],
  },
  {
    time: "Mar 2019 - Apr 2019",
    title: "Project Intern - Sedania Innovator Berhad",
    description: [
      "Examined the authenticity of financing document using Google Cloud Vision OCR API",
    ],
    skills: ["Python", "Marvel"],
  },
];

function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        my: 5,
      }}
    >
      {experience.map((item) => {
        return <ExperienceCard item={item} key={item.title} />;
      })}
    </Box>
  );
}

export default Experience;
