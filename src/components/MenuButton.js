import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const MenuButton = ({ text, onClick, to }) => {
  return (
    <Stack spacing={2} direction="row">
      {to ? (
        <Button variant="text" component={Link} to={to} onClick={onClick}>
          {text}
        </Button>
      ) : (
        <Button variant="text" onClick={onClick}>
          {text}
        </Button>
      )}
    </Stack>
  );
};

export default MenuButton;
