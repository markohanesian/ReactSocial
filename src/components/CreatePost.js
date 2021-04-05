import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/user'
import SignInBtn from "./SignInBtn"
// icon for photo upload button
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import firebase from "firebase";
import { db, storage } from '../firebase';
import makeId from './helper/functions';
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

// image preview styling
const CreatePostImagePreview = {

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
    fontSize: "2rem",
    height: "120px"
}

// hidden default upload button 
const CreatePostUploadButton = {
    display: "none"

}

// Upload text button
// const UploadButton = {
//     border: "none",
//     backgroundColor: "white",
//     outline: "none"

// }

export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    // choose file button function
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);

            var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

            var imagePreview = document.getElementById("image-preview");

            imagePreview.src = selectedImageSrc;
            imagePreview.style.display = "block"
        }
    }

    // function for uploading images, creating storage ID, progress, error handling
    const handleUpload = () => {
        if (image) {
            // variable imported from functions.js
            var imageName = makeId(10);
            // image storage location
            const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);
            // will give update when task is completed
            uploadTask.on("state_changed", (snapshot) => {
                // progress function with percentage
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            }, (error) => {
                console.log(error);
            }, () => {
                // get download url and upload the post info
                storage.ref("images").child(`${imageName}.jpg`)
                    .getDownloadURL()
                    .then((imageUrl) => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            uploadURL: imageUrl,
                            // makes username from email signed in with google without "@gmail.com"
                            username: user.email.replace("@gmail.com", ""),
                            avatar: user.photoURL
                        });
                    })
                // after user posts, remove caption, progress percentage, and image
                setCaption("");
                setProgress(0);
                setImage(null);

                // hides image preview after uploading
                document.getElementById("image-preview").style.display = "none";
            });
        } 
    };

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
                            placeholder="enter caption here..."
                            value={caption}
                            onChange={((e) => setCaption(e.target.value))}
                        >
                        </textarea>
                        <div style={CreatePostImagePreview}>
                            <img style={CreatePostPhotoIcon} id="image-preview" alt="preview"/>
                        </div>
                    </div>
                    <section style={CreatePostBottomBar}>
                    <div style={CreatePostUploadImage}>
                        <label htmlFor="file-input">
                            <AddAPhotoIcon  style={CreatePostPhotoIcon}/>
                        </label>
                        <input style={CreatePostUploadButton} id="file-input" type="file" accept="image/*" onChange={handleChange} />
                    </div>
                    <button style={{color: caption ? "black" : "whitesmoke", border: "none", backgroundColor: "white"}} onClick={handleUpload}>
                        {`Upload ${progress !== 0 ? progress : ""}`}
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
