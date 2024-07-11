import React, { useState, useEffect } from "react";
import Post from "./post";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import CreatePost from "./CreatePost";

const FeedStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = () => {
      try {
        const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
        onSnapshot(q, (querySnapshot) => {
          const postsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
            ownerEmail: doc.data().ownerEmail, // Ensure ownerEmail is included
          }));

          setPosts(postsData);
          setLoading(false);
        });
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    // Implement deletion logic if needed
  };

  if (loading) {
    return <p>Loading...</p>; // Optional: Show a loading indicator
  }

  if (error) {
    return <p>Error fetching posts. Please try again later.</p>; // Optional: Show an error message
  }

  return (
    <div style={FeedStyle}>
      <CreatePost />
      {posts.map(({ id, post, ownerEmail }) => (
        <Post
          key={id}
          id={id}
          avatar={post.avatar}
          username={post.username}
          uploadURL={post.uploadURL}
          caption={post.caption}
          comments={post.comments}
          onDelete={handleDeletePost}
          ownerEmail={ownerEmail} // Pass ownerEmail to Post component
        />
      ))}
    </div>
  );
};

export default Feed;
