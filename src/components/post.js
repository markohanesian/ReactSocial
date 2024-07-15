import React, { useContext } from "react";
import Comment from "./comment";
import CommentInput from "./CommentInput";
import { UserContext } from "../contexts/user";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Grid, Stack } from "@mui/material";

const PostStyle = {
  padding: "1rem",
  margin: "1rem",
  width: "90vw",
  maxWidth: "600px",
  position: "relative",
  border: "2px solid rgb(139, 195, 74)"
};

const PostHeaderLeft = {
  display: "flex",
  alignItems: "center",
};

const PostUserName = {
  marginLeft: "1rem",
  color: "white"
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

const PostTextCaption = {
  color: "white"
};

const DeleteButtonStyle = {
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
  const { user } = useContext(UserContext); 
  const userEmail = user && user.length > 0 ? user[0].email : null;

  const handleDelete = async () => {
    try {
      const postRef = doc(db, "posts", id);
      await deleteDoc(postRef);
      onDelete(id); 
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  const isPostOwner = user && userEmail === ownerEmail;

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
            <Grid item xs={12} sm={12}>
              <CommentInput key={1} id={id} comments={comments} fullWidth />
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
