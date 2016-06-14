import React, { Component } from 'react';

import Landscape from './landscape';
import Portrait from './portrait';
import DayChooser from './dayChooser';
import ContextChooser from './contextChooser';

import { getDay } from './helpers';

import DataStages from './data-stages';
import DataTents from './data-tents';

const propTypes = {
  config: React.PropTypes.object.isRequired
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 'do',
      orientation: 'portrait',
      context: 'stages',
      data: JSON.parse(DataStages)
    };

    this.setDay = this.setDay.bind(this);
    this.setContext = this.setContext.bind(this);
    this.swipeHandler = this.swipeHandler.bind(this);
  }

  componentWillMount() {
    const thisDay = getDay();

    this.setState({
      day: thisDay
    });
  }

  componentDidMount() {
    const mediaQueryList = window.matchMedia('(orientation: portrait)');

    // If there are matches, we're in portrait
    if (mediaQueryList.matches) {
      this.setState({ orientation: 'portrait' });
    } else {
      this.setState({ orientation: 'landscape' });
    }

    // Add a media query change listener
    mediaQueryList.addListener((mediaQuery) => {
      const match = mediaQuery.matches ? 'portrait' : 'landscape';
      this.setState({ orientation: match });
      // this.setOrientation(match);
    });
  }

  setDay(e) {
    console.log(e.target.id);
    const clickedDay = e.target.id;
    this.setState({ day: clickedDay });
  }

  setContext(e) {
    console.log(e.target.id);
    const clickedContext = e.target.id;
    if (clickedContext === 'stages') {
      this.setState({
        data: JSON.parse(DataStages),
        context: 'stages'
      });
    } else {
      this.setState({
        data: JSON.parse(DataTents),
        context: 'tents'
      });
    }
  }

  swipeHandler(direction) {
    if (direction === 'right') {
      switch (this.state.day) {
        case 'do':
          console.log('case: right && do');
          this.setState({ day: 'fr' });
          break;
        case 'fr':
          console.log('case: right && fr');
          this.setState({ day: 'sa' });
          break;
        case 'sa':
          console.log('case: right && sa');
          this.setState({ day: 'so' });
          break;
        case 'so':
          console.log('case: right && so');
          this.setState({ day: 'do' });
          break;
        default:
          this.setState({ day: 'do' });
          console.log('right && default case');
      }
    } else {
      switch (this.state.day) {
        case 'do':
          this.setState({ day: 'so' });
          console.log('case: left && do');
          break;
        case 'so':
          this.setState({ day: 'sa' });
          console.log('case: left && so');
          break;
        case 'sa':
          this.setState({ day: 'fr' });
          console.log('case: left && sa');
          break;
        case 'fr':
          this.setState({ day: 'do' });
          console.log('case: left && fr');
          break;
        default: this.setState({ day: 'do' });
      }
    }
  }

  render() {
    let appContext;
    let renderOrientationView;

    if (this.state.context === 'stages') {
      appContext = this.props.config.stages;
    } else {
      appContext = this.props.config.tents;
    }

    if (this.state.orientation === 'portrait') {
      renderOrientationView =
        (<Portrait
          data={this.state.data}
          days={this.props.config.days}
          day={this.state.day}
          setDay={this.setDay}
          swipeHandler={this.swipeHandler}
        />);
    } else {
      renderOrientationView =
        (<Landscape
          day={this.state.day}
          days={this.props.config.days}
          stages={appContext}
          data={this.state.data}
          setDay={this.setDay}
          swipeHandler={this.swipeHandler}
        />);
    }

    return (
      <div className="app">
        <DayChooser setDay={this.setDay} items={this.props.config.days} />
        <ContextChooser setContext={this.setContext} items={this.props.config.contexts} />
        <div className="content">{renderOrientationView}</div>
      </div>
      );
  }
}

App.propTypes = propTypes;

