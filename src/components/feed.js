import React, { useState, useEffect } from "react";
import Post from "./post";
import { db } from '../firebase';

const FeedStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgb(58,63,65)'
};

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("posts")
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
      });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Handler function to remove post from state
  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div style={FeedStyle}>
      {posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            id={id}
            avatar={post.avatar}
            username={post.username}
            uploadURL={post.uploadURL}
            caption={post.caption}
            comments={post.comments}
            onDelete={handleDeletePost}  // Pass the handler function as a prop
          />
        );
      })}
    </div>
  );
}
