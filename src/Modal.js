import {Component} from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(this.props.children, this.props.domNode);
  }
}

export default Modal;
