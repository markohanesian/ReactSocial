import React, { useContext } from 'react';
import Comment from './comment';
import CommentInput from './CommentInput'
import { UserContext } from '../contexts/user';
import Liker from './Liker';

const PostStyle = {
    padding: '1rem',
    margin: '1rem',
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
    flexDirection: 'column',
    marginBottom: '1rem'
}

const PostTextCaption = {

}

export default function Post({ avatar, username, id, uploadURL, caption, comments }) {
    const [user] = useContext(UserContext).user;

    return (
        // header portion of post
        <div style={PostStyle}>
            <div style={PostHeader}>
                <div style={PostHeaderLeft}>
                    <img src={avatar} style={PostProfilePic} alt="user avatar" />
                    <p style={PostUserName}>{username}</p>
                </div>
                {user ? <Liker /> : <></>}
            </div>
            {/* image portion of post */}
            <div style={PostCenter}>
                <img src={uploadURL} alt="" style={PostPhotoUrl} />
            </div>
            {/* text portion of post */}
            <div style={PostText}>
                <p style={PostTextCaption}>{caption}</p>
            </div>
            {/* display CommentInput only when user signed in */}
            {user ? <CommentInput
                key={1}
                id={id}
                comments={comments} /> : <></>}
            {/* if there are comments, show, if not, show nothing */}
            {comments ? comments.map((comment) => <Comment username={comment.username} caption={comment.comment} />) : <></>}
        </div>
    )
}
