import React from "react";

import { Typography } from "@mui/material";

function Footer() {
  return (
    <Typography
      variant="body1"
      color="text.secondary"
      component="footer"
      sx={{ pl: 2 }}
    >
      Designed by Wei Jun Tan. Built with React and MUI. &copy; 2024
    </Typography>
  );
}

export default Footer;
