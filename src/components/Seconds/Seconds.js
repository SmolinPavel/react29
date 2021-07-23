import { Component } from 'react';

export class Seconds extends Component {
  state = {
    seconds: 0,
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevValue) => ({ seconds: prevValue.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Unmount');
    clearInterval(this.intervalId);
  }

  render() {
    const { seconds } = this.state;
    return <h2>Вы находитесь на сайте: {seconds}</h2>;
  }
}
