import React, { Component } from "react";

class WelcomeState extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      messagePara: "Please Sign In",
    };
  }

  changeMessage() {
    this.setState({
      message: "Welcome User",
      messagePara: "You're signed in",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <p>{this.state.messagePara}</p>
        <button onClick={() => this.changeMessage()}>Sign-in</button>
      </>
    );
  }
}

export default WelcomeState;
