import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/user'
import SignInBtn from "./SignInBtn"

// topmost div
const CreatePostStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
}

// Sub-div containing text and other elements
const CreatePostContainer = {

}

// "Create a Post"
const PromptStyle = {
    marginLeft: '1rem'
}

// User post textarea
const CreatePostTextArea = {

}

// upload image areaa
const CreatePostUploadImage = {

}


export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");
    const handleChange = () => {
        
    }
    return (
        <div style={CreatePostStyle}>

            {/* if user exists, post. If not, sign in */}
            {user ? (

                <div style={CreatePostContainer}>
                    <p style={PromptStyle}>Create Post</p>
                    <div style={CreatePostTextArea}>
                        <textarea
                            rows="3"
                            value={caption}
                            onChange={((e) => setCaption(e.target.value))}
                        >
                        </textarea>
                    </div>
                    <div style={CreatePostUploadImage}>
                        <input type="file" accept="image/*" onChange={handleChange} />
                    </div>
                </div>
            ) :
                (<div>
                    <SignInBtn />
                </div>
                )}
        </div>
    )
}
