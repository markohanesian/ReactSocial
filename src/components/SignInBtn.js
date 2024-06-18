import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { signInWithGoogle } from '../services/auth'; 

const SignInBtn = () => {
    const [, setUser] = useContext(UserContext).user;

    const handleLogin = async () => {
        const user = await signInWithGoogle();
        setUser(user);
    };

    return (
        <button onClick={handleLogin}>Login with Google</button>
    );
};

export default SignInBtn;
