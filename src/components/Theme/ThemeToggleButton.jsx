import React from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, Fade, IconButton, useTheme } from "@mui/material";

import ColorModeContext from "./ThemeModeContext";
import useHover from "../../hooks/useHover";

function ThemeToggleButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const timeOutId = React.useRef(null);
  const [isVisible, setIsVisble] = React.useState(false);
  const {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  } = useHover();

  React.useEffect(() => {
    if (isHovered) {
      if (timeOutId.current) {
        clearTimeout(timeOutId.current);
      }
      timeOutId.current = setTimeout(() => {
        setIsVisble(true);
      }, 200);
    } else {
      if (timeOutId.current) {
        clearTimeout(timeOutId.current);
      }
      if (isVisible) {
        setIsVisble(false);
      }
    }
  }, [isHovered, isVisible, setIsVisble]);

  return (
    <Box
      ariaLabel="hidden theme toggle"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Fade in={isVisible}>
        <IconButton
          onClick={colorMode.toggleThemeMode}
          sx={{
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Fade>
    </Box>
  );
}

export default ThemeToggleButton;
