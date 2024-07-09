import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuButton = ({ text, onClick, to, alt }) => {
  return (
    <Stack spacing={2} direction="row">
      {to ? (
        <Button
          variant="text"
          component={Link}
          to={to}
          onClick={onClick}
          aria-label={alt}
          sx={{
            color: 'rgb(139, 195, 74)',
            '&:hover': {
              backgroundColor: 'rgb(139, 195, 74)',
              color: 'black',
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
            color: 'rgb(139, 195, 74)',
            '&:hover': {
              backgroundColor: 'rgb(139, 195, 74)',
              color: 'black',
            },
          }}
        >
          {text}
        </Button>
      )}
    </Stack>
  );
};

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default MenuButton;
