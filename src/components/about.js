import React from 'react';
// components
import { Link } from '@material-ui/core/';

const aboutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '2rem',
    backgroundColor: 'white'
}

const AboutParagraph = {
    padding: '0 0 1rem 0'
}

export default function about() {
    return (
        <div style={aboutStyle}>
            {/* <h1>
                about
            </h1> */}
            <p style={AboutParagraph}>
                I created this social media web application as a personal project; I wanted to create a simple social media site that has news and a few features that I could use to stay in touch with friends and family.
            </p>
            <p style={AboutParagraph}>
                I plan to add more features to make the site more interactive, fun, and secure, but in the meantime, sign in and create a post or check out the latest top news headlines.
            </p>
            <br></br>
            <Link href="https://github.com/markohanesian/social-media-app">GitHub</Link>
            <Link href="https://markohanesian.com/">markohanesian.com</Link>
        </div>
    )
}
