import React, { Component } from "react";
import Player from "./player";

class Application extends Component {
  constructor(props) {
    super(props);
    this.player1 = React.createRef();
    this.player2 = React.createRef();
  }
  state = {};

  handleReset = () => {
    this.player1.current.resetLifeTotal();
    this.player2.current.resetLifeTotal();
  };

  render() {
    return (
      <div>
        <div className="container">
          <Player ref={this.player1} />
          <Player ref={this.player2} />
        </div>
        <div id="reset-button-container">
          <button id="reset-button" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Application;
