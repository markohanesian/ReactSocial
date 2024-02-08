import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { signInWithGoogle } from "../services/auth";
import { Button } from '@material-ui/core';

export default function SignInBtn() {
    const [user, setUser] = useContext
        (UserContext).user;

    // sign in function
    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();
        if (userBySignIn) setUser(userBySignIn);
        console.log(user);
    };

    return (
        <div>
            <Button className='sign-in-btn' onClick={signInBtnClick} variant="contained" style={{background: "#8bc34a", color: "black", fontWeight: "bold"}}>
                Sign In
            </Button>
        </div>
    )
}