import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { signInWithGoogle } from "../services/auth";

const btnStyle = {
    backgroundColor: 'salmon',
    color: 'white',
    border: 'none',
    padding: '5px',

    // backgroundImage: 'url(' + imgUrl + ')',
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
            <button style={btnStyle} onClick={signInBtnClick}>
                Sign In With Google
            </button>
        </div>
    )
}