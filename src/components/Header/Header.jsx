import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

import Contact from "./Contact";
import useHover from "../../hooks/useHover";
import useTyping from "../../hooks/useTyping";

const title = "Wei Jun Tan";
const subtitle =
  "B.S. Computer Science and Statistics at University of Washington";
const paragraph =
  "Tech enthusiast who is passionate about full-stack development, systems programming, and machine learning";

function Header() {
  const {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  } = useHover();

  const currentTitle = useTyping({ text: title });

  return (
    <Card
      sx={{
        display: "flex",
        p: 4,
        flexDirection: "column",
        boxShadow: isHovered ? null : "none",
        bgcolor: isHovered ? null : "background.default",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CardContent sx={{ px: { xs: 0, md: 2 } }}>
        <Typography
          component="div"
          variant="h1"
          sx={{ color: isHovered ? "primary.main" : null }}
        >
          {currentTitle}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          sx={{ mb: 2 }}
        >
          {subtitle}
        </Typography>
        <Typography variant="subtitle2" component="div" sx={{ mb: 2 }}>
          {paragraph}
        </Typography>
        <Contact />
      </CardContent>
    </Card>
  );
}

export default Header;
