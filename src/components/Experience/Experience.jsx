import React from "react";

import { Card, Box, CardContent, Typography, Chip } from "@mui/material";

const experience = [
  {
    time: "June 2023 - Present",
    title: "Software Defined Networking Intern - Nutanix",
    description: [
      "Created a drag-and-drop wizard that allows client to configure and visualize cluster architecture in ReactJS; Led a frontend team of 5 to create a security dashboard during week-long intern hackathon",
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
      "Collaborate with 6+ TAs to teach and grade a data visualization class of 130+ students for three quarters; answered more than 100 inquiries in visualization design on discussion board",
    ],
    skills: ["D3.js", "P5.js", "Vega-Lite", "Tableau", "JavaScript", "Python"],
  },
  {
    time: "Sep 2021 - June 2023",
    title: "Developer - Impact++",
    description: [
      "Created and published a Google Sheet add-on to streamline the process of uploading new forms to ODK Central; made 8 individual contribution to Azure JavaScript SDK",
    ],
    skills: ["JavaScript", "TypeScript", "Apps Script", "Azure", "ESLint"],
  },
  {
    time: "June 2022 - Sep 2022",
    title: "Software Engineering (AI/ML) Intern - AkiraKan",
    description: [
      "Built a Python package that monitors the 3D object detection pipelines on edge device using ZeroMQ sockets; accelerated the inference of deep learning model by 2x through migrating to self-compiled TensorFlow C++ API",
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
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        my: 5,
      }}
    >
      {experience.map((item) => {
        return (
          <Card sx={{ display: "flex" }} key={item.title}>
            <CardContent
              sx={{ display: "flex", alignItems: "flex-start", width: 3 / 10 }}
            >
              <Typography
                component="div"
                variant="subtitle2"
                variantMapping="body1"
              >
                {item.time}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                width: 7 / 10,
              }}
            >
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Typography component="div" variant="h2">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {item.skills.map((skill) => {
                    return (
                      <Chip
                        label={skill}
                        variant="outlined"
                        key={skill}
                        size="small"
                        color="primary"
                      />
                    );
                  })}
                </Box>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}

export default Experience;
