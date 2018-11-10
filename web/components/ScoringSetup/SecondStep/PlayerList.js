import { compose, withHandlers } from "recompose";

const enhance = compose(
  withHandlers({
    togglePlayer: props => (player, shouldRemove) => {
      const { selectedPlayers } = props;
      if (shouldRemove) {
        const index = selectedPlayers.findIndex(sp => sp.id === player.id);
        if (index !== -1) {
          selectedPlayers.splice(index, 1);
        }
        props.setData({ selectedPlayers });
      } else {
        props.setData({ selectedPlayers: [...selectedPlayers, player] });
      }
    }
  })
);

const PlayerList = ({ players, selectedPlayers, togglePlayer }) => (
  <div>
    <h3>Vilka spelare för du för?</h3>
    <ul>
      {players.map((player, index) => {
        const isSelected = selectedPlayers.find(sp => sp.id === player.id);
        return (
          <li
            style={{
              fontWeight: isSelected ? "900" : "500",
              backgroundColor: isSelected ? "#feb" : "#eff"
            }}
            key={player.id}
            onClick={() => togglePlayer(player, isSelected)}
          >
            {isSelected && "🏌️"}
            {player.name}
          </li>
        );
      })}
    </ul>
  </div>
);

export default enhance(PlayerList);
