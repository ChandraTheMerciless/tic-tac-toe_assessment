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

    const isWinner = this.checkForWinner(squares);
    
    this.setState({
      squares: squares,
      nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X',
      winner: isWinner ? this.state.nextPlayer : ''
    });
  }

  checkForWinner = (squares) => {
    const textValues = squares.map(square => square.text);

    const firstRow =          !!this.findMatches([textValues[0], textValues[1], textValues[2]]);
    const secondRow =         !!this.findMatches([textValues[3], textValues[4], textValues[5]]);
    const thirdRow =          !!this.findMatches([textValues[6], textValues[7], textValues[8]]);
    const firstColumn =       !!this.findMatches([textValues[0], textValues[3], textValues[6]]);
    const secondColumn =      !!this.findMatches([textValues[1], textValues[4], textValues[7]]);
    const thirdColumn =       !!this.findMatches([textValues[2], textValues[5], textValues[8]]);
    const forwardDiagonal =   !!this.findMatches([textValues[2], textValues[4], textValues[6]]);
    const backwardDiagonal =  !!this.findMatches([textValues[0], textValues[4], textValues[8]]);

    return firstRow || secondRow || thirdRow || firstColumn || secondColumn || thirdColumn || forwardDiagonal || backwardDiagonal;
  }

  findMatches = (values) => {
    debugger;
    const allValuesDefined = values.filter(value => !!value).length === 3;
    const valuesMatch = (values[0] === values[1]) && (values[1] === values[2]);
    return allValuesDefined && valuesMatch;
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