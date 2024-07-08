import React, { useContext } from 'react';
import CreatePost from './CreatePost';
import Feed from './feed';
import { UserContext } from '../contexts/user';

const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#101010 '
}

export default function Home() {
    const [user] = useContext(UserContext).user;
    return (
        <div style={homeStyle}>
            <CreatePost />
            {/* if user is signed in, display feed */}
            {user && <Feed />}
        </div>
    );
}
