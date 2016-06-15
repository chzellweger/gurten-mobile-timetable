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
    const common = (
      <div>
        <div className="show-time">{this.props.showData.time}</div>
        <div className="show-name band">{this.props.showData.name}</div>
      </div>
      );

    const modal = (
      <Modal
        content={this.props.showData}
        handleModal={this.handleModal}
      />
      );

    if (this.state.modalOpen) {
      if (this.props.insideStage) {
        return (
          <div>
            <div className="show" onClick={this.handleModal}>
              {common}
            </div>
            {modal}
          </div>
            );
      } else {
        return (
          <div>
            <div className="show" onClick={this.handleModal}>
              {common}
              <div className="show-stage">{this.props.showData.stage}</div>
            </div>
            {modal}
          </div>
          );
      }
    } else {
      if (this.props.insideStage) {
        return (
          <div className="show" onClick={this.handleModal}>
            {common}
          </div>
        );
      } else {
        return (
          <div className="show" onClick={this.handleModal}>
            {common}
            <div className="show-stage">{this.props.showData.stage}</div>
          </div>
          );
      }
    }
  }
}

Show.propTypes = propTypes;

export default Show;
