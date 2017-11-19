import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: ''
    }
  }

  static displayName = 'Card number formatting';

  handleChange = cardNumber => {
    this.setState({cardNumber});
  }

  render() {
    const {cardNumber} = this.state;

    return (
      <CardNumberInput
        cardNumber={cardNumber}
        onChange={this.handleChange}
      />
    );
  }
}

export default CardNumberHolder;
