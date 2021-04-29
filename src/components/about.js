import React from 'react';
// components
import { Link } from '@material-ui/core/';

const aboutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '2rem',
    backgroundColor: 'white',
    margin: '1rem 0 0 0'
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
                I created this social media web application in order to be able to stay in touch with friends and family and also have a place to check out the latest news.
            </p>
            <p style={AboutParagraph}>
                I plan to add more features to make the site more interactive, fun, and secure, but in the meantime, sign in and create a post or check out the latest top news headlines.
            </p>
            <br></br>
            <Link href="https://github.com/markohanesian/social-media-app">View Source Code on GitHub</Link>
        </div>
    )
}
