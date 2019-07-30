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
        <div className="player-card">
          <div className="player-name">
            <span className="name-label">Name: </span>
            <input
              type="text"
              value={this.state.playerName}
              onChange={this.handlePlayerNameChange}
            />
          </div>
          <div>
            <h1 className="life-total">{this.state.lifeTotal}</h1>
            <button
              className="btn btn-success btn-lg m-2"
              onClick={this.increaseLifeTotal}
            >
              +
            </button>
            <button
              className="btn btn-danger btn-lg m-2"
              onClick={this.decreaseLifeTotal}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
