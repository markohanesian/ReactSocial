import React from 'react'
// components
import NavBar from "./NavBar"
import CreatePost from "./CreatePost"

const homeStyle = {
    height: '100vh'
}

export default function home() {
    return (
        <div style={homeStyle}>
            <NavBar />
            <CreatePost />
        </div>
    )
}
