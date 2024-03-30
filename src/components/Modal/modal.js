import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './modal.module.css';

// Backdrop component: Renders a semi-transparent background behind the modal
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

// ModalOverlay component: Renders the actual modal content
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

// Modal component: Combines Backdrop and ModalOverlay using React Portals
const Modal = (props) => {
    // Finding the HTML element with id "modal" to mount the portal
    const portalElement =  document.getElementById("modal");

    // Using React.createPortal to render Backdrop and ModalOverlay outside the normal DOM hierarchy
    return (
        <Fragment>
            {/* Rendering Backdrop using React.createPortal */}
            { ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement) }
            {/* Rendering ModalOverlay using React.createPortal */}
            { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement) }
        </Fragment>
    );
}

export default Modal;
