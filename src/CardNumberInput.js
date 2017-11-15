import React, {Component} from 'react';

class CardNumberInput extends Component {
    constructor(props) {
      super(props);

      this.state = {
        number: this.format(props.cardNumber)
      }
    }

  componentWillReceiveProps = nextProps => {
    this.setState({
      number: this.format(nextProps.cardNumber)
    });
  }

  handleChange = e => {
    const {onChange} = this.props;
    const number = e.target.value;
    
    onChange(this.normalize(number));
  }

  format = str => str ? str.toString().replace(/(.{4})/g, '$1 ') : '';

  normalize = str => str ? str.replace(/\s/g, '') : '';

  render() {
    const {number} = this.state;

    return (
        <div className="CardNumberInput">
          <input
              className="App__textfield"
              placeholder="0000-0000-0000-0000"
              name="cardNumber"
              value={number.trim()}
              onChange={this.handleChange}
          />
        </div>
    );
  }
}

export default CardNumberInput;
