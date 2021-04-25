import React from 'react';
// components

const aboutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '2rem',
    backgroundColor: 'white'
}

export default function about() {
    return (
        <div style={aboutStyle}>
            <h1>
                about
            </h1>
            <p>
                I created this social media web application as a personal project; I wanted to create a simple social media site that has news and a few features that I could use to stay in touch with friends and family.
            </p>
            <br></br>
            <p>
                I plan to add more features to make the site more interactive, fun, and secure, but in the meantime, sign in and create a post or check out the latest top news headlines.
            </p>
            <br></br>
            <a href="https://github.com/markohanesian/social-media-app">GitHub</a>
            <a href="https://markohanesian.com/">markohanesian.com</a>
        </div>
    )
}
