import React, { Component } from 'react';
import Modal from './modal.js';

const propTypes = {
  showData: React.PropTypes.object.isRequired,
  insideStage: React.PropTypes.bool.isRequired
};

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState(
      { modalOpen: !this.state.modalOpen }
    );
  }

  render() {
    if (this.state.modalOpen) {
      return <Modal content={this.props.showData} handleModal={this.handleModal} />;
    } else {
      if (this.props.insideStage) {
        return (
          <div className="show" onClick={this.handleModal}>
            <div className="show-time">{this.props.showData.time}</div>
            <div className="show-name band">{this.props.showData.name}</div>
          </div>
        );
      } else {
        return (
          <div className="show" onClick={this.handleModal}>
            <div className="show-time">{this.props.showData.time}</div>
            <div className="show-name band">{this.props.showData.name}</div>
            <div className="show-stage">{this.props.showData.stage}</div>
          </div>
        );
      }
    }
  }
}

Show.propTypes = propTypes;

export default Show;
