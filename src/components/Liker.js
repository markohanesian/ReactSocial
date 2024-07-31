import React, { useState } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const ThumbUpButtonClicked = {
  backgroundColor: 'rgb(139, 195, 74)',
  order: 'none',
  padding: '6px',
  borderRadius: '50px',
  fontSize: '2rem'
}

const ThumbUpButton = {
  fill: "white",
  backgroundColor: 'transparent',
  border: 'none',
  padding: '6px',
  fontSize: '2rem'
}

export default function Liker() {
  const [thumb, setThumbUp] = useState(false);

  return (
    <>
      <button
        style={{
          border: 'none',
          backgroundColor: 'transparent'
        }}
        onClick={() => setThumbUp(thumb => !thumb)}
        aria-label="click to like post"
      >
        <ThumbUpIcon style={thumb ? ThumbUpButtonClicked : ThumbUpButton} />
      </button>
    </>
  );
}