import React, { useContext } from 'react'
import { UserContext } from '../contexts/user'
import SignInBtn from "./SignInBtn"

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    padding: ".5rem 0 .5rem 0"
}

const LogoStyle = {
    paddingLeft: '1rem'
}

const NavbarImgStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    marginRight: '1rem'
}

export default function NavBar() {

    const [user, setUser] = useContext(UserContext).user



    return (
        <div style={navStyle}>
            <h1 style={LogoStyle}>ReactSocial</h1>
            {/* if user is signed in, display avatar in navbar */}
            {user ? <img alt={"avatar"} style={NavbarImgStyle} src={user.photoURL} />: <SignInBtn />}
        </div>
    )
}
