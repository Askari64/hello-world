import React, { Component } from "react";

class Animals extends Component {
  constructor() {
    super();
    this.state = {
      lion: "Lion says...",
      elephant: "Elephant says...",
      cat: "Cat says...",
      dog: "Dog says...",
    };
  }

  AnimalSound() {
    this.setState({
      lion: "Lion says Roar",
      elephant: "Elephant says Trumpet",
      cat: "Cat says Meow",
      dog: "Dog says bow-bow",
    });
  }

  render() {
    return (
      <>
        <h1>Animal Kingdom has several Animals.</h1>
        <h1>Press the button to make them talk</h1>

        <h3>Lion</h3>
        <p>{this.state.lion}</p>

        <h3>Elephant</h3>
        <p>{this.state.elephant}</p>

        <h3>Cat</h3>
        <p>{this.state.cat}</p>

        <h3>Dog</h3>
        <p>{this.state.dog}</p>
        <br></br>
        <button onClick={() => this.AnimalSound()}>Make Them talk</button>
      </>
    );
  }
}

export default Animals;
