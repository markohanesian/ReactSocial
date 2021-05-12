import React from 'react';

const SignedOutStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem'
}

const LinkStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '5px',
    borderRadius: '5px',
    margin: '3rem',
    textDecoration: 'none'
}

export default function SignedOut() {
    return (
        <div style={SignedOutStyle}>
            <h1>
                YOU SIGNED OUT
            </h1>
            <a href='/' style={LinkStyle}>HOME</a>
        </div>
    )
};
