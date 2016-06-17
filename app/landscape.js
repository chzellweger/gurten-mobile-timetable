import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { helpers as h } from './helpers';
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
    // add the swipe-listener to element
    const landscape = findDOMNode(this);
    h.swipeInit(landscape, this.handleSwipe);
  }

  componentWillUnmount() {
    // remove the swipe-listener
    const landscape = findDOMNode(this);
    h.swipeKill(landscape, this.handleSwipe);
  }

  handleSwipe(direction) {
    this.props.swipeHandler(direction);
  }

  render() {
    const literalDay = h.getLiteralDay(this.props.day);
    const thisLiteralDay = literalDay.long;

    // get the objects from the data-json with matching day
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
              {`<= ${thisLiteralDay} =>`}
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
