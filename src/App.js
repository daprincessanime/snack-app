import React from "react";
import "./App.css";
import babyYoda from "./images/cookieGrogu.jpeg";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      snackCount: 0,
    };
  }

  giveSnack = () => {
    this.setState({
      snackCount: this.state.snackCount + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Give Baby Yoda some snacks.</h1>
        <img src={babyYoda} alt="baby yoda" />
        <div className="card">
          <div>Baby Yoda has eaten {this.state.snackCount} snacks.</div>

          <button onClick={this.giveSnack}>Give snack</button>
        </div>
      </div>
    );
  }
}

export default App;
