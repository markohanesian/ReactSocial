import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { Fab, Tooltip, Button } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { db, storage } from "../firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
      var imageName = makeId(10);
      const imageRef = ref(storage, `images/${imageName}.jpg`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((imageUrl) => {
            addDoc(collection(db, "posts"), {
              timestamp: serverTimestamp(),
              caption: caption,
              uploadURL: imageUrl,
              username: user.email.replace("@gmail.com", ""),
              avatar: user.photoURL,
              ownerEmail: user.email,
            });
          });

          setCaption("");
          setProgress(0);
          setImage(null);
          document.getElementById("image-preview").style.display = "none";
        }
      );
    }
  };

  return (
    <div style={CreatePostStyle}>
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