import React, {Component} from 'react';
import cx from 'classnames';

import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChild: 0
    }
  }

  handleChangeChild = e => {
    this.setState({
      selectedChild: parseInt(e.target.getAttribute('data-id'), 10)
    });
  }

  render() {
    const {selectedChild} = this.state;
    const {children} = this.props;

    return (
      <div className="Switcher">
        <ul className="Switcher__handles component-list">
          {React.Children.map(children, (child, index) => {
            const {key} = child;
            const {displayName, name} = child.type;
            const className = cx(
              'component-list__name',
              'Switcher__handle',
              {'Switcher__handle_active': index === selectedChild}
            );

            return (
              <li
                className={className}
                key={key}
                data-id={index}
                onClick={this.handleChangeChild}
              >
                {displayName || name}
              </li>
            );
          })}
        </ul>
        <div className="Switcher__content">{React.Children.toArray(children)[selectedChild]}</div>
      </div>
    );
  }
}

export default Switcher;
