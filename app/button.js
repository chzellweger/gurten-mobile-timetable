import React from 'react';
import { getLiteralDay } from './helpers';

const propTypes = {
  className: React.PropTypes.string.isRequired,
  clicked: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired
};

function Button(props) {
  const literalDay = getLiteralDay(props.name);
  let thisLiteralDay = literalDay.short;

  return (
    <button
      id={props.name}
      className={`${props.name} ${props.className}`}
      onClick={props.clicked}
    >
      {thisLiteralDay}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
