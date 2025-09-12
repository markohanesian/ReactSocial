// src/components/LikeButton.js

import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/user';
import { db } from '../firebase';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';

// We make the component defensive by providing a default empty object for the post prop.
export default function LikeButton({ post = {} }) {
  const [user] = useContext(UserContext).user;
  
  // Use default values directly in useState to prevent crashes
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);
  const [isLiked, setIsLiked] = useState(false);

  // This effect still runs to set the initial "liked" state
  useEffect(() => {
    // Check if the user's uid is in the likedBy array.
    // The '?' (optional chaining) is another way to prevent errors if likedBy is undefined.
    if (user && post.likedBy?.includes(user.uid)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [post.likedBy, user]);

  const handleLike = async () => {
    if (!user) {
      // Or show a message asking them to sign in
      console.log("You must be logged in to like a post.");
      return; 
    }

    const postRef = doc(db, 'posts', post.id);
    
    // --- This is the Optimistic UI Update ---
    // We update the state immediately, before the database call.
    setIsLiked(!isLiked);
    setLikeCount(prevCount => isLiked ? prevCount - 1 : prevCount + 1);

    try {
      // Now, update the database in the background.
      if (!isLiked) {
        // If the post was NOT liked, add the user's ID to the array.
        await updateDoc(postRef, {
          likeCount: likeCount + 1,
          likedBy: arrayUnion(user.uid)
        });
      } else {
        // If the post WAS liked, remove the user's ID from the array.
        await updateDoc(postRef, {
          likeCount: likeCount - 1,
          likedBy: arrayRemove(user.uid)
        });
      }
    } catch (error) {
      console.error("Error updating like status:", error);
      // --- Error Handling: Revert the UI if the update fails ---
      // If the database update fails, we set the UI back to how it was.
      setIsLiked(isLiked); // Revert to the original state
      setLikeCount(likeCount); // Revert to the original count
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* The onClick handler is now connected! */}
      <IconButton aria-label="like post" onClick={handleLike}>
        <ThumbUpIcon style={{ color: isLiked ? 'rgb(139, 195, 74)' : 'white' }} />
      </IconButton>
      <span style={{ color: 'white' }}>{likeCount}</span>
    </div>
  );
}