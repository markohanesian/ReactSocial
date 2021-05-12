import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import SignInBtn from "./SignInBtn";
import SignOutBtn from './SignOutBtn';
import { Link } from "react-router-dom";

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    padding: "1rem 0 1rem 0"
}

const LogoStyle = {
    padding: '0 1rem 0 1rem',
    fontSize: '1rem',
    fontWeight: '800',
    textDecoration: 'none',
    backgroundColor: '#73FAB3',
    color: 'black'
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
            <div>
                <Link to="/" style={LogoStyle}>ReactSocial</Link>
                <Link to="/about" style={AboutStyle}>about</Link>
            </div>
            {/* if user is signed in, display avatar in navbar */}
            {user ? 
                <>
                    <img alt={"avatar"} style={NavbarImgStyle} src={user.photoURL} />
                    <SignOutBtn />
                </>:
                <SignInBtn />}
        </div>
    )
}
