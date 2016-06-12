import React from 'react';
import Button from './button';

const propTypes = {
  setDay: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired
};

function DayChooser(props) {
  let clicked = props.setDay;
  let children = props.items.map(key => (
    <Button
      key={key}
      name={key}
      className="button"
      clicked={clicked}
    />
  ));

  return <div className="buttons days">{children}</div>;
}

DayChooser.propTypes = propTypes;

export default DayChooser;
