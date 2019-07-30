import React, { Component } from "react";
class Player extends Component {
  state = {
    playerName: "",
    lifeTotal: 20
  };

  handlePlayerNameChange = event => {
    this.setState({
      playerName: event.target.value
    });
  };

  resetLifeTotal = () => {
    this.setState({ lifeTotal: 20 });
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
          <label>Name:</label>
          <input
            type="text"
            value={this.state.playerName}
            onChange={this.handlePlayerNameChange}
          />
        </div>
        <div>
          <h1>{this.state.lifeTotal}</h1>
          <button onClick={this.increaseLifeTotal}>+</button>
          <button onClick={this.decreaseLifeTotal}>-</button>
        </div>
      </div>
    );
  }
}

export default Player;
