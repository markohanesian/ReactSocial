import React from 'react'

const btnStyle = {
    backgroundColor: 'salmon',
    color: 'white',
    border: 'none',
    padding: '5px',

    // backgroundImage: 'url(' + imgUrl + ')',
  };

export default function SignInBtn() {
    return (
        <div>
            <button style={btnStyle}>Sign In With Google</button>
        </div>
    )
}