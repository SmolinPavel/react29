import { Component } from 'react';
import { connect } from 'react-redux';

import {
  decrement,
  increment,
  selectCount,
  selectDiscount,
} from 'store/counter';

import styles from './Counter.module.scss';

class CounterComponent extends Component {
  handleMinusClick = () => {
    const { value } = this.props;
    const newValue = value - 1;
    if (newValue >= 0) {
      // this.context.updateBasket(productId, newValue);
    }
  };

  handlePlusClick = () => {
    // const { productId, value } = this.props;
    // this.context.updateBasket(productId, value + 1);
  };

  render() {
    // const { value } = this.props;

    return (
      <div>
        <button onClick={() => this.props.decrement(1)}>-</button>
        <span className={styles.Value}>{this.props.count}</span>
        <button onClick={() => this.props.increment()}>+</button>
        <div>Discount: {this.props.discount}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: selectCount(state),
  discount: selectDiscount(state),
});

const mapDispatchToProps = {
  decrement,
  increment,
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent);
