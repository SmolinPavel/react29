import { Component } from 'react';

import styles from './Counter.module.scss';

export class Counter extends Component {
  handleMinusClick = () => {
    const { productId, updateBasket, value } = this.props;
    const newValue = value - 1;
    if (newValue >= 0) {
      updateBasket(productId, newValue);
    }
  };

  handlePlusClick = () => {
    const { productId, updateBasket, value } = this.props;
    updateBasket(productId, value + 1);
  };

  render() {
    const { value } = this.props;

    return (
      <div>
        <button onClick={this.handleMinusClick}>-</button>
        <span className={styles.Value}>{value}</span>
        <button onClick={this.handlePlusClick}>+</button>
      </div>
    );
  }
}
