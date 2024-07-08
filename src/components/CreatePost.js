import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
// icon for photo upload button
import { Fab, Tooltip, Button } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import firebase from "firebase";
import { db, storage } from "../firebase";
import makeId from "./helper/functions";
import HeaderNewUser from "./HeaderNewUser";

// topmost div
const CreatePostStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
  width: "90vw",
  maxWidth: "900px",
  backgroundColor: "transparent",
  // border: "1px solid #fff",
  // borderRadius: "12px",
};

// Sub-div containing text and other elements
const CreatePostContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// User post div
const CreatePostTextArea = {
  display: "flex",
  flexDirection: "column",
  width: "90vw",
  maxWidth: "600px",
};

// text box where user writes post
const CreatePostInput = {
  display: "flex",
  backgroundColor: "transparent",
  resize: "none",
  margin: "1rem",
  padding: ".5rem",
  fontWeight: "700",
  border: "none",
  color: "#fff",
};

// image preview styling
const CreatePostImagePreview = {
  display: "flex",
  justifyContent: "center",
  color: "red",
};

// Bottom bar section
const CreatePostBottomBar = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "1rem",
};

// upload image icon
const CreatePostPhotoIconFab = {
  display: "flex",
  backgroundColor: "white",
};

const CreatePostPhotoIcon = {
  display: "flex",
  cursor: "pointer",
  fontSize: "2rem",
  height: "120px",
};

// hidden default upload button
const CreatePostUploadButton = {
  display: "none",
};

export default function CreatePost() {
  const [user] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [userInput, setUserInput] = useState("");
  // choose file button function
  const handleChange = (e) => {
    setUserInput(e.target.value);

    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

      var imagePreview = document.getElementById("image-preview");

      imagePreview.src = selectedImageSrc;
      imagePreview.style.display = "block";
    }
  };

  // function for uploading images, creating storage ID, progress, error handling
  const handleUpload = () => {
    if (image) {
      // variable imported from functions.js
      var imageName = makeId(10);
      // image storage location
      const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);
      // will give update when task is completed
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function with percentage
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          // get download url and upload the post info
          storage
            .ref("images")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                uploadURL: imageUrl,
                // makes username from email signed in with google without "@gmail.com"
                username: user.email.replace("@gmail.com", ""),
                avatar: user.photoURL,
                ownerEmail: user.email, // Add ownerEmail field
              });
            });
          // after user posts, remove caption, progress percentage, and image
          setCaption("");
          setProgress(0);
          setImage(null);

          // hides image preview after uploading
          document.getElementById("image-preview").style.display = "none";
        }
      );
    }
  };

  return (
    <div style={CreatePostStyle}>
      {/* if user exists, post. If not, sign in */}
      {user ? (
        <div style={CreatePostContainer}>
          <div style={CreatePostTextArea}>
            <textarea
              style={CreatePostInput}
              rows="3"
              placeholder="Write something to post to the feed, and add an image if you have one to share..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
            <div style={CreatePostImagePreview}>
              {/* img styled inline so that it is hidden by default */}
              <img
                style={{ display: "none", height: "8rem" }}
                id="image-preview"
                alt="preview"
              />
            </div>
          </div>
          <section style={CreatePostBottomBar}>
            <div>
              <Tooltip title="Add Image" aria-label="add">
                <Fab style={CreatePostPhotoIconFab}>
                  <label htmlFor="file-input">
                    <AddAPhotoIcon style={CreatePostPhotoIcon} />
                  </label>
                </Fab>
              </Tooltip>

              <input
                style={CreatePostUploadButton}
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <Button
              variant="contained"
              style={{
                color: caption ? "black" : "whitesmoke",
                border: "none",
                backgroundColor: "white",
              }}
              onClick={handleUpload}
              disabled={!userInput}
            >
              {`Upload ${progress !== 0 ? progress : ""}`}
            </Button>
          </section>
        </div>
      ) : (
        <HeaderNewUser />
      )}
    </div>
  );
}
