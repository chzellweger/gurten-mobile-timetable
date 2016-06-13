import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


const propTypes = {
  content: React.PropTypes.object.isRequired,
  handleModal: React.PropTypes.func.isRequired
};

const Modal = (props) => (
  <CSSTransitionGroup
    transitionAppear
    transitionEnter
    transitionLeave
    transitionName="slidePortrait"
    transitionEnterTimeout={1500}
    transitionLeaveTimeout={0}
  >
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
  </CSSTransitionGroup>
    );

Modal.propTypes = propTypes;

export default Modal;
