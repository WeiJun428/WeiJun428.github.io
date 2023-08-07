import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

import Contact from "./Contact";
import useHover from "../../hooks/useHover";

const paragraphs = [
  "Tech enthusiast who loves full-stack development, systems programming, and data visualization",
];

function Header() {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <Card
      sx={{
        display: "flex",
        padding: "2rem",
        flexDirection: "column",
        top: "3rem",
        position: "sticky",
        boxShadow: isHovered ? null : "none",
        bgcolor: isHovered ? null : "bgcolor",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent>
        <Typography
          component="div"
          variant="h1"
          sx={{ color: isHovered ? "primary.main" : null }}
        >
          Wei Jun Tan
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          sx={{ mb: "1rem" }}
        >
          B.S. Computer Science and Statistics at University of Washington
        </Typography>
        {paragraphs.map((paragraph) => (
          <Typography key={paragraph} variant="subtitle2" component="div">
            {paragraph}
          </Typography>
        ))}
        <Contact />
      </CardContent>
    </Card>
  );
}

export default Header;
