import React from "react";

import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, ButtonGroup, Link, Tooltip } from "@mui/material";

import ThemeToggleButton from "../Theme/ThemeToggleButton";

const data = [
  {
    link: "mailto:wj428@uw.edu",
    icon: <MailIcon />,
    label: "Mail",
  },
  {
    link: "https://www.linkedin.com/in/wei-jun-tan/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  {
    link: "https://github.com/WeiJun428",
    icon: <GitHubIcon />,
    label: "GitHub",
  },
  {
    link: "/docs/resume.pdf",
    icon: <ArticleIcon />,
    label: "Resume",
  },
];

function Contact() {
  return (
    <ButtonGroup variant="outlined">
      {data.map((d) => {
        return (
          <Tooltip title={d.label} key={d.link}>
            <Link
              href={d.link}
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
          </Tooltip>
        );
      })}
      <ThemeToggleButton />
    </ButtonGroup>
  );
}

export default Contact;
