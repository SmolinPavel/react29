import { Component } from 'react';
import { connect } from 'react-redux';

import { decrement, increment } from 'store/counter';

import styles from './Counter.module.scss';

class CounterComponent extends Component {
  handleMinusClick = () => {
    const { productId, value } = this.props;
    const newValue = value - 1;
    if (newValue >= 0) {
      // this.context.updateBasket(productId, newValue);
    }
  };

  handlePlusClick = () => {
    const { productId, value } = this.props;
    // this.context.updateBasket(productId, value + 1);
  };

  render() {
    const { value } = this.props;

    return (
      <div>
        <button onClick={() => this.props.decrement(5)}>-</button>
        <span className={styles.Value}>{this.props.count}</span>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  decrement,
  increment,
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent);
