import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user";
import { db } from "../firebase"; 
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Weather from "../components/Weather";

export default function UserPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user || !user[0]) {
        setLoading(false);
        return;
      }

      try {
        const q = query(collection(db, "posts"), where("ownerEmail", "==", user[0].email));
        const querySnapshot = await getDocs(q);
        const userPosts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(userPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error); 
        setLoading(false); 
      }
    };

    fetchPosts();
  }, [user]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ padding: "2rem", backgroundColor: "#101010", color: "white", minHeight: "75vh" }}>
      <h1 style={{marginBottom: "2rem", fontSize: "2.5rem"}}>My Posts</h1>
      <Weather />
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} style={{ margin: "3rem 0" }}>
            <img src={post.uploadURL} alt="uploaded post" style={{width: "50px", height: "auto"}} />
            <h2>{post.caption}</h2>
            <p>{new Date(post.timestamp.toDate()).toLocaleString()}</p>
            <Link to={`/feed?postId=${post.id}`} style={{ color: "rgb(139, 195, 74)" }}>
              View Post
            </Link>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
