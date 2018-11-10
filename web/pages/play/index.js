import React, { Component } from "react";

import App from "../../components/App";
import ScoringSetup from "../../components/ScoringSetup/ScoringSetup";
import Code from "../../components/Code";

const CODE = "1234";

class Play extends Component {
  state = {
    hasCheckedForCode: false,
    hasEnteredCode: false,
    course: null,
    teamEvent: false,
    strokesEvent: false,
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

  render() {
    const { hasCheckedForCode, hasEnteredCode } = this.state;

    if (!hasCheckedForCode) {
      return null;
    }

    return (
      <App>
        <header className="header secondary">
          <h1>Spela golf</h1>
        </header>
        {!hasEnteredCode ? (
          <Code enterCode={this.enterCode} />
        ) : (
          <ScoringSetup />
        )}
      </App>
    );
  }
}

export default Play;
