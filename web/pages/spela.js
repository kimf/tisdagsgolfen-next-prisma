import { Component } from "react";
import ScoringSetup from "../components/ScoringSetup";
import App from "../components/App";

import Code from "../components/Code";
import GameSettings from "../components/ScoringSetup/GameSettings";

const CODE = "1234";

class Play extends Component {
  state = {
    hasCheckedForCode: false,
    hasEnteredCode: false,
    course: null,
    players: []
  };

  async componentWillMount() {
    const code = await localStorage.getItem("code");

    this.setState(state => ({
      ...state,
      hasEnteredCode: code,
      hasCheckedForCode: true
    }));
  }

  enterCode = code => {
    if (code === CODE) {
      localStorage.setItem("code", JSON.stringify(code));
      this.setState(state => ({ ...state, hasEnteredCode: code }));
    } else {
      alert("FEEEL KOD!");
    }
  };

  setCourseAndPlayers = (course, players) => {
    this.setState(state => ({ ...state, course, players }));
  };

  render() {
    const { hasCheckedForCode, hasEnteredCode, course, players } = this.state;

    if (!hasCheckedForCode) {
      return null;
    }

    return (
      <App>
        {!hasEnteredCode ? (
          <Code enterCode={this.enterCode} />
        ) : (
          <div>
            {course && players.length > 0 ? (
              <GameSettings course={course} players={players} />
            ) : (
              <ScoringSetup nextStep={this.setCourseAndPlayers} />
            )}
          </div>
        )}
      </App>
    );
  }
}

export default Play;
