import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import { Button } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

export default function SignInBtn() {
  const [, setUser] = useContext(UserContext).user;
  const [isHovered, setIsHovered] = useState(false);

  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <Button
      variant="outlined"
      style={isHovered ? { ...signInBtnStyle, ...hoverStyle } : signInBtnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="sign in with Google"
      onClick={handleLogin}
    >
      Login
    </Button>
  );
};


