import React from 'react';
import Comment from './comment';

const PostStyle = {
    padding: '1rem',
    margin: '2rem',
    backgroundColor: 'white',
    width: "90vw",
    maxWidth: "600px",
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
    flexDirection: 'row'
}

const PostTextUser = {
    fontWeight: '600',
    marginRight: '1rem'
}

const PostTextCaption = {

}

export default function Post({ profileUrl, username, id, photoURL, caption, comments }) {
    return (
        // header portion of post
        <div style={PostStyle}>
            <div style={PostHeader}>
                <div style={PostHeaderLeft}>
                    <img src={profileUrl} style={PostProfilePic} alt="user avatar" />
                    <p style={PostUserName}>{username}</p>
                </div>
                <button style={PostDeleteBtn}>Delete</button>
            </div>
            {/* image portion of post */}
            <div style={PostCenter}>
                <img src={photoURL} alt="" style={PostPhotoUrl} />
            </div>
            {/* text portion of post */}
            <div style={PostText}>
                <p style={PostTextUser}>{username}</p>
                <p style={PostTextCaption}>{caption}</p>
            </div>

            {/* if there are comments, show, if not, show nothing */}
            {comments ? comments.map((comment) => <Comment username={comment.username} caption={comment.caption} />) : <></>}
            
        </div>
    )
}
