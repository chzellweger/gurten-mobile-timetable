import config from './config';

import React, { Component } from 'react';

import Landscape from './landscape';
import Portrait from './portrait';
import DayChooser from './dayChooser';
import ContextChooser from './contextChooser';

import { getDay } from './helpers';

import DataStages from './data-stages';
import DataTents from './data-tents';

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

  render() {
    let appContext;
    let renderOrientationView;

    if (this.state.context === 'stages') {
      appContext = config.stages;
    } else {
      appContext = config.tents;
    }

    if (this.state.orientation === 'portrait') {
      renderOrientationView =
        (<Portrait
          data={this.state.data}
          days={config.days}
          day={this.state.day}
          setDay={this.setDay}
        />);
    } else {
      renderOrientationView =
        (<Landscape
          data={this.state.data}
          days={config.days}
          day={this.state.day}
          stages={appContext}
          setDay={this.setDay}
        />);
    }

    return (
      <div className="app">
        <ContextChooser setContext={this.setContext} items={config.contexts} />
        <DayChooser setDay={this.setDay} items={config.days} />
        <div className="content">{renderOrientationView}</div>
      </div>
      );
  }
}
