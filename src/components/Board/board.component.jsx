import React from 'react';
import Square from '../Square/square.component';
import './board.styles.scss';

const Board = ({...props}) => {
  // hard coded because the number of square in tic tac toe won't change
  const squareAmount = 9;

  return (
    <div className='board-container'>
      {
        this.state.squares.map((square, id) => {
          return <Square key={id} />
        })
      }
    </div>
  );
}

export default Board;
