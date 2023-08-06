import React from "react";

import { Card, Box, CardContent, Typography, Stack, Chip } from "@mui/material";

const experience = [
  {
    time: "June 2023 - Present",
    title: "Software Defined Networking Intern - Nutanix",
    description: [
      "Created a drag-and-drop wizard that allows client to configure and visualize cluster architecture in ReactJS",
    ],
    skills: ["React", "JavaScript", "Ant Design", "Less.js", "Flask"],
  },
  {
    time: "Sep 2022 - June 2023",
    title:
      "Undergraduate Teaching Assistant - Paul G. Allen School of Computer Science and Engineering",
    description: [
      "Answered 100+ students’ inquiries in visualization design, D3.js, P5.js, Tableau, and Vega-Lite on discussion board",
    ],
    skills: ["D3.js", "P5.js", "Vega-Lite", "Tableau", "JavaScript", "Python"],
  },
  {
    time: "Sep 2021 - June 2023",
    title: "Developer - Impact++",
    description: [
      "Created and published a Google Sheet add-on to streamline the process of uploading new forms to ODK Central",
    ],
    skills: ["JavaScript", "TypeScript", "Azure", "ESLint"],
  },
  {
    time: "June 2022 - Sep 2022",
    title: "Software Engineering (AI/ML) Intern - AkiraKan",
    description: [
      "Built a Python package that monitors the 3D object detection pipelines on edge device using ZeroMQ sockets",
    ],
    skills: ["C++", "Python", "Tensorflow", "Flatbuffers", "ZeroMQ", "Docker"],
  },
  {
    time: "Oct 2021 - Dec 2021",
    title: "Freelance Software Developer - Educoo",
    description: [
      "Built a native desktop application to help non-tech-savvy educators manage and browse teaching materials",
    ],
    skills: ["Electron.js", "Node.js", "Bootstrap"],
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
      sx={{
        display: "flex",
        gap: "2rem",
        flex: "1 8",
        flexDirection: "column",
      }}
    >
      {experience.map((item) => {
        return (
          <Card sx={{ display: "flex", m: 1 }} key={item.title}>
            <Box
              sx={{ display: "flex", alignItems: "flex-start", width: 1 / 4 }}
            >
              <CardContent>{item.time}</CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                width: 3 / 4,
              }}
            >
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Typography component="div" variant="h2">
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{ mb: "1rem" }}
                >
                  {item.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Stack direction="row" spacing={1}>
                  {item.skills.map((skill) => {
                    return <Chip label={skill} color="primary" key={skill} />;
                  })}
                </Stack>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}

export default Experience;
