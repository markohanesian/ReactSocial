import React, { useState, useEffect } from "react";
import Post from "../components/post";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy, doc, getDoc } from "firebase/firestore";
import CreatePost from "../components/CreatePost";
import { useLocation } from "react-router-dom";

const FeedStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: "#101010"
};

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const postId = searchParams.get("postId");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        if (postId) {
          // Fetch single post by ID
          const postRef = doc(db, "posts", postId);
          const postDoc = await getDoc(postRef);

          if (postDoc.exists()) {
            setPosts([{ id: postDoc.id, post: postDoc.data(), ownerEmail: postDoc.data().ownerEmail }]);
          } else {
            setError("Post not found");
          }
        } else {
          // Fetch all posts
          const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
          onSnapshot(q, (querySnapshot) => {
            const postsData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              post: doc.data(),
              ownerEmail: doc.data().ownerEmail, 
            }));

            setPosts(postsData);
          });
        }
      } catch (error) {
        setError("Error fetching posts");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [postId]);

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div style={FeedStyle}>
      {!postId && <CreatePost />}
      {posts.map(({ id, post, ownerEmail }) => (
        <Post
          key={id}
          id={id}
          onDelete={handleDeletePost}
          {...post} // <-- This is the magic!
        />
      ))}
    </div>
  );
}
