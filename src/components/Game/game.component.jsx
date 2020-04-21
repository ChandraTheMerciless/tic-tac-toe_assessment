import React from 'react';
import './game.styles.scss';
import Board from '../Board/board.component';
import Status from '../Status/status.component';

// NOTE: making this a class component to store game state
class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      squares: []
    };
  }

  componentDidMount () {
    this.setState({squares: Array(this.squareAmount).fill({})});
  }

  render() {
    return (
      <div className='game-container'>
        <h1>Tic Tac Toe!</h1>
        <Board />
        <Status />
      </div>
    )
  }
}

export default Game;