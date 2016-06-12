import React from 'react';
import jsonQuery from 'json-query';

import Day from './day';

const propTypes = {
  day: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired
};

function Portrait(props) {
  const selected = jsonQuery(`shows[*day=${props.day}]`, {
    data: props.data
  });

  return (
    <div className="portrait">
      <Day
        day={props.day}
        data={selected.value}
      />
    </div>
  );
}

Portrait.propTypes = propTypes;

export default Portrait;
