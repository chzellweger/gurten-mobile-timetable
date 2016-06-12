import React from 'react';
import Button from './button';

const propTypes = {
  setContext: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired
};

function ContextChooser(props) {
  let clicked = props.setContext;
  let children = props.items.map(key => (
    <Button
      key={key}
      name={key}
      className="button"
      clicked={clicked}
    />
  ));

  return <div className="buttons context">{children}</div>;
}

ContextChooser.propTypes = propTypes;

export default ContextChooser;
