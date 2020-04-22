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
      nextPlayer: 'X',
      winner: ''
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

  handleClick = (square) => {
    if (!!this.state.squares[square.id].text) { return; };
    const squares = this.state.squares.slice();
    squares[square.id].text = this.state.nextPlayer;
    this.setState({
      squares: squares,
      nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X'
    });
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