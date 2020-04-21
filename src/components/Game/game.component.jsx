import React from 'react';
import './game.styles.scss';
import Board from '../Board/board.component';
import Status from '../Status/status.component';

// NOTE: making this a class component to store game state
class Game extends React.Component {
  squareAmount = 9;

  constructor() {
    super();

    this.state = {
      squares: [],
      nextPlayer: 'X'
    };
  }

  componentDidMount () {
    let squares = Array(this.squareAmount).fill({});
    squares = squares.map((square, id) => {
      let _square = JSON.parse(JSON.stringify(square));
      _square.id = id;
      _square.text = '';
      _square.handleClick = this.handleClick;
      return _square;
    });
    this.setState({squares: squares});
  }

  handleClick = (squareId) => {
    // on click this function should... 
    // - if square clicked has text, return function
    // - set new state on square clicked to have its text as X or O
    // - set another state to say whether X or O is next
    // 
  }

  render() {
    return (
      <div className='game-container'>
        <h1>Tic Tac Toe!</h1>
        <Board squares={this.state.squares} />
        <Status />
      </div>
    )
  }
}

export default Game;