import React, { useContext } from "react";
import Comment from "./comment";
import CommentInput from "./CommentInput";
import { UserContext } from "../contexts/user";
import Liker from "./Liker";
import { db } from "../firebase";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Grid, Stack } from "@mui/material";

const PostStyle = {
  padding: "1rem",
  margin: "1rem",
  backgroundColor: "white",
  width: "90vw",
  maxWidth: "600px",
  position: "relative",
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

const PostPhotoUrl = {
  width: "100%",
  margin: "1rem 0rem",
  objectFit: "cover",
};

const PostTextCaption = {};

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
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item style={PostHeaderLeft}>
          <img src={avatar} style={PostProfilePic} alt="user avatar" />
          <p style={PostUserName}>{username}</p>
        </Grid>
        {isPostOwner && (
          <Grid item>
            <button
              style={DeleteButtonStyle}
              alt="delete post"
              onClick={handleDelete}
            >
              <DeleteOutlineIcon style={DeleteIconStyle} />
            </button>
          </Grid>
        )}
      </Grid>
      <div>
        <img src={uploadURL} alt="" style={PostPhotoUrl} />
      </div>
      <div>
        <p style={PostTextCaption}>{caption}</p>
      </div>
      {user && (
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" mt={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8}>
              <CommentInput key={1} id={id} comments={comments} fullWidth />
            </Grid>
            <Grid item>
              <Liker />
            </Grid>
          </Grid>
        </Stack>
      )}
      {comments &&
        comments.map((comment, index) => (
          <Comment key={index} username={comment.username} caption={comment.comment} />
        ))}
    </div>
  );
}
