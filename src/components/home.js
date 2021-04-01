import React from 'react';
// components
import NavBar from './NavBar';
import CreatePost from './CreatePost';
import Feed from './feed';

const homeStyle = {
    height: '100vh'
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
