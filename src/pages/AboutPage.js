import React from "react";
// components
import MenuButton from "../components/MenuButton";
import Typography from "@mui/material/Typography";

const aboutStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "2rem",
  backgroundColor: "#101010",
  color: "white",
};

export default function About() {
  return (
    <div style={aboutStyle}>
      <Typography
        variant="h3"
        component="h1"
        aria-label="About Section Heading"
      >
        About
      </Typography>
      <Typography
        variant="body1"
        component="p"
        aria-label="Description of ReactSocial"
      >
        I developed ReactSocial as a custom social media platform to interact
        with friends and family by sharing images and posting about various
        topics for fun. The application is built using React for the frontend,
        with Firebase handling the backend, including authentication, Firestore
        for the database, and hosting. Material-UI is used extensively to ensure
        a modern and accessible UI/UX.
      </Typography>
      <br />
      <Typography
        variant="h4"
        component="h2"
        aria-label="Process Section Heading"
      >
        Process
      </Typography>
      <Typography
        variant="body1"
        component="p"
        aria-label="Description of Development Process"
      >
        Building ReactSocial involved several major steps. Initially, I set up
        the React frontend and integrated Firebase for authentication and
        database management. Upgrading Firebase required significant refactoring
        to align with the new APIs and features. Integrating Material-UI was
        another key step, which involved reworking the styling approach to
        leverage its theming and component library effectively. Additionally,
        ensuring seamless and secure user interactions required troubleshooting
        complex user state and authentication flows.
      </Typography>
      <br />
      <Typography
        variant="h4"
        component="h2"
        aria-label="Impressive Features Section Heading"
      >
        How to Use
      </Typography>
      <Typography
        variant="body1"
        component="p"
        aria-label="Description of How to use"
      >
        Sign into the website with your Google account, and post a message and
        photo - think of it like a virtual social group where you can share your
        interests and recent life moments. If you're not happy with your post,
        you can delete it. Whatever you post, I'll be sure to leave a comment.
        <br></br>
        <br></br>
        Fixing bugs and rolling out new features in perpetuity, <br></br>
        Mark 👋
      </Typography>
      <br /> <br />
      <br />
      <MenuButton
        component="link"
        text="View Source Code on GitHub"
        alt="View Source Code on GitHub Button"
        href="https://github.com/markohanesian/social-media-app"
      />
    </div>
  );
}
