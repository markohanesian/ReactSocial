import React, { useState, useEffect } from "react";
import Post from "./post";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
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
    const fetchPosts = async () => {
      try {
        // Create a query with ordering by 'timestamp' in descending order
        const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
          ownerId: doc.data().ownerEmail // Adjust according to your data structure
        }));

        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();

    // Clean-up function for unsubscribing from snapshot listener if necessary
    // return () => unsubscribe();
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
      {posts.map(({ id, post, ownerId }) => (
        <Post
          key={id}
          id={id}
          avatar={post.avatar}
          username={post.username}
          uploadURL={post.uploadURL}
          caption={post.caption}
          comments={post.comments}
          onDelete={handleDeletePost}
          ownerId={ownerId} // Pass ownerId to Post component
        />
      ))}
    </div>
  );
};

export default Feed;
