import React from 'react'
import SignInBtn from "./SignInBtn"

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: 'white'
}
export default function NavBar() {
    return (
        <div style={navStyle}>
            <p>ReactSocial</p>
            <SignInBtn />
        </div>
    )
}
