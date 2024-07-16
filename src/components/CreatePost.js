import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { Fab, Tooltip, Button, Box, CircularProgress } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import makeId from "./helper/functions";
import HeaderNewUser from "./HeaderNewUser";

const CreatePostStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
  width: "90vw",
  maxWidth: "900px",
};

export default function CreatePost() {
  const [user] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      var selectedImageSrc = URL.createObjectURL(e.target.files[0]);
      var imagePreview = document.getElementById("image-preview");
      imagePreview.src = selectedImageSrc;
      imagePreview.style.display = "block";
    }
  };

  const handleUpload = () => {
    if (image) {
      setLoading(true);
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
              // Ensure ownerEmail is set to user's email
              ownerEmail: user.email,
            });
            setCaption("");
            setProgress(0);
            setImage(null);
            document.getElementById("image-preview").style.display = "none";
            setLoading(false);
          });
        }
      );
    }
  };

  return (
    <div style={CreatePostStyle}>
      {user ? (
        <Box
          component="div"
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ width: "100%", maxWidth: "600px" }}
        >
          <label htmlFor="post-caption" style={{ display: "none" }}>
            Write here to post to the feed
          </label>
          <textarea
            id="post-caption"
            style={{
              display: "flex",
              backgroundColor: "transparent",
              resize: "none",
              margin: "1rem",
              padding: ".5rem",
              fontWeight: "700",
              border: "none",
              color: "#fff",
              width: "100%",
            }}
            rows="3"
            placeholder="Write something to post to the feed, and add an image if you have one to share..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            aria-label="Write here to post to the feed"
          />
          <Box
            component="div"
            display="flex"
            justifyContent="center"
            sx={{ marginBottom: "1rem", width: "100%" }}
          >
            <img
              style={{ display: "none", height: "8rem" }}
              id="image-preview"
              alt="preview"
            />
          </Box>
          <Box
            component="section"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Tooltip title="Add Image" aria-label="add">
              <Fab
                sx={{
                  "&.MuiButtonBase-root": {
                    backgroundColor: "#fff",
                    height: "56px",
                  },
                  "&:hover": {
                    backgroundColor: "rgb(139, 195, 74)",
                  },
                }}
              >
                <label htmlFor="file-input" style={{ display: "none" }}>
                  Add Image
                </label>
                <AddAPhotoIcon
                  sx={{
                    cursor: "pointer",
                    fontSize: "2rem",
                    height: "120px",
                  }}
                  aria-hidden="true"
                />
              </Fab>
            </Tooltip>

            <input
              style={{ display: "none" }}
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
            <Button
              variant="contained"
              sx={{
                "&.MuiButtonBase-root": {
                  backgroundColor: "#fff",
                  color: "black",
                  height: "56px",
                },
                "&:hover": {
                  backgroundColor: "rgb(139, 195, 74)",
                },
              }}
              onClick={handleUpload}
            >
              {loading ? (
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={24}
                  sx={{ color: "black" }}
                />
              ) : (
                "Post"
              )}
            </Button>
          </Box>
        </Box>
      ) : (
        <HeaderNewUser />
      )}
    </div>
  );
}
