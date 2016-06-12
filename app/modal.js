import React from 'react';

const propTypes = {
  content: React.PropTypes.object.isRequired,
  handleModal: React.PropTypes.func.isRequired
};

const Modal = (props) => (
  <div className="modal" onClick={props.handleModal}>
    <div className="modal-content">
      <div className="modal-title">
        {props.content.name}
      </div>
      <div className="modal-infos">
      {`${props.content.stage}, ${props.content.time} Uhr`}
      </div>
      <div className="modal-text">
        {props.content.description}
      </div>
    </div>
  </div>
    );

Modal.propTypes = propTypes;

export default Modal;
/*
function Modal(props) {
  return (
    <div className="modal" onClick={props.handleModal}>
      <div className="modal-content">
        <div className="modal-title">
          {props.content.name}
        </div>
        <div className="modal-infos">
        {`${props.content.stage}, ${props.content.time} Uhr`}
        </div>
        <div className="modal-text">
          {props.content.description}
        </div>
      </div>
    </div>
    );
}
*/