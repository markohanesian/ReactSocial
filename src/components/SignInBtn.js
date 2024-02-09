import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { signInWithGoogle } from "../services/auth";
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
            <Button className='sign-in-btn' onClick={signInBtnClick} variant="contained" endIcon={<ArrowForwardIcon />} style={{background: "#8bc34a", color: "black", fontWeight: "bold", marginRight: "1rem"}}>
                Sign In
            </Button>
        </div>
    )
}