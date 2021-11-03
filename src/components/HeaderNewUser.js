import React from 'react';
import { Typography } from '@material-ui/core/';
import SignInBtn from './SignInBtn';

const HeaderContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    margin: '1rem',
    backgroundColor: 'white',
    width: '90vw',
    maxWidth: '600px'
}

export default function HeaderNewUser() {
    return (
        <div style={HeaderContainerStyle}>
            <Typography variant="h4" gutterBottom component="div">
                Social media, simplified
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                Sign in securely, post text and images, and comment on user posts easily - that's it!
            </Typography>
            <SignInBtn />
        </div>
    );
}