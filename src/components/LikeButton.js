// src/components/LikeButton.js

import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/user'; // Make sure this path is correct
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; // Using MUI version for consistency
import { IconButton } from '@mui/material';

export default function LikeButton({ post }) {
  // Get the current user from the context you already use
  const [user] = useContext(UserContext).user;
  
  // State for the like count and if the user has liked the post
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);
  const [isLiked, setIsLiked] = useState(false);

  // This effect checks if the current user has already liked this post
  useEffect(() => {
    // Check if user and post.likedBy exist to prevent errors
    if (user && post.likedBy && post.likedBy.includes(user.uid)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [post.likedBy, user]); // Re-run when the user or likes change

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton aria-label="like post">
        {/* The icon color changes based on the isLiked state */}
        <ThumbUpIcon style={{ color: isLiked ? 'rgb(139, 195, 74)' : 'white' }} />
      </IconButton>
      {/* Display the number of likes */}
      <span style={{ color: 'white' }}>{likeCount}</span>
    </div>
  );
}