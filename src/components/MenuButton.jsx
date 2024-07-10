import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuButton = ({ text, onClick, to, alt }) => {
  return (
    <>
      {to ? (
        <Button
          variant="text"
          component={Link}
          to={to}
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
            "&.MuiButtonbase-root": {
              display: "flex",
            },
          }}
        >
          {text}
        </Button>
      ) : (
        <Button
          variant="text"
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
            "&.MuiButtonbase-root": {
              display: "flex",
              alignItems: "flex-start"
            },
          }}
        >
          {text}
        </Button>
      )}
    </>
  );
};

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default MenuButton;
