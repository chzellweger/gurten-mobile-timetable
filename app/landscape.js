import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { swipeInit, swipeKill, getLiteralDay } from './helpers';
import jsonQuery from 'json-query';

import Stage from './stage';

const propTypes = {
  day: React.PropTypes.string.isRequired,
  stages: React.PropTypes.array.isRequired,
  data: React.PropTypes.object.isRequired,
  swipeHandler: React.PropTypes.func.isRequired
};

class Landscape extends Component {
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }

  componentDidMount() {
    const landscape = findDOMNode(this);
    swipeInit(landscape, this.handleSwipe);
  }

  componentWillUnmount() {
    const landscape = findDOMNode(this);
    swipeKill(landscape, this.handleSwipe);
  }

  handleSwipe(direction) {
    this.props.swipeHandler(direction);
  }

  render() {
    const literalDay = getLiteralDay(this.props.day);
    const thisLiteralDay = literalDay.long;
    let selected = jsonQuery(`shows[*day=${this.props.day}]`, {
      data: this.props.data
    });

    let children = this.props.stages.map(key => (
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
          <div className="day-name-wrapper">
            <div className={`day-name day-name-landscape ${this.props.day}`}>
              {`<-- ${thisLiteralDay} -->`}
            </div>
          </div>
          <div className="stages">{children}</div>
        </div>
      </div>
    );
  }
}

Landscape.propTypes = propTypes;

export default Landscape;
