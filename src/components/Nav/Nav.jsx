import * as React from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";
import LinkTab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import useHover from "../../hooks/useHover";

const paragraph = [
  "Learn more about who Wei Jun is!",
  "What is he working on now?",
  "What he have built?",
];

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const isScrolling = React.useRef(false);
  const timeOutId = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) {
        return;
      }
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section, i) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
        ) {
          setValue(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
    }
    isScrolling.current = true;
    timeOutId.current = setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  return (
    <Card
      sx={{
        boxShadow: isHovered ? null : "none",
        bgcolor: isHovered ? null : "background.default",
        py: 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            sx={{ width: 130, m: 0 }}
          >
            <LinkTab label="About" href="#about" />
            <LinkTab label="Experience" href="#experience" />
            <LinkTab label="Project" href="#project" />
          </Tabs>
          <Box sx={{ p: "1rem" }}>
            <Typography
              variant="body1"
              component="div"
              color="text.secondary"
              paragraph
            >
              {paragraph[value]}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
