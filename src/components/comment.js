import React from 'react';

const CommentStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1rem',
    padding: '1rem',
    color: "white"
}

const CommentUser = {
    display: 'flex',
    fontWeight: '600',
    marginRight: '1rem'
}

const CommentCaption = {
    display: 'flex',
    padding: '.5rem 0 0 0'
}

export default function Comment({ username, caption }) {
    return (
        <div style={CommentStyle}>
            <p style={CommentUser}>{username}</p>
            <p style={CommentCaption}>{caption}</p>
        </div>
    )
}
