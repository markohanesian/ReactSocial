import React from 'react'
import SignInBtn from "./SignInBtn"

const CreatePostStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
}

const PromptStyle = {
    paddingLeft: '1rem'
}

export default function CreatePost() {
    return (
        <div style={CreatePostStyle}>
            <SignInBtn />
            <p style={PromptStyle}>to post and comment</p>
        </div>
    )
}
