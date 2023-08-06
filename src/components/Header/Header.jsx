import React from "react";

import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";

const paragraphs = [
  "Tech enthusiast who loves full-stack development, systems programming, and data visualization",
];

function Header() {
  return (
    <Card
      sx={{
        display: "flex",
        padding: "2rem",
        flexDirection: "column",
        top: "3rem",
        position: "sticky",
      }}
    >
      <CardContent>
        <Typography component="div" variant="h1">
          Wei Jun Tan
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          sx={{ mb: "1rem" }}
        >
          B.S. Computer Science and Statistics at <br /> University of
          Washington
        </Typography>
        {paragraphs.map((paragraph) => (
          <Typography key={paragraph} variant="subtitle2" component="div">
            {paragraph}
          </Typography>
        ))}
        <ButtonGroup variant="outlined">
          <IconButton>
            <MailIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <ArticleIcon />
          </IconButton>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default Header;
