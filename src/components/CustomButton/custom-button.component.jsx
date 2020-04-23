import React from 'react';

const CustomButton = (props) => {
  return (
    <button
      className='custom-button'
      disabled={props.isDisabled}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  )
};

export default CustomButton;