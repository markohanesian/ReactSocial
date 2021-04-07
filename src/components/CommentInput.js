import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/user'
import { db } from '../firebase';

const CommentInputStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '1rem'
}

const CommentInputTextarea = {
    border: 'none',
    width: '100%',
    resize: 'none',
    backgroundColor: 'whitesmoke',
    padding: '1rem'
}

const CommentPostBtn = {
    backgroundColor: 'white',
    border: 'none',
    marginLeft: '1rem'
}

export default function CommentInput({ id, comments }) {
    const [user, setUser] = useContext(UserContext).user;
    const [comment, setComment] = useState("");
    const [commentArray, setCommentArray] = useState(comments ? comments : []);
    const addComment = () => {
        if (comments !== "") {
            // add comment to post info 
        commentArray.push({
            comment: comment,
            username: user.email.replace("@gmail.com", "")
        });
            
            db.collection("posts").doc(id).update({
                comments: commentArray,
            }).then(function () {
                setComment("");
                console.log("comment added!")
            }).catch(function (error) {
                console.log(`error ${error}`)
            })
        };
    };

    return (
        <div style={CommentInputStyle}>
            <textarea style={CommentInputTextarea} rows="1" placeholder="add a comment..." value={comment} 
                onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <button onClick={addComment} style={CommentPostBtn}>Post</button>
        </div>
    )
}
