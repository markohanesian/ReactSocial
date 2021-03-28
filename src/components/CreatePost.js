import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/user'
import SignInBtn from "./SignInBtn"
// icon for photo upload button
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

// topmost div
const CreatePostStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    margin: '2rem',
    width: "100%",
    maxWidth: "650px",
}

// Sub-div containing text and other elements
const CreatePostContainer = {

}

// "Create a Post"
const PromptStyle = {
    marginLeft: '1rem'
}

const CreatePostInput = {
    resize: 'none',
    
}

// User post textarea
const CreatePostTextArea = {
    
}

// Bottom bar section
const CreatePostBottomBar = {
    display: 'flex',
    justifyContent: 'space-between',
}

// upload image areaa
const CreatePostUploadImage = {

}

// upload image icon
const CreatePostPhotoIcon = {
    cursor: "pointer",
    fontSize: "2rem"
}

// hidden default upload button 
const CreatePostUploadButton = {
    display: "none"

}

// Upload text button
const UploadButton = {
    border: "none",
    backgroundColor: "white",
    outline: "none"

}

export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");
    // choose file button function
    const handleChange = () => {

    }

    const handleUpload = () => {

    }
    return (
        <div style={CreatePostStyle}>

            {/* if user exists, post. If not, sign in */}
            {user ? (

                <div style={CreatePostContainer}>
                    <p style={PromptStyle}>Create Post</p>
                    <div style={CreatePostTextArea}>
                        <textarea
                            style={CreatePostInput}
                            rows="3"
                            value={caption}
                            onChange={((e) => setCaption(e.target.value))}
                        >
                        </textarea>
                    </div>
                    <section style={CreatePostBottomBar}>
                    <div style={CreatePostUploadImage}>
                        <label htmlFor="file-input">
                            <AddAPhotoIcon  style={CreatePostPhotoIcon}/>
                        </label>
                        <input style={CreatePostUploadButton} id="file-input" type="file" accept="image/*" onChange={handleChange} />
                    </div>
                    <button style={{    color: caption ? "black" : "whitesmoke", outline: "none", border: "none", backgroundColor: "white"}} onClick={handleUpload}>
                        Upload
                    </button>
                    </section>
                </div> 
            ) :
                (<div>
                    <SignInBtn />
                </div>
                )}
        </div>
    )
}
