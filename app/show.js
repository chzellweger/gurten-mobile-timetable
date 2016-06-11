import React, { Component } from 'react';

const propTypes = {
  showData: React.PropTypes.object.isRequired,
  insideStage: React.PropTypes.bool.isRequired
};

class Show extends Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
  }

  openModal(e) {
    console.log(e);
    const element = e.target;
    element.style.display = 'block';
  }

  render() {
    if (this.props.insideStage) {
      return (
        <div className="show" onClick={this.openModal}>
          <div className="show-time">{this.props.showData.time}</div>
          <div className="show-name band">{this.props.showData.name}</div>

          <div className="modal">
            <div className="modal-title">{this.props.showData.name}</div>
            <div className="modal-text">{this.props.showData.description}</div>
          </div>

        </div>
      );
    } else {
      return (
        <div className="show" onClick={this.openModal}>
          <div className="show-time">{this.props.showData.time}</div>
          <div className="show-name band">{this.props.showData.name}</div>
          <div className="show-stage">{this.props.showData.stage}</div>

          <div className="modal">
            <div className="modal-title">{this.props.showData.name}</div>
            <div className="modal-text">{this.props.showData.description}</div>
          </div>

        </div>
      );
    }
  }
}

Show.propTypes = propTypes;

export default Show;
