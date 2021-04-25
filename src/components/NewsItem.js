import React from 'react'

// styling
const NewsItemContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1rem',
    marginBottom: '1.5rem',
    backgroundColor: 'white',
    maxWidth: '600px'
}

const ImageStyle = {
    height: 'auto',
    width: '600px'
}

const LinkStyle = {
    textDecoration: 'none'
}

const ReadMoreLink = {
    textDecoration: 'none',
    backgroundColor: 'blue',
    color: 'white',
    padding: '.5rem',
    margin: '1rem 0 0 0'
}

const NewsItem = ({title, description, url, urlToImage}) => {
    return (
        <div style={NewsItemContainer}>
            {/* article preview image, headline, description */}
            <img style={ImageStyle} src={urlToImage} alt="New Article Preview" />
            <h2>
                <a style={LinkStyle} href={url}>{title}</a>
            </h2>
            <p>{description}</p>
            <a style={ReadMoreLink} href={url}>Read More</a>
        </div>
    )
}

export default NewsItem
