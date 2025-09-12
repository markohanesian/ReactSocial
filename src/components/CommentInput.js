import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore"; 
import LikeButton from "./LikeButton";
import { Stack, TextField } from "@mui/material";
import MenuButton from "./MenuButton";

export default function CommentInput({ id, comments }) {
  const [user] = useContext(UserContext).user;
  const [comment, setComment] = useState("");
  const [commentArray] = useState(comments ? comments : []);

  const addComment = async () => {
    if (comment !== "") {
      // Add comment to local array
      const newComment = {
        comment: comment,
        username: user.email.replace("@gmail.com", ""),
      };
      const updatedComments = [...commentArray, newComment];

      // Update comment in Firestore
      const postRef = doc(db, "posts", id); // Use doc to reference the specific post
      try {
        await updateDoc(postRef, {
          comments: updatedComments,
        });
        setComment("");
        console.log("Comment added!");
      } catch (error) {
        console.error("Error adding comment: ", error);
      }
    }
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      <TextField
        variant="outlined"
        placeholder="Add a comment..."
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        label="Comment"
        InputProps={{
          sx: {
            color: "#fff", // Text color
          },
        }}
        InputLabelProps={{
          sx: {
            color: "#fff", // input placeholder text 
            "&.Mui-focused": {
              color: "rgb(139, 195, 74)", // Focused label 
            },
          },
        }}
        sx={{
          flex: 1,
          display: "flex",
          backgroundColor: "#262626",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "rgb(139, 195, 74)"
            }
          }
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <MenuButton
          variant="contained"
          onClick={addComment}
          alt="Post comment"
          text="post"
        />
        <LikeButton />
      </Stack>
    </Stack>
  );
}
