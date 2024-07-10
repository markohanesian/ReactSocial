import React, { useContext } from "react";
import CreatePost from "./CreatePost";
import Feed from "./feed";
import { UserContext } from "../contexts/user";
import HeaderNewUser from "./HeaderNewUser";

const homeStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#101010",
};

export default function Home() {
  const [user] = useContext(UserContext).user;
  return (
    <div style={homeStyle}>
      {/* if user is signed in, display feed */}
      {user ? (
        <>
          <Feed />
          <CreatePost />
        </>
      ) : (
        <HeaderNewUser />
      )}
    </div>
  );
}
