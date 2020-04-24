import React from 'react';
import './status.styles.scss';

const Status = (props) => {
  const getMissingSquaresText = () => {
    return props.squaresText.find(text => !text) !== undefined;
  }

  const getTextIfNoWinner = () => {
    debugger
    let statusMessage = getMissingSquaresText() ?
      `The next player is ${props.player}`
    :
      `The game is tied! Press Restart Game to try again!`;
    return statusMessage;
  }

  return (
    <div className='status-container'>
      {
        !!props.winner ? 
          `The winner is ${props.winner}!`
        :
          getTextIfNoWinner()
      }
    </div>
  );
}

export default Status;
