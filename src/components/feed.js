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

  // function to get comments on posts on update
  useEffect(() => {
    db.collection("posts")
      // order posts by timestamp in descending order
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))

      });

  }, []);

  return (
    <div style={FeedStyle}>
      {/* for every post data, return <Post /> component */}
      {posts.map(({ id, post }) => {
        return <Post
          key={id}
          id={id}
          avatar={post.avatar}
          username={post.username}
          uploadURL={post.uploadURL}
          caption={post.caption}
          comments={post.comments}
        />
      })}
    </div>
  );
}
