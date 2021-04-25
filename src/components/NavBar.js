import React, { useContext } from 'react'
import { UserContext } from '../contexts/user'
import SignInBtn from "./SignInBtn"
import {
Link
  } from "react-router-dom";
const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    padding: ".5rem 0 .5rem 0"
}

// div left side containing home and news links
const LinksDiv = {
    
}

const LogoStyle = {
    padding: '0 1rem 0 1rem',
    fontSize: '1.5rem',
    fontWeight: '800',
    textDecoration: 'none',
}

const NewsStyle = {
    padding: '0 1rem 0 1rem',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '800'
}

const AboutStyle = {
    padding: '0 1rem 0 1rem',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '800'
}

const NavbarImgStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    marginRight: '1rem'
}

export default function NavBar() {

    const [user] = useContext(UserContext).user



    return (
        <div style={navStyle}>
            <div style={LinksDiv}>
                <Link to="/" style={LogoStyle}>ReactSocial</Link>
                <Link to="/news" style={NewsStyle}>news</Link>
                <Link to="/about" style={AboutStyle}>about</Link>
            </div>
            {/* if user is signed in, display avatar in navbar */}
            {user ? <img alt={"avatar"} style={NavbarImgStyle} src={user.photoURL} /> : <SignInBtn />}
        </div>
    )
}
