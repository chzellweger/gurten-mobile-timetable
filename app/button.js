import React from 'react';

const propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired
};

function Button(props) {
  return (
    <button
      id={props.id}
      className={`${props.id} button`}
      onClick={props.clickHandler}
    >
    {props.name}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
