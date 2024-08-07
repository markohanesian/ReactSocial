import React, { useContext } from "react";
import { UserContext } from "../contexts/user";
import SignInBtn from "./SignInBtn";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import MenuButton from "./MenuButton";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#101010",
  padding: "1rem",
};

const navLeftStyle = {
  display: "flex",
  alignItems: "center",
};

const LogoStyle = {
  padding: "0 1rem 0 1rem",
  marginBottom: "4px",
  fontSize: "1.2rem",
  fontWeight: "800",
  textDecoration: "none",
  color: "rgb(139, 195, 74)",
};

export default function NavBar() {
  const [user] = useContext(UserContext).user;
  return (
    <div style={navStyle}>
      <div style={navLeftStyle}>
        <Link to="/" style={LogoStyle} alt="navigate to home">
          ReactSocial
        </Link>
        <MenuButton
          component="link"
          text="About"
          to="/about"
          alt="About Page"
        />
      </div>
      {/* if user is signed in, display profile menu in navbar */}
      {user ? (
        <>
          <ProfileMenu />
        </>
      ) : (
        <div style={{ width: "110px", marginRight: "1rem" }}>
          <SignInBtn />
        </div>
      )}
    </div>
  );
}
