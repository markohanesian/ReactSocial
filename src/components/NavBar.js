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
    backgroundColor: '#161616',
    padding: "1rem 0 1rem 0"
}

const LogoStyle = {
    padding: '0 1rem 0 1rem',
    fontSize: '1.2rem',
    fontWeight: '800',
    textDecoration: 'none',
    color: 'rgb(139, 195, 74)',
}

const AboutStyle = {
    padding: '0 1rem 0 1rem',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '800',
    color: "whitesmoke"
}

const NavbarImgStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
}

export default function NavBar() {
    const [user] = useContext(UserContext).user;
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
                <div style={{ width: "110px", marginRight: '1rem'}}><SignInBtn /></div>}
        </div>
    );
}
