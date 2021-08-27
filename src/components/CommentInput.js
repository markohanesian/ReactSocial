import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/user'
import { db } from '../firebase';
import Liker from './Liker';

const CommentInputStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '1rem',
    marginBottom: '2rem'
}

const CommentInputTextarea = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    width: '100%',
    resize: 'none',
    backgroundColor: 'whitesmoke',
    padding: '1rem',
}

const CommentPostBtn = {
    backgroundColor: 'white',
    border: 'none',
    marginLeft: '1rem'
}

export default function CommentInput({ id, comments }) {
    const [user] = useContext(UserContext).user;
    const [comment, setComment] = useState("");
    const [commentArray] = useState(comments ? comments : []);
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
            <Liker />
        </div>
    )
}
