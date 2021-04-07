import React, { useState, useEffect } from "react";
import Post from "./post";
import { db } from '../firebase';

const FeedStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'whitesmoke'
};

export default function Feed() {
  const [posts, setPosts] = useState([]);

    // function to get comments on posts on update
  useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      });
   
  }, []);

  return (
    <div style={FeedStyle}>
      {/* <Post
        avatar="https://lh3.googleusercontent.com/a-/AOh14GikD9RW6nJpZYCj7-sajzDLg7ykdq6VWHXHxUhN08c=s96-c"
        username="mso872"
        photoURL="https://firebasestorage.googleapis.com/v0/b/social-media-app-mso.appspot.com/o/images%2Flt0PgL8eEa.jpg?alt=media&token=7e2d4513-83ca-4c33-8586-f01bd2dc6920"
        caption="hey this is a new post"
          />
           */}
          {/* for every post data, return <Post /> component */}
          {posts.map(({ id, post }) => {
              return <Post
                  key={id}
                  id={id}
                  avatar={post.avatar}
                  username = {post.username}
                  uploadURL={post.uploadURL}
                caption={post.caption}
                comments={post.comments}
              />
              

        })}
    </div>
  );
}
