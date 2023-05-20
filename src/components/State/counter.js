import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
//initial state
    this.state = {
      count: 0,
    };
  }

  //function to increase state count
  increment() {
    this.setState({
      count: this.state.count + 1,
    }, () => {console.log('Callback Value', this.state.count)});

    console.log(this.state.count)
  }

  //function to decrease state count
  decrement() {
    this.setState({
      count: this.state.count - 1,
    }, () => {console.log('Callback Value', this.state.count)});
  }

  //function to reset state count to 0
  reset() {
    this.setState({
      count: 0,
    }, () => {console.log('Callback Value', this.state.count)});
  }

  render() {
    return (
      <>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.reset()}>Reset</button>
      </>
    );
  }
}

export default Counter;
