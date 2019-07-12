import React, { Component } from "react";

class Player extends Component {
  state = {
    lifeTotal: 20
  };
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.lifeTotal}</h1>
        </div>
      </div>
    );
  }
}

export default Player;
