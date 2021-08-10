import { Component } from 'react';

import { BasketContext } from 'BasketContext';

import styles from './Counter.module.scss';

export class Counter extends Component {
  static contextType = BasketContext;

  handleMinusClick = () => {
    const { productId, value } = this.props;
    const newValue = value - 1;
    if (newValue >= 0) {
      this.context.updateBasket(productId, newValue);
    }
  };

  handlePlusClick = () => {
    const { productId, value } = this.props;
    this.context.updateBasket(productId, value + 1);
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
