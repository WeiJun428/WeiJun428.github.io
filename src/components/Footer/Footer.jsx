import React from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box component="footer">
      <Typography variant="body1" color="text.secondary">
        Designed by Wei Jun Tan. Built with React CRA and Material UI.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        For fun: Find the hidden{" "}
        <Brightness4Icon fontSize="small" color="primary" /> to switch off the
        light!
      </Typography>
    </Box>
  );
}

export default Footer;
