import React from 'react';
import jsonQuery from 'json-query';

import Day from './day';

import { getLiteralDay } from './helpers';

const propTypes = {
  day: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired
};

function Portrait(props) {
  const literalDay = getLiteralDay(props.day);
  let thisLiteralDay = literalDay.long;

  const selected = jsonQuery(`shows[*day=${props.day}]`, {
    data: props.data
  });

  return (
    <div className="portrait">
      <div className="day-name-wrapper">
        <div className={`day-name day-name-portrait ${props.day}`}>{thisLiteralDay}</div>
      </div>
      <Day
        day={props.day}
        data={selected.value}
      />
    </div>
  );
}

Portrait.propTypes = propTypes;

export default Portrait;
