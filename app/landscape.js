import React from 'react';
import jsonQuery from 'json-query';

import Stage from './stage';

import { getLiteralDay } from './helpers';

const propTypes = {
  day: React.PropTypes.string.isRequired,
  stages: React.PropTypes.array.isRequired,
  data: React.PropTypes.object.isRequired
};

function Landscape(props) {
  const literalDay = getLiteralDay(props.day);
  let thisLiteralDay = literalDay.long;
  let selected = jsonQuery(`shows[*day=${props.day}]`, {
    data: props.data
  });

  let children = props.stages.map(key => (
    <Stage
      key={key}
      stage={key}
      data={selected}
      className="stage"
    />
      ));

  return (
    <div className="landscape">
      <div className="stages-container">
        <div className={`day-name ${props.day}`}>{thisLiteralDay}</div>
        <div className="stages">{children}</div>
      </div>
    </div>
  );
}

Landscape.propTypes = propTypes;

export default Landscape;
