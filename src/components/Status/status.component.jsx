import React from 'react';
import './status.styles.scss';

const Status = (props) => {
  
  return (
    <div
      className='status-container'
    >
      {
        props.isWinner ? 
          `The winner is ${props.player}!`
        :
          `The next player is ${props.player}`
      }
    </div>
  );
}

export default Status;
