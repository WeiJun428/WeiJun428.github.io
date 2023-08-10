import * as React from "react";

import { ListItemText, Link, Divider } from "@mui/material";
import PropTypes from "prop-types";

import useHover from "../../hooks/useHover";

export default function NavItem({ content, onClick, selected }) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const active = isHovered || selected;
  return (
    <Link
      href={content.link}
      key={content.label}
      underline="none"
      sx={{ color: active ? "primary" : "text.secondary", my: "1rem" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <ListItemText primary={content.label} />
      <Divider
        sx={{
          height: 1,
          width: active ? "5rem" : "0.2rem",
          borderBottom: "3px solid",
          opacity: 0.7,
          mr: "1rem",
          transition: "width 200ms ease-in",
        }}
      />
    </Link>
  );
}

NavItem.propTypes = {
  content: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
