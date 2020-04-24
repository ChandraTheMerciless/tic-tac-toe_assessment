import React from 'react';
import './status.styles.scss';

const Status = (props) => {
  
  return (
    <div
      className='status-container'
    >
      {
        !!props.winner ? 
          `The winner is ${props.winner}!`
        :
          `The next player is ${props.player}`
      }
    </div>
  );
}

export default Status;
