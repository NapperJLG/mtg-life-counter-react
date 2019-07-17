import React, { Component } from "react";

class Player extends Component {
  state = {
    lifeTotal: 20,
    playerName: ""
  };

  increaseLifeTotal = () => {
    this.setState({ lifeTotal: this.state.lifeTotal + 1 });
  };

  decreaseLifeTotal = () => {
    this.setState({ lifeTotal: this.state.lifeTotal - 1 });
  };

  handlePlayerNameChange = event => {
    this.setState({
      playerName: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.playerName}
            onChange={this.handlePlayerNameChange}
          />
          <h1>{this.state.lifeTotal}</h1>
        </div>
        <button onClick={this.increaseLifeTotal}>+</button>
        <button onClick={this.decreaseLifeTotal}>-</button>
      </div>
    );
  }
}

export default Player;
