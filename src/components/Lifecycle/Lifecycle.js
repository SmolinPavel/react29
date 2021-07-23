import { Component } from 'react';

import { Seconds } from 'components/Seconds';

export class Lifecycle extends Component {
  constructor(props) {
    // { value: "123 "}
    super(props);

    console.log('Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('Get Derived State From Props');
    return state;
  }

  state = {
    value: this.props.outerValue,
    open: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('Should component update');
    return true;
  }

  componentDidMount() {
    /* 
        1. requests to the api
        2. intervals
        ...
    */
    // console.log('Component Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('Component Did Update', this.state.seconds, prevState.seconds);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open, value } = this.state;

    return (
      <div>
        <h1>Value: {value}</h1>

        <div>
          <input onChange={() => {}} value="123" />
        </div>
        <div>
          <button onClick={this.handleClick}>Toggle open</button>
        </div>
        {open && <Seconds />}
      </div>
    );
  }
}
