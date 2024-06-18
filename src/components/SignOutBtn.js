import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import { logout } from "../services/auth";

const signOutBtnStyle = {
  fontFamily: "sans-serif",
  fontSize: "16px",
  padding: "10px 20px",
  border: "1px solid rgb(139, 195, 74)",
  backgroundColor: "transparent",
  color: "rgb(139, 195, 74)",
  cursor: "pointer",
  transition: "background-color 0.3s, color 0.3s",
};

const hoverStyle = {
  backgroundColor: "rgb(139, 195, 74)",
  color: "black",
};
const SignOutBtn = () => {
  const [, setUser] = useContext(UserContext).user;
  const [isHovered, setIsHovered] = useState(false);

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setUser(null);
    }
  };

  return (
    <button
      style={isHovered ? { ...signOutBtnStyle, ...hoverStyle } : signOutBtnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Log out of account"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default SignOutBtn;
