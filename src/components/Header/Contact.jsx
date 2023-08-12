import React from "react";

import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, ButtonGroup, Link } from "@mui/material";

import ThemeToggleButton from "../Theme/ThemeToggleButton";

const data = [
  {
    link: "mailto:wj428@uw.edu",
    icon: <MailIcon />,
  },
  {
    link: "https://www.linkedin.com/in/wei-jun-tan/",
    icon: <LinkedInIcon />,
  },
  {
    link: "https://github.com/WeiJun428",
    icon: <GitHubIcon />,
  },
  {
    link: "TODO: resume",
    icon: <ArticleIcon />,
  },
];

function Contact() {
  return (
    <ButtonGroup variant="outlined">
      {data.map((d) => {
        return (
          <Link
            href={d.link}
            key={d.link}
            target={d.link.startsWith("https") ? "_blank" : "_self"}
          >
            <IconButton
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {d.icon}
            </IconButton>
          </Link>
        );
      })}
      <ThemeToggleButton />
    </ButtonGroup>
  );
}

export default Contact;
