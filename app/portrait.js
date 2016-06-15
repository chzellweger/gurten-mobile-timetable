import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import jsonQuery from 'json-query';

import Day from './day';

import { helpers as h } from './helpers';

const propTypes = {
  swipeHandler: React.PropTypes.func.isRequired,
  day: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired
};

class Portrait extends Component {
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }

  componentDidMount() {
    const landscape = findDOMNode(this);
    h.swipeInit(landscape, this.handleSwipe);
  }

  componentWillUnmount() {
    const landscape = findDOMNode(this);
    h.swipeKill(landscape, this.handleSwipe);
  }

  handleSwipe(direction) {
    this.props.swipeHandler(direction);
  }

  render() {
    const literalDay = h.getLiteralDay(this.props.day);
    const thisLiteralDay = literalDay.long;

    const selected = jsonQuery(`shows[*day=${this.props.day}]`, {
      data: this.props.data
    });

    return (
      <div className="portrait">
        <div className="day-name-wrapper">
          <div className={`day-name day-name-portrait ${this.props.day}`}>
            {`<-- ${thisLiteralDay} -->`}
          </div>
        </div>
        <Day
          day={this.props.day}
          data={selected.value}
        />
      </div>
    );
  }
}

Portrait.propTypes = propTypes;

export default Portrait;
