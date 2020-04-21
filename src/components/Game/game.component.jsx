import React from 'react';
import './game.styles.scss';
import Board from '../Board/board.component';

// NOTE: making this a class component to store game state
class Game extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className='game-container'>
        <h1>Tic Tac Toe!</h1>
        <Board />
        <div>other game info will go here...</div>
      </div>
    )
  }
}

export default Game;