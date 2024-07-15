import React, { useContext } from "react";
import CreatePost from "../components/CreatePost";
import Feed from "./FeedPage";
import { UserContext } from "../contexts/user";
import HeaderNewUser from "../components/HeaderNewUser";

const homeStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#101010",
};

export default function HomePage() {
  const [user] = useContext(UserContext).user;
  return (
    <div style={homeStyle}>
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
