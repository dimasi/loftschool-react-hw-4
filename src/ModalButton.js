import React, {Component} from 'react';
import Modal from './Modal';

class ModalButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShow: false
    }
  }

  static displayName = 'Modal';

  componentDidMount = () => {
    this.modalDomNode = document.querySelector('#portal');
  }

  showModal = () => {
    this.setState({
      isModalShow: true
    });
  }

  hideModal = () => {
    this.setState({
      isModalShow: false
    });
  }

  render() {
    const {isModalShow} = this.state;

    return (
      <div>
        <button 
          className="App__button" 
          type="button" 
          onClick={this.showModal}
        >
          Show modal!
        </button>
        {isModalShow ? (
          <Modal domNode={this.modalDomNode}>
            <div className="Modal">
              <div className="Modal__overlay">
                <div className="Modal__dialog">
                  <header className="Modal__header">
                    <h4 className="Modal__heading">The Modal!</h4>
                  </header>
                  <div className="Modal__body">
                    <p className="Modal__text">Lorem ipsum dolor sit amet...</p>
                  </div>
                  <footer className="Modal__footer">
                    <button 
                      className="App__button" 
                      type="button" 
                      onClick={this.hideModal}
                    >
                      Hide modal!
                    </button>
                  </footer>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    )
  }
}

export default ModalButton;
