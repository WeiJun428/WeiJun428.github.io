import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Avatar,
} from "@mui/material";

import ProfilePicture from "../../img/profile.jpg";

const paragraphs = [
  "Meet Wei Jun, a tech enthusiast who thrives on excitement and innovation! With a passion cultivated through hackathons, coding contests, open-source contributions, Wei Jun's journey has been nothing short of thrilling. As a versatile freelancer and intern, they've honed their skills while crafting impactful projects. From solving captivating problems, big or small, he finds pure joy in the world of technology! 🚀",
];

function About() {
  return (
    <Card sx={{ display: "flex", padding: "2rem" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginRight: "2rem" }}>
        <CardMedia>
          <Avatar
            alt="Remy Sharp"
            src={ProfilePicture}
            sx={{ width: 250, height: 250 }}
          />
        </CardMedia>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h1">
            Wei Jun Tan
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ mb: "1rem" }}
          >
            BS Computer Science and Statistics @University of Washington
          </Typography>
          {paragraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" component="div">
              {paragraph}
            </Typography>
          ))}
        </CardContent>
      </Box>
    </Card>
  );
}

export default About;
