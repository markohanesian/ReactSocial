import React from 'react'
import NavBar from "./NavBar"

const homeStyle = {
    height: '100vh'
}

export default function home() {
    return (
        <div style={homeStyle}>
            <NavBar />
        </div>
    )
}
