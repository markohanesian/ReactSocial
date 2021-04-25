import React from 'react'
import NewsList from './NewsList';

const newsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
}

export default function news() {
    return (
        <div style={newsStyle}>
            <NewsList /> 
        </div>
    )
}
