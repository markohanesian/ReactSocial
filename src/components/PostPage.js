import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user";
import { db } from "../firebase"; 
import { collection, query, where, getDocs } from "firebase/firestore";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext).user;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        const userPosts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(userPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ padding: "2rem", backgroundColor: "#101010", color: "white" }}>
      <h1>Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "1rem" }}>
            <h2>{post.caption}</h2>
            <p>{new Date(post.timestamp.toDate()).toLocaleString()}</p>
            <a href={`/posts/${post.id}`} style={{ color: "rgb(139, 195, 74)" }}>
              View Post
            </a>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}