import React from 'react';
import './custom-button.styles.scss';

const CustomButton = (props) => {
  return (
    <button
      className='custom-button'
      disabled={props.isDisabled}
      onClick={props.handleClick}
      id={props.id}
    >
      {props.text}
    </button>
  )
};

export default CustomButton;