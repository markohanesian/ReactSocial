import React from 'react';
// components
import { Link } from '@material-ui/core/';

const aboutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '2rem',
    backgroundColor: "#101010",
    color: "white",
}

const AboutParagraph = {
    padding: '0 0 1rem 0'
}

export default function about() {
    return (
        <div style={aboutStyle}>
            <p style={AboutParagraph}>
                I created ReactSocial as a way to have my own custom social feed online where I can interact with friends and family by sharing images and posting about various topics for fun.
            </p>
            <p style={AboutParagraph}>
                I plan to add more features to make the site more interactive, fun, and secure, but in the meantime, sign in and create a post or comment.
            </p>
            <br></br>
            <Link href="https://github.com/markohanesian/social-media-app">View Source Code on GitHub</Link>
        </div>
    )
}
