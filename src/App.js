import React, {Component} from 'react';
import Switcher from './Switcher';
import CardNumberHolder from './CardNumberHolder';
import ModalButton from './ModalButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switcher>
          <CardNumberHolder />
          <ModalButton />
        </Switcher>
      </div>
    );
  }
}

export default App;
