import React from "react";
import Post from "./post";

const FeedStyle = {};

export default function feed() {
    return (
        <div style={FeedStyle}>
            <Post
                profileUrl="https://lh3.googleusercontent.com/a-/AOh14GikD9RW6nJpZYCj7-sajzDLg7ykdq6VWHXHxUhN08c=s96-c"
                username="mso872"
                photoURL="https://firebasestorage.googleapis.com/v0/b/social-media-app-mso.appspot.com/o/images%2Flt0PgL8eEa.jpg?alt=media&token=7e2d4513-83ca-4c33-8586-f01bd2dc6920"
                caption="hey this is a new post"
            />
        </div>
    );
}
