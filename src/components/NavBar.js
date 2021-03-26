import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/user'
import SignInBtn from "./SignInBtn"

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: 'white'
}

const NavbarImgStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '50%'
}

export default function NavBar() {

    const [user, setUser] = useContext(UserContext).user



    return (
        <div style={navStyle}>
            <p>ReactSocial</p>
            {/* if user is signed in, display avatar in navbar */}
            {user ? <img alt={"avatar"} style={NavbarImgStyle} src={user.photoURL} />: <SignInBtn />}
        </div>
    )
}
