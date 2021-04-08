import React from 'react';
// components
import NavBar from './NavBar';
import CreatePost from './CreatePost';
import Feed from './feed';

const homeStyle = {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center'
}

export default function home() {
    return (
        <div style={homeStyle}>
            <NavBar />
            <CreatePost />
            <Feed />
        </div>
    )
}
