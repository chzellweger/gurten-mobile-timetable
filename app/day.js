import React from 'react';
import Shows from './shows';
import { getLiteralDay } from './helpers';

const propTypes = {
  day: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
};

function Day(props) {
  const literalDay = getLiteralDay(props.day);
  let thisLiteralDay = literalDay.long;

  return (
    <div className={`day ${props.day}`}>
      <Shows
        day={thisLiteralDay}
        data={props.data}
      />
    </div>
  );
}

Day.propTypes = propTypes;

export default Day;
