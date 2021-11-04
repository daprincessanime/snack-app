import React from "react";
import "./App.css";
import babyYoda from "./images/cookieGrogu.jpeg";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      snackCount: 0,
      possibleSnacks: [
        "ice spider",
        "frog",
        "alien frog eggs",
        "blue cookie",
        "cup of broth",
      ],
      snackIndex: 0,
    };
  }

  giveSnack = () => {
    this.setState({
      snackCount: this.state.snackCount + 1,
    });
  };

  changeSnack = () => {
    const { possibleSnacks, snackIndex } = this.state;
    const nextIndex = (snackIndex + 1) % possibleSnacks.length;

    this.setState({
      snackIndex: nextIndex,
    });
  };

  render() {
    const { possibleSnacks, snackIndex, snackCount } = this.state;

    return (
      <div className="App">
        <h1>Give Baby Yoda some snacks.</h1>
        <img src={babyYoda} alt="baby yoda" />
        <div className="card">
          <div>
            Baby Yoda has eaten <span className="snackCount">{snackCount}</span>{" "}
            snacks.
          </div>
          <button onClick={this.changeSnack}>Change snack</button>
          <button onClick={this.giveSnack}>Give snack</button>
          <div>
            Current snack selected:{" "}
            <strong>{possibleSnacks[snackIndex]}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
