import React from "react";

import { Card, Box, CardContent, Typography } from "@mui/material";

const experience = [
  {
    time: "June 2023 - Present",
    title: "Software Defined Networking Intern - Nutanix",
    description: [
      "Created a drag-and-drop wizard that allows client to configure and visualize cluster architecture in ReactJS",
    ],
  },
  {
    time: "Sep 2022 - June 2023",
    title:
      "Undergraduate Teaching Assistant - Paul G. Allen School of Computer Science and Engineering",
    description: [
      "Answered 100+ students’ inquiries in visualization design, D3.js, P5.js, Tableau, and Vega-Lite on discussion board",
    ],
  },
  {
    time: "Sep 2021 - June 2023",
    title: "Developer - Impact++",
    description: [
      "Created and published a Google Sheet extension to streamline the process of uploading new forms to ODK Central",
    ],
  },
];

function Experience() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "2rem",
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
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}

export default Experience;
