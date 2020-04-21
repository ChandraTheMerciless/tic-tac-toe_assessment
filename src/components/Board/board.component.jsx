import React from 'react';
import Square from '../Square/square.component';
import './board.styles.scss';

const Board = (props) => {
  return (
    <div className='board-container'>
      {
        props.squares.map((square, id) => {
          return <Square key={id} />
        })
      }
    </div>
  );
}

export default Board;
