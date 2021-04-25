import React from 'react';
// components
// import NavBar from './NavBar';
import CreatePost from './CreatePost';
import Feed from './feed';
const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export default function home() {
    return (
        <div style={homeStyle}>
            <CreatePost />
            <Feed />
        </div>
    )
}
