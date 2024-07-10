import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/user';
import { db } from '../firebase'; 

export default function PostsPage() {
  const [user] = useContext(UserContext).user;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (user) {
        try {
          const postsSnapshot = await db.collection('posts').get();
          const postsData = postsSnapshot.docs.map(doc => ({
            id: doc.id,
            email: doc.data().email,
            caption: doc.data().caption,
            timestamp: doc.data().timestamp,
            uploadURL: doc.data().uploadURL,
          }));
          setPosts(postsData);
        } catch (error) {
          console.error("Error fetching posts: ", error);
        }
      }
    };

    fetchPosts();
  }, [user]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.caption}</h2>
            <p>Posted by: {post.email}</p>
            <p>{new Date(post.timestamp.seconds * 1000).toLocaleString()}</p>
            {post.uploadURL && <a href={post.uploadURL}>View Post</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}
