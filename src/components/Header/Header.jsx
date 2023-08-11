import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

import Contact from "./Contact";
import useHover from "../../hooks/useHover";

function Header() {
  const {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  } = useHover();

  return (
    <Card
      sx={{
        display: "flex",
        padding: "2rem",
        flexDirection: "column",
        boxShadow: isHovered ? null : "none",
        bgcolor: isHovered ? null : "background.default",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CardContent sx={{ px: { xs: 0, md: "1rem" } }}>
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
        <Typography variant="subtitle2" component="div" sx={{ mb: "1rem" }}>
          Tech enthusiast who is passionate about full-stack development,
          systems programming, and machine learning
        </Typography>
        <Contact />
      </CardContent>
    </Card>
  );
}

export default Header;
