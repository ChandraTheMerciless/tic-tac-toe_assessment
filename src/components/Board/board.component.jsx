import React from 'react';
import Square from '../Square/square.component';
import './board.styles.scss';

class Board extends React.Component {
  // hard coded because the number of square in tic tac toe won't change
  squareAmount = 9;

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
      <div>
        {
          this.state.squares.map((square, id) => {
            return <Square key={id} />
          })
        }
      </div>
    );
  }
}

export default Board;
