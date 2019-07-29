import React, { Component } from "react";
import PlayerName from "./playerName";
import PlayerLifeTotal from "./playerLifeTotal";
class Player extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <PlayerName />
        </div>
        <div>
          <PlayerLifeTotal />
        </div>
      </div>
    );
  }
}

export default Player;
