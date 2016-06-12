import React from 'react';
import Button from './button';
import { getLiteralDay } from './helpers';

const propTypes = {
  setDay: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired
};

function DayChooser(props) {
  const clickHandler = props.setDay;
  const buttonData = {
    key: undefined,
    name: undefined
  };
  let children = props.items.map((key) => {
    buttonData.key = key;
    buttonData.name = getLiteralDay(key);

    return (
      <Button
        key={key}
        id={key}
        name={buttonData.name.short}
        clickHandler={clickHandler}
      />
    );
  });

  return <div className="buttons days">{children}</div>;
}

DayChooser.propTypes = propTypes;

export default DayChooser;
