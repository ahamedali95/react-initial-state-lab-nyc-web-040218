import React from "react";
import ReactDOM from "react-dom";

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const m1 = `${this.state.secondsLeft} seconds left before I go boom!`;
    const m2 = "Boom!";
    return (
      <h2>{this.state.secondsLeft > 0 ? m1 : m2}</h2>
    );
  }
}

export default Bomb;
