import React from 'react';
import { getLiteralDay } from './helpers';

const propTypes = {
  className: React.PropTypes.string.isRequired,
  clicked: React.PropTypes.func.isRequired,
  day: React.PropTypes.string.isRequired
};

function Button(props) {
  const literalDay = getLiteralDay(props.day);
  let thisLiteralDay = literalDay.short;

  return (
    <button
      id={props.day}
      className={`${props.day} ${props.className}`}
      onClick={props.clicked}
    >
      {thisLiteralDay}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
