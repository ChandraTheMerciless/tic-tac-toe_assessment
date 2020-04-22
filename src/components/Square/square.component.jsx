import React from 'react';
import './square.styles.scss';

const Square = (props) => {
  return (
    <button
      type='button'
      className='square'
      onClick={props.handleClick}
    >{ !!props.text ? props.text : '' }</button>
  )
}

export default Square;