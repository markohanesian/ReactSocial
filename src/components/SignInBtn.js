import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { signInWithGoogle } from "../services/auth";
import { Button } from '@material-ui/core';

const btnStyle = {
    backgroundColor: '#AD392D',
    color: 'white',
    border: 'none',
    padding: '5px',
    borderRadius: '5px',
    marginRight: '1rem'
  };

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
            <Button className='sign-in-btn' onClick={signInBtnClick} variant="contained" color="primary">
                Sign In
            </Button>
        </div>
    )
}