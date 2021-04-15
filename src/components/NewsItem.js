import React from 'react'

// styling
const NewsItemContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1rem',
    marginBottom: '1.5rem'
}

const ImageStyle = {
    height: '100px',
    width: 'auto'
}

const LinkStyle = {
    textDecoration: 'none'
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
        </div>
    )
}

export default NewsItem
