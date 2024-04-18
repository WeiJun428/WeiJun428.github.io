import React from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, Tooltip, useTheme } from "@mui/material";

import ColorModeContext from "./ThemeModeContext";

function ThemeToggleButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const isDark = theme.palette.mode === "dark";

  return (
    <Tooltip title={isDark ? "Light Mode" : "Dark Mode"}>
      <IconButton
        onClick={colorMode.toggleThemeMode}
        sx={{
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggleButton;
