import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { logout } from "../services/auth";
import { useHistory } from 'react-router-dom';


const btnStyle = {
    backgroundColor: 'salmon',
    color: 'white',
    border: 'none',
    padding: '5px',
    borderRadius: '5px',
    marginRight: '1rem'
};

export default function SignOutBtn() {
    let history = useHistory();
    const [user, setUser] = useContext
        (UserContext).user;

    // sign in function
    const SignOutBtnClick = async () => {
        let SignedOutUser = await logout();
        if (SignedOutUser) setUser(SignedOutUser);
            console.log(user);
        localStorage.removeItem('token');
        history.push('/signed-out');
    };

    return (
        <div>
            <button style={btnStyle} onClick={SignOutBtnClick}>
                Sign Out
            </button>
        </div>
    )
}