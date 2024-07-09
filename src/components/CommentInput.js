import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { db } from "../firebase";
import Liker from "./Liker";
import { Stack, TextField, Button } from "@mui/material";

const CommentPostBtn = {
    backgroundColor: 'rgb(139, 195, 74)',
    color: "black"
};

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
    >
      <TextField
        variant="outlined"
        placeholder="Add a comment..."
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ flex: 1 }}
      />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Button variant="contained" onClick={addComment} style={CommentPostBtn}>
          Post
        </Button>
        <Liker />
      </Stack>
    </Stack>
  );
}
