import * as React from "react";

import StarIcon from "@mui/icons-material/Star";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  ListItemIcon,
} from "@mui/material";

const content = [
  { label: "About", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Project", link: "#project" },
];

export default function VerticalTabs() {
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
    <List sx={{ mx: "3rem", textAlign: "left" }}>
      {content.map((c, i) => {
        const selected = value === i;
        return (
          <Link
            href={c.link}
            key={c.label}
            underline="none"
            sx={{ color: selected ? "primary" : "text.secondary" }}
          >
            <ListItem disablePadding>
              <ListItemButton
                selected={selected}
                onClick={() => handleClick(i)}
              >
                <ListItemIcon>
                  <StarIcon sx={{ display: selected ? null : "none" }} />
                </ListItemIcon>
                <ListItemText primary={c.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );

  // return (
  //   <Tabs
  //     orientation="vertical"
  //     value={value}
  //     onChange={handleChange}
  //     sx={{ width: 130, m: 0, textAlign: "left" }}
  //   >
  //     <LinkTab label="About" href="#about" />
  //     <LinkTab label="Experience" href="#experience" />
  //     <LinkTab label="Project" href="#project" />
  //   </Tabs>
  // );
}
