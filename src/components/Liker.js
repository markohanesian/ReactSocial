import React, { useState } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const ThumbUpButton = {
  backgroundColor: 'red',
  border: 'none',
  padding: '5px',
  borderRadius: '5px',
}

const ThumbStyle = {
  color: 'white'
}

const Liker = () => {
  const [thumb, setThumbUp] = useState();

  return (
    <div>
      <button style={ThumbUpButton} onClick={setThumbUp}>
        {thumb ? <ThumbUpIcon style={ThumbStyle} /> : <ThumbUpIcon style={ThumbUpButton}/>}
        
      </button>
    </div>
  );
}

export default Liker;