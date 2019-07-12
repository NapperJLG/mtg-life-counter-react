import React, { Component } from "react";

class Player extends Component {
  state = {
    lifeTotal: 20
  };

  increaseLifeTotal = () => {
    this.setState({ lifeTotal: this.state.lifeTotal + 1 });
  };

  decreaseLifeTotal = () => {
    this.setState({ lifeTotal: this.state.lifeTotal - 1 });
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.lifeTotal}</h1>
        </div>
        <button onClick={this.increaseLifeTotal}>+</button>
        <button onClick={this.decreaseLifeTotal}>-</button>
      </div>
    );
  }
}

export default Player;
