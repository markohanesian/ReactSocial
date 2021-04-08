import React, { useContext } from 'react';
import Comment from './comment';
import CommentInput from './CommentInput'
import { db, storage } from '../firebase';
import { UserContext } from '../contexts/user';

const PostStyle = {
    padding: '1rem',
    margin: '2rem',
    backgroundColor: 'white',
    width: '90vw',
    maxWidth: '600px'
}

const PostHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

// div containing image and username
const PostHeaderLeft = {
    display: 'flex',
    alignItems: 'center'
}

const PostUserName = {
    marginLeft: '1rem'
}

const PostProfilePic = {
    height: '40px',
    width: '40px',
    borderRadius: '50%'
}

const PostDeleteBtn = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px',
}

// div containing image being posted
const PostCenter = {

}

const PostPhotoUrl = {
    width: '100%',
    margin: '1rem 0rem',
    // this property ensures image won't stretch
    objectFit: 'cover'
}

// div containing username, caption
const PostText = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2rem'
}

const PostTextUser = {
    fontWeight: '600',
    marginRight: '1rem',
}

const PostTextCaption = {

}

export default function Post({ avatar, username, id, uploadURL, caption, comments }) {
    const [user, setUser] = useContext(UserContext).user
    const deletePost = () => {
        // delete image from Firebase store
        
        // get reference to the image file I want to delete
        
        var imageRef = storage.refFromURL(uploadURL);

        // delete the file
        imageRef.delete().then(function () {
            console.log("delete successful")
        }).catch(function(error) {
            console.log(`Error ${error}`);
        });

        // delete post info from Firestore
        db.collection("posts").doc(id).delete().then(function () {
            console.log("delete post successful")
        }).catch(function (error) {
            console.log(`Error post info delete ${error}`);
        });
    }

    return (
        // header portion of post
        <div style={PostStyle}>
            <div style={PostHeader}>
                <div style={PostHeaderLeft}>
                    <img src={avatar} style={PostProfilePic} alt="user avatar" />
                    <p style={PostUserName}>{username}</p>
                </div>
                <button style={PostDeleteBtn} onClick={deletePost}>Delete</button>
            </div>
            {/* image portion of post */}
            <div style={PostCenter}>
                <img src={uploadURL} alt="" style={PostPhotoUrl} />
            </div>
            {/* text portion of post */}
            <div style={PostText}>
                <p style={PostTextUser}>{username}</p>
                <p style={PostTextCaption}>{caption}</p>
            </div>
            {/* display CommentInput only when user signed in */}
            {user ? <CommentInput
                id={id}
                comments={comments} /> : <></>}
            {/* if there are comments, show, if not, show nothing */}
            {comments ? comments.map((comment) => <Comment username={comment.username} caption={comment.comment} />) : <></>}
            
            
        </div>
    )
}
