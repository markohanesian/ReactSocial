import React from "react";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const MenuButton = ({ text, onClick, to, alt, href }) => {
  return (
    <Button
      variant="text"
      component={href ? 'a' : (to ? RouterLink : 'button')}
      to={to}
      href={href}
      onClick={onClick}
      aria-label={alt}
      sx={{
        color: "white",
        "&.MuiButton-text": {
          color: "white",
        },
        "&:hover": {
          color: "rgb(139, 195, 74)",
        },
        "&.MuiButtonBase-root": {
          display: "flex",
          alignItems: "flex-start",
        },
      }}
    >
      {text}
    </Button>
  );
};

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default MenuButton;
