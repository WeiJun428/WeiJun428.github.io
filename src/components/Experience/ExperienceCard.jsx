import React from "react";

import { Card, Box, CardContent, Typography, Chip } from "@mui/material";
import PropTypes from "prop-types";

function ExperienceCard({ item }) {
  return (
    <Card sx={{ display: "flex" }} key={item.title}>
      <CardContent
        sx={{ display: "flex", alignItems: "flex-start", width: 3 / 10 }}
      >
        <Typography component="div" variant="subtitle2" variantMapping="body1">
          {item.time}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          width: 7 / 10,
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography component="div" variant="h2">
            {item.title}
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
                  color="primary"
                />
              );
            })}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

ExperienceCard.propTypes = {
  item: PropTypes.shape({
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard;
