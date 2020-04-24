import React from 'react';
import './game.styles.scss';
import Board from '../Board/board.component';
import Status from '../Status/status.component';
import CustomButton from '../CustomButton/custom-button.component';

// NOTE: making this a class component to store game state
class Game extends React.Component {
  squareAmount = 9;

  constructor() {
    super();

    this.state = this.getInitialState();
  }

  componentDidMount () {
    this.getInitialSquaresArray();
  }

  getInitialState = () => {
    return {
      squares: [],
      nextPlayer: 'X',
      winner: '',
      history: []
    };
  }

  getInitialSquaresArray = () => {
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
    if (!!this.state.squares[square.id].text || !!this.state.winner) { return; };

    const squares = this.state.squares.slice();
    const currentPlayer = this.state.nextPlayer;
    squares[square.id].text = currentPlayer;

    const isWinner = this.checkForWinner(squares);

    this.setState({
      squares: squares,
      nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X',
      winner: isWinner ? currentPlayer : ''
    });
  }

  resetGame = () => {
    this.setState(this.getInitialState());
    this.getInitialSquaresArray();
  }

  checkForWinner = (squares) => {
    const textValues = squares.map(square => square.text);
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ];

    let matchFound = lines.filter((line) => {
      const [a, b, c] = line;
      const allValuesDefined = !!textValues[a] && !!textValues[b] && !!textValues[c];
      if (allValuesDefined) {
        return textValues[a] === textValues[b] && textValues[b] === textValues[c]
      };
    }).length > 0;

    return !!matchFound;
  }

  render() {
    return (
      <div className='game-container'>
        <h1>Tic Tac Toe!</h1>
        <div className='game-controls-container'>
          <CustomButton
            text='Go Back a Move'
            key='rewind-game'
            id='rewind-game'
          />
          <CustomButton
            text='Reset Game'
            key='reset-game'
            id='reset-game'
            handleClick={this.resetGame}
          />
        </div>
        <Board squares={this.state.squares} />
        <Status winner={this.state.winner} player={this.state.nextPlayer}/>
      </div>
    )
  }
}

export default Game;