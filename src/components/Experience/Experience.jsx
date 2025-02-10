import React from "react";

import { Box, Link, Typography } from "@mui/material";

import ExperienceCard from "./ExperienceCard";

const experience = [
  {
    time: "Mar 2023 - Current",
    title: "Research Assistant - Interactive Data Lab",
    description: [
      "Construct a benchmark of interactive visual graph analysis workflows. Developed an interactive International Whale Catch dashboard",
    ],
    skills: ["Python", "Java", "D3.js"],
    link: "https://idl.uw.edu/",
  },
  {
    time: "Sep 2022 - Current",
    title:
      "Teaching Assistant - Paul G. Allen School of Computer Science and Engineering",
    description: [
      "Assist instruction of Data Visualization (4), Data Structures and Algorithms (1), Browser Engineering (1), and Computer Communication Networks (2) for 8 quarters",
    ],
    skills: ["Python", "Java", "D3.js"],
    link: "https://courses.cs.washington.edu/courses/cse442/",
  },
  {
    time: "June 2024 - Sep 2024",
    title: "Software Engineering Intern - Databricks",
    description: [
      "Build a prober that validate clean room service availability across regions. Onboard view as a new asset in clean room",
    ],
    skills: ["Scala", "Typescript", "Terraform"],
    link: "https://www.databricks.com/",
  },
  {
    time: "Sep 2023 - June 2024",
    title: "Undergraduate Research Assistant - User Empowerment Lab",
    description: [
      "Develop a social messaging platform and research online conflict behaviors in a team of 3",
    ],
    skills: ["React.js", "Firebase", "Bootstrap"],
    link: "https://www.userempowerment.org/",
  },
  {
    time: "June 2023 - Sep 2023",
    title: "Software Defined Networking Intern - Nutanix",
    description: [
      "Created a drag-and-drop wizard that allows client to configure and visualize cloud cluster architecture",
    ],
    skills: ["React.js", "Flask", "Ant Design"],
    link: "https://www.nutanix.com/",
  },
  {
    time: "Sep 2021 - June 2023",
    title: "Developer - Impact++",
    description: [
      "Created and published a Google Sheet add-on to streamline the process of uploading new forms to ODK Central",
    ],
    skills: ["TypeScript", "Apps Script", "Azure"],
    link: "https://udubimpact.weebly.com/",
  },
  {
    time: "June 2022 - Sep 2022",
    title: "Software Engineering (AI/ML) Intern - AkiraKan",
    description: [
      "Accelerated the inference of deep learning model by 2x through migrating to self-compiled TensorFlow C++ API",
    ],
    skills: ["C++", "Python", "Tensorflow"],
    link: "https://www.akirakan.com/",
  },
  {
    time: "Oct 2021 - Dec 2021",
    title: "Freelance Software Developer - Educoo",
    description: [
      "Built a desktop application to help non-tech-savvy educators manage and browse teaching materials",
    ],
    skills: ["Electron.js", "Node.js", "Bootstrap"],
    link: "#",
  },
  {
    time: "Mar 2019 - Apr 2019",
    title: "Project Intern - Sedania Innovator Berhad",
    description: [
      "Examined the authenticity of financing document using Google Cloud Vision OCR API",
    ],
    skills: ["Python"],
    link: "https://www.sedaniainnovator.com/",
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
        my: 10,
      }}
      component="section"
    >
      {experience.map((item) => {
        return <ExperienceCard item={item} key={item.title} />;
      })}
      <Link href="/docs/resume.pdf" underline="hover" sx={{ pl: 2 }}>
        <Typography variant="h2">View full résumé here</Typography>
      </Link>
    </Box>
  );
}

export default Experience;
