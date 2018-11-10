import { Component } from "react";
import BottomButton from "../shared/BottomButton";

class PlayerStrokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStrokes: props.players.map(p => ({ id: p.id, strokes: 0 }))
    };
  }

  askForNewStrokes = (playerId, playerName) => {
    const strokes = prompt(`Hur många slag ska ${playerName} ha då?`);
    const playerStrokes = this.state.playerStrokes.map(playa => {
      if (playa.id === playerId) {
        playa.strokes = strokes;
      }
      return playa;
    });
    this.setState(state => ({ ...state, playerStrokes }));
  };

  render() {
    const { playerStrokes } = this.state;
    const { players, course } = this.props;
    return (
      <div>
        <h3>{course.name}</h3>
        <h3>Spelare</h3>
        <table>
          <thead>
            <tr>
              <th>Spelare</th>
              <th>Slag</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{playerStrokes.find(ps => ps.id === player.id).strokes}</td>
                <td>
                  <button
                    onClick={() =>
                      this.askForNewStrokes(player.id, player.name)
                    }
                    style={{ fontSize: 12, color: "#777" }}
                  >
                    ÄNDRA
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12 }}>
          Kolla nu så att antalet slag stämmer med dagens hcp innan ni startar
          rundan!
        </p>
        <BottomButton
          disabled={false}
          text="SPELA GOLF"
          onClick={() => alert("Nästa steg = SCORING")}
        />
      </div>
    );
  }
}

export default PlayerStrokes;
