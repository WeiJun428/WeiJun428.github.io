import React from "react";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Card,
  Box,
  CardContent,
  Typography,
  Chip,
  Link,
  Slide,
  Fade,
} from "@mui/material";
import PropTypes from "prop-types";

import useHover from "../../hooks/useHover";
import useIsVisibleOnce from "../../hooks/useIsVisibleOnce";
import useTyping from "../../hooks/useTyping";

function ExperienceCard({ item }) {
  const {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  } = useHover();
  const headerRef = React.useRef(null);
  const isVisibleOnce = useIsVisibleOnce(headerRef);
  const currentTitle = useTyping({ text: item.title, enabled: isVisibleOnce });

  return (
    <Link
      href={item.link}
      underline="none"
      target={item.link === "#" ? "_self" : "_blank"}
    >
      <Card
        sx={{
          display: "flex",
          boxShadow: isHovered ? null : "none",
          bgcolor: isHovered ? null : "background.default",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "flex-start",
            width: { xs: 1, md: 3 / 10 },
            pb: { xs: 0, md: null },
          }}
        >
          <Typography component="div" variant="subtitle2">
            {item.time}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            width: { xs: 1, md: 7 / 10 },
          }}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography
              component="div"
              variant="h2"
              sx={{ color: isHovered ? "primary.main" : null }}
              ref={headerRef}
            >
              {currentTitle}
              <Fade in={isHovered}>
                <Slide
                  in={isHovered}
                  direction="up"
                  container={headerRef.current}
                >
                  <ArrowOutwardIcon
                    fontSize="small"
                    sx={{
                      ml: 1,
                      position: "absolute",
                    }}
                  />
                </Slide>
              </Fade>
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              {item.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {item.skills.map((skill) => {
                return (
                  <Chip
                    label={skill}
                    variant="outlined"
                    key={skill}
                    size="small"
                    color={isHovered ? "primary" : "default"}
                  />
                );
              })}
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
}

ExperienceCard.propTypes = {
  item: PropTypes.shape({
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExperienceCard;
