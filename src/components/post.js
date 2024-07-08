import React, { useContext } from "react";
import Comment from "./comment";
import CommentInput from "./CommentInput";
import { UserContext } from "../contexts/user";
import Liker from "./Liker";
import { db } from "../firebase";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const PostStyle = {
  padding: "1rem",
  margin: "1rem",
  backgroundColor: "white",
  width: "90vw",
  maxWidth: "600px",
  position: "relative",
};

const PostHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const PostHeaderLeft = {
  display: "flex",
  alignItems: "center",
};

const PostUserName = {
  marginLeft: "1rem",
};

const PostProfilePic = {
  height: "40px",
  width: "40px",
  borderRadius: "50%",
};

const PostCenter = {};

const PostPhotoUrl = {
  width: "100%",
  margin: "1rem 0rem",
  objectFit: "cover",
};

const PostText = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
};

const PostTextCaption = {};

const BottomActions = {
  display: "flex",
  justifyContent: "center", // Center items horizontally
  alignItems: "center",
  gap: "1rem",
  marginTop: "3rem"
};

const CommentInputContainer = {
  flexGrow: 1,
};

const DeleteButtonStyle = {
  color: "white",
  border: "none",
  padding: "0.5rem",
  cursor: "pointer",
  backgroundColor: "transparent",
};

const DeleteIconStyle = {
  fill: "red",
};

export default function Post({
  avatar,
  username,
  id,
  uploadURL,
  caption,
  comments,
  onDelete,
  ownerEmail,
}) {
  const [user] = useContext(UserContext).user;

  const handleDelete = async () => {
    try {
      await db.collection("posts").doc(id).delete();
      onDelete(id); // Notify parent component to remove the post from the feed
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  const isPostOwner = user && user.email === ownerEmail;

  return (
    <div style={PostStyle}>
      <div style={PostHeader}>
        <div style={PostHeaderLeft}>
          <img src={avatar} style={PostProfilePic} alt="user avatar" />
          <p style={PostUserName}>{username}</p>
        </div>
        {isPostOwner && (
          <button
            style={DeleteButtonStyle}
            alt="delete post"
            onClick={handleDelete}
          >
            <DeleteOutlineIcon style={DeleteIconStyle} />
          </button>
        )}
      </div>
      <div style={PostCenter}>
        <img src={uploadURL} alt="" style={PostPhotoUrl} />
      </div>
      <div style={PostText}>
        <p style={PostTextCaption}>{caption}</p>
      </div>
      {user ? (
        <div style={BottomActions}>
          <div style={CommentInputContainer}>
            <CommentInput key={1} id={id} comments={comments} />
          </div>
          <Liker />
        </div>
      ) : null}
      {comments
        ? comments.map((comment, index) => (
            <Comment
              key={index}
              username={comment.username}
              caption={comment.comment}
            />
          ))
        : null}
    </div>
  );
}
