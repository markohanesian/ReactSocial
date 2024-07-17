import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { Box, Avatar, Menu, MenuItem, IconButton, Tooltip, Divider } from '@mui/material';
import MenuButton from './MenuButton';
import SignOutBtn from './SignOutBtn';

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [user] = useContext(UserContext).user;

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start'}}>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} alt="avatar" src={user.photoURL}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            background: "#101010",
            border: "1px solid #fff",
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            padding: 1,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#101010",
              border: "1px solid #fff",
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          ".MuiList-root": {
            display: "flex",
            flexDirection: "column",
            padding: 1
          },
          ".MuiButtonBase-root": {
            justifyContent: "flex-start"
          }
        }}
      >
        <MenuItem>
          <MenuButton text="Feed" to="/feed" alt="Feed page" />
        </MenuItem>
        <MenuItem>
          <MenuButton text="About" to="/about" alt="About Page" />
        </MenuItem>
        <MenuItem>
          <MenuButton text="My Posts" to="/posts" alt="User Posts" />
        </MenuItem>
        <Divider sx={{ width: "100%", bgcolor: "#fff" }} />
        <MenuItem>
          <SignOutBtn />
        </MenuItem>
      </Menu>
    </Box>
  );
}
