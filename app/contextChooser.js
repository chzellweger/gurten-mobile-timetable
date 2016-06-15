import React from 'react';
import Button from './button';
import { helpers as h } from './helpers';

const propTypes = {
  setContext: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired
};

function ContextChooser(props) {
  let clickHandler = props.setContext;
  let children = props.items.map((key) => {
    let name = h.getLiteralStage(key);

    return (
      <Button
        key={key}
        id={key}
        name={name}
        className="button"
        clickHandler={clickHandler}
      />
    );
  });

  return <div className="buttons context">{children}</div>;
}

ContextChooser.propTypes = propTypes;

export default ContextChooser;
