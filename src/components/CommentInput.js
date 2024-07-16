import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { db } from "../firebase";
import Liker from "./Liker";
import { Stack, TextField, Button } from "@mui/material";

export default function CommentInput({ id, comments }) {
  const [user] = useContext(UserContext).user;
  const [comment, setComment] = useState("");
  const [commentArray] = useState(comments ? comments : []);

  const addComment = () => {
    if (comment !== "") {
      // Add comment to local array
      commentArray.push({
        comment: comment,
        username: user.email.replace("@gmail.com", ""),
      });

      // Update comment in Firestore
      db.collection("posts")
        .doc(id)
        .update({
          comments: commentArray,
        })
        .then(function () {
          setComment("");
          console.log("Comment added!");
        })
        .catch(function (error) {
          console.error("Error adding comment: ", error);
        });
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
        sx={{ flex: 1 }}
        label="Comment"
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="contained"
          onClick={addComment}
          sx={{ background: "rgb(139, 195, 74)", color: "black" }}
          aria-label="Post comment"
        >
          Post
        </Button>
        <Liker />
      </Stack>
    </Stack>
  );
}
