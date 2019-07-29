import React, { Component } from "react";
import { directive } from "@babel/types";

class PlayerName extends Component {
  state = {
    playerName: ""
  };

  handlePlayerNameChange = event => {
    this.setState({
      playerName: event.target.value
    });
  };

  render() {
    return (
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={this.state.playerName}
          onChange={this.handlePlayerNameChange}
        />
      </div>
    );
  }
}

export default PlayerName;
