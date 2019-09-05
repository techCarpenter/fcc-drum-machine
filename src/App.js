import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DrumPad />;
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let keyArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    return (
      <div className="drum-pad">
        <div className="key-row">
          {DrumKey({ id: 1, name: "Q" })}
          {DrumKey({ id: 2, name: "W" })}
          {DrumKey({ id: 3, name: "E" })}
        </div>
        <div className="key-row">
          {DrumKey({ id: 4, name: "A" })}
          {DrumKey({ id: 5, name: "S" })}
          {DrumKey({ id: 6, name: "D" })}
        </div>
        <div className="key-row">
          {DrumKey({ id: 7, name: "Z" })}
          {DrumKey({ id: 8, name: "X" })}
          {DrumKey({ id: 9, name: "C" })}
        </div>
      </div>
    );
  }
}

const DrumKey = props => {
  return (
    <button id={props.id} className="drum-key">
      <p>{props.name}</p>
    </button>
  );
};

export default App;
