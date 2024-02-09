import React from 'react';
import { Typography } from '@material-ui/core/';
import SignInBtn from './SignInBtn';

const HeaderContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3rem',
    margin: '1rem',
    backgroundColor: '#161616',
    width: '90vw',
    minHeight: "40vh",
    maxWidth: '600px',
    color: "#f7f7f7",
    borderRadius: '10px'
}

export default function HeaderNewUser() {
    return (
        <div style={HeaderContainerStyle}>
            <Typography variant="h2" gutterBottom component="h1">
                Social Simplified
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                <span role="img" aria-label="bullet">&#x1F539;</span> Sign in securely<br />
                <span role="img" aria-label="bullet">&#x1F539;</span> Make a post<br />
                <span role="img" aria-label="bullet">&#x1F539;</span> Comment on user posts easily<br />
                <span role="img" aria-label="bullet">&#x1F539;</span> that's it!
            </Typography>
            <SignInBtn />
        </div>
    );
}