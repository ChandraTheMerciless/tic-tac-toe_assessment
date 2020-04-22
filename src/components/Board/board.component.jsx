import React from 'react';
import Square from '../Square/square.component';
import './board.styles.scss';

const Board = (props) => {
  return (
    <div className='board-container'>
      {
        props.squares.map((square) => {
          return <Square key={square.id} text={square.text} handleClick={() => square.handleClick(square)} />
        })
      }
    </div>
  );
}

export default Board;
