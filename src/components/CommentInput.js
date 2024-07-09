import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { db } from "../firebase";
import Liker from "./Liker";
import { Stack, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

// Styled component for custom TextField
const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: 'white', // Text color
  },
  '& .MuiInputLabel-root': {
    color: 'whitesmoke', // Placeholder text color
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'whitesmoke', // Focused placeholder text color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'whitesmoke', // Unfocused border color
    },
    '&:hover fieldset': {
      borderColor: 'whitesmoke', // Hover border color
    },
    '&.Mui-focused fieldset': {
      borderColor: 'whitesmoke', // Focused border color
    },
  },
}));

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
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: '100%' }}
    >
      <CustomTextField
        variant="outlined"
        placeholder="Add a comment..."
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ flex: 1 }}
      />
      <Stack direction="row" spacing={1}>
        <Button variant="contained" color="primary" onClick={addComment}>
          Post
        </Button>
        <Liker />
      </Stack>
    </Stack>
  );
}
