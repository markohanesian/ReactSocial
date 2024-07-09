import React, { useContext } from "react";
import { UserContext } from "../contexts/user";
import { logout } from "../services/auth";
import MenuButton from "./MenuButton";

const SignOutBtn = () => {
  const [, setUser] = useContext(UserContext).user;

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setUser(null);
    }
  };

  return (
    <MenuButton
      aria-label="Log out of account"
      onClick={handleLogout}
    >
      Logout
    </MenuButton>
  );
};

export default SignOutBtn;
