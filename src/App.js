import React from "react";
import "./App.css";
import babyYoda from "./images/cookieGrogu.jpeg";
import happyGrogu from "./images/happyGrogu.jpeg";

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
      acceptableSnacks: ["blue cookie", "cup of broth"],
      snackIndex: 0,
    };
  }

  giveSnack = () => {
    const { possibleSnacks, snackIndex, snackCount } = this.state;
    const currentSnack = possibleSnacks[snackIndex];
    if (currentSnack === "ice spider" || currentSnack === "alien frog eggs") {
      alert("We shouldn't let Grogu eat that... let's find a new snack.");
    } else {
      this.setState({
        snackCount: snackCount + 1,
      });
    }
  };

  changeSnack = () => {
    const { possibleSnacks, snackIndex } = this.state;
    const nextIndex = (snackIndex + 1) % possibleSnacks.length;

    this.setState({
      snackIndex: nextIndex,
    });
  };

  handleReset = () => {
    // this.state.snackCount = 0 <--modifies state directly, which is BAD!!!!
    this.setState({
      snackCount: 0,
    });
  };

  render() {
    const { possibleSnacks, snackIndex, snackCount } = this.state;

    if (snackCount < 30) {
      return (
        <div className="App">
          <h1>Give Baby Yoda some snacks.</h1>
          <img src={babyYoda} alt="baby yoda" />
          <div className="card">
            <div>
              Baby Yoda has eaten{" "}
              <span className="snackCount">{snackCount}</span> snacks.
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
    } else {
      return (
        <div className="App">
          <h1>Baby Yoda is full. Good job!</h1>
          <img src={happyGrogu} alt="baby yoda" />
          <div className="card">
            <div>Come back another time.</div>
            <button onClick={this.handleReset}>Start over</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
