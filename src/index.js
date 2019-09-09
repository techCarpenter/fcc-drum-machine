//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { thisTypeAnnotation } from "@babel/types";

const padArr = [
  {
    trigger: 81,
    displayId: "Q",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    fileDesc: "Alien"
  },
  {
    trigger: 87,
    displayId: "W",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    fileDesc: "Bongo Double Tap"
  },
  {
    trigger: 69,
    displayId: "E",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    fileDesc: "Bongo Hi Pitch"
  },
  {
    trigger: 65,
    displayId: "A",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    fileDesc: "Bongo Roll"
  },
  {
    trigger: 83,
    displayId: "S",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    fileDesc: "Pinball Bumper"
  },
  {
    trigger: 68,
    displayId: "D",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    fileDesc: "Rollover"
  },
  {
    trigger: 90,
    displayId: "Z",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    fileDesc: "Tray"
  },
  {
    trigger: 88,
    displayId: "X",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    fileDesc: "Cymbal"
  },
  {
    trigger: 67,
    displayId: "C",
    audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    fileDesc: "Robot"
  }
];
/**
 * App contains all sub components
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSound: ""
    };
    this.setDescription = this.setDescription.bind(this);
  }
  setDescription(description) {
    this.setState({currentSound: description});
  }
  render() {
    return (
      <React.Fragment>
        <PadBank callBack={this.setDescription}/>
        <Controls description={this.state.currentSound}/>
      </React.Fragment>
    );
  }
}
/**
 * The PadBank class contains all drum key components
 */
class PadBank extends React.Component {
  render() {
    let padBank = padArr.map((item, i) => {
      return (
        <DrumPad
          id={"key-" + i}
          audioFile={padArr[i].audioFile}
          displayId={padArr[i].displayId}
          fileDesc={padArr[i].fileDesc}
          trigger={padArr[i].trigger}
          callBack={this.props.callBack}
        />
      );

    });
    return <div className="pad-bank">{padBank}</div>;
  }
}
const activeStyle = {
  backgroundColor: "orange"
};
const inactiveStyle = {
  backgroundColor: "gray"
};
/**
 * A button element
 * @param {object} props This will contain information to create a JSX button element
 */
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(event) {
    if (event.keyCode === this.props.trigger) {
      this.playSound();
    }
  }
  playSound() {
    const sound = document.getElementById(this.props.displayId);
    this.setState({ IsActive: true });
    this.props.callBack(this.props.fileDesc);
    // @ts-ignore
    sound.currentTime = 0;
    // @ts-ignore
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 200);
  }
  activatePad() {
    this.state.padStyle.backgroundColor === "orange"
      ? this.setState({ padStyle: inactiveStyle })
      : this.setState({ padStyle: activeStyle });
  }
  render() {
    return (
      <button
        id={this.props.id}
        style={this.state.padStyle}
        className="drum-pad"
        onClick={this.playSound}
      >
        <audio
          className="clip"
          id={this.props.displayId}
          src={this.props.audioFile}
        ></audio>
        {this.props.displayId}
      </button>
    );
  }
}

class Controls extends React.Component {
  render() {
    return (
      <div className="control-box">
        <p id="display">{this.props.description}</p>
      </div>
    ); //TODO Fill in info block
  }
}

ReactDOM.render(<App />, document.getElementById("drum-machine"));
