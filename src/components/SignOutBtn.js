import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { logout } from '../services/auth'; // Ensure correct path

const SignOutBtn = () => {
    const [, setUser] = useContext(UserContext).user;

    const handleLogout = async () => {
        const success = await logout();
        if (success) {
            setUser(null);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default SignOutBtn;
