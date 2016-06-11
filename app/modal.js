import React from 'react';

const propTypes = {
  content: React.PropTypes.object.isRequired,
  handleModal: React.PropTypes.func.isRequired
};

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-title" onClick={props.handleModal}>
          {props.content.name}
        </div>
        <div className="modal-text" onClick={props.handleModal}>
          {props.content.description}
        </div>
      </div>
    </div>
    );
}

Modal.propTypes = propTypes;

export default Modal;
