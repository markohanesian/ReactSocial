import React from 'react'
import NewsList from './NewsList';

const newsStyle = {
    display: 'flex',
    // height: '100vh',
    flexDirection: 'column',
    alignItems: 'center'
}

export default function news() {
    return (
        <div style={newsStyle}>
            <NewsList /> 
        </div>
    )
}
