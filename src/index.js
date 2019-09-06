//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const keyArr = [
  { trigger: 1, displayId: "Q", audioFile: "../media/alien.mp3", fileDesc: "Alien" },
  { trigger: 2, displayId: "W", audioFile: "../media/bongoDubTap.mp3", fileDesc: "Bongo Double Tap" },
  { trigger: 3, displayId: "E", audioFile: "../media/bongoHi.mp3", fileDesc: "Bongo Hi Pitch" },
  { trigger: 4, displayId: "A", audioFile: "../media/bongoRoll.mp3", fileDesc: "Bongo Roll" },
  { trigger: 5, displayId: "S", audioFile: "../media/pinballBumper.mp3", fileDesc: "Pinball Bumper" },
  { trigger: 6, displayId: "D", audioFile: "../media/pinballLaneRollover.mp3", fileDesc: "Rollover" },
  { trigger: 7, displayId: "Z", audioFile: "../media/plasticTray.mp3", fileDesc: "Tray" },
  { trigger: 8, displayId: "X", audioFile: "../media/reverseCymbal.mp3", fileDesc: "Cymbal" },
  { trigger: 9, displayId: "C", audioFile: "../media/robot.mp3", fileDesc: "Robot" }
];
/**
 * App contains all sub components
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <PadBank />
        <Controls />
      </React.Fragment>
    );
  }
}
/**
 * The Drumpads class contains all drum key components
 */
class PadBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="pad-bank">
        <div className="key-row">
          {DrumPad({ id: "key-1", name: keyArr[0].displayId, file: keyArr[0].audioFile })}
          {DrumPad({ id: "key-2", name: keyArr[1].displayId })}
          {DrumPad({ id: "key-3", name: keyArr[2].displayId })}
        </div>
        <div className="key-row">
          {DrumPad({ id: "key-4", name: keyArr[3].displayId })}
          {DrumPad({ id: "key-5", name: keyArr[4].displayId })}
          {DrumPad({ id: "key-6", name: keyArr[5].displayId })}
        </div>
        <div className="key-row">
          {DrumPad({ id: "key-7", name: keyArr[6].displayId })}
          {DrumPad({ id: "key-8", name: keyArr[7].displayId })}
          {DrumPad({ id: "key-9", name: keyArr[8].displayId })}
        </div>
      </div>
    );
  }
}
/**
 * A button element
 * @param {object} props This will contain information to create a JSX button element
 */
const DrumPad = props => {
  return (
    <button id={props.id} className="drum-pad">
      <p>{props.name}</p>
    </button>
  );
};

class Controls extends React.Component {
  render() {
    return <div className="control-box"></div>;   //TODO Fill in info block
  }
}

ReactDOM.render(<App />, document.getElementById("drum-machine"));
