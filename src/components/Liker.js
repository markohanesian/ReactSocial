import React, { useState } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const ThumbUpButtonClicked = {
  backgroundColor: 'rgb(115, 250, 179)',
  order: 'none',
  padding: '5px',
  borderRadius: '5px',
  margin: '1rem',
  fontSize: '2rem'
}

const ThumbUpButton = {
  backgroundColor: 'whitesmoke',
  border: 'none',
  padding: '5px',
  borderRadius: '5px',
  margin: '1rem',
  fontSize: '2rem'
}

const Liker = () => {
  const [thumb, setThumbUp] = useState(false);

  return (
    <>
      <button
        style={{
          border: 'none',
          backgroundColor: 'transparent'
        }}
        onClick={() => setThumbUp(thumb => !thumb)}
      >
        <ThumbUpIcon style={thumb ? ThumbUpButtonClicked : ThumbUpButton} />
      </button>
    </>
  );
}

export default Liker;