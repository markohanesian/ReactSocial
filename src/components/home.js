import React from 'react';
// components
import CreatePost from './CreatePost';
import Feed from './feed';
const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(58,63,65)'
}

export default function home() {
    return (
        <div style={homeStyle}>
            <CreatePost />
            <Feed />
        </div>
    )
}
