import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import { signInWithGoogle } from "../services/auth";

const signInBtnStyle = {
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

const SignInBtn = () => {
  const [, setUser] = useContext(UserContext).user;
  const [isHovered, setIsHovered] = useState(false);

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    setUser(user);
  };

  return (
    <button
      style={isHovered ? { ...signInBtnStyle, ...hoverStyle } : signInBtnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="sign in"
      onClick={handleLogin}
    >
      Login
    </button>
  );
};

export default SignInBtn;
