import * as React from "react";

import { Box } from "@mui/material";

import NavItem from "./NavItem";

const content = [
  { label: "About", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Project", link: "#project" },
];

export default function Nav() {
  const [value, setValue] = React.useState(0);
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

  const handleClick = (newValue) => {
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
    <Box
      sx={{
        width: "fit-content",
        mx: "3rem",
        mt: "3rem",
        textAlign: "left",
      }}
    >
      {content.map((c, i) => {
        return (
          <NavItem
            content={c}
            onClick={() => handleClick(i)}
            selected={value === i}
            key={c.label}
          />
        );
      })}
    </Box>
  );
}
