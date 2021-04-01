import React from 'react'

const CommentStyle = {
    display: 'flex',
    flexDirection: 'row'
}

const CommentUser = {
    fontWeight: '600',
    marginRight: '1rem'
}

const CommentCaption = {
    
}

export default function Comment({username, caption}) {
    return (
        <div style={CommentStyle}>
            <p style={CommentUser}>{username}</p>
            <p style={CommentCaption}>{caption}</p>
        </div>
    )
}
