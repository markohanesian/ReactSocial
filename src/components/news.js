import React from 'react';
import NewsList from './NewsList';

const newsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    margin: '1rem 0 0 0'
}

export default function news() {
    return (
        <div style={newsStyle}>
            <NewsList /> 
        </div>
    )
}
