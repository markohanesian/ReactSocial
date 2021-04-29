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
    width: '100%',
    maxWidth: '600px'
}

const LinkStyle = {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 1rem 1rem 0rem'
}

const LinkCaption = {
    display: 'flex',
    flexDirection: 'column'
}

const ReadMoreLink = {
    textDecoration: 'none',
    fontWeight: '900',
    backgroundColor: 'blue',
    color: 'white',
    padding: '.5rem',
    margin: '1rem 0 0 0',
    borderRadius: '5px'
}

const NewsItem = ({title, description, url, urlToImage}) => {
    return (
        <div style={NewsItemContainer}>
            {/* article preview image, headline, description */}
            <img style={ImageStyle} src={urlToImage} alt="New Article Preview" />
            <h3 style={LinkStyle} href={url}>{title}</h3>
            <p style={LinkCaption}>{description}</p>
            <a style={ReadMoreLink} href={url}>Read More</a>
        </div>
    )
}

export default NewsItem
