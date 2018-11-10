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

const TeamList = ({ players, setData, teams }) =>
  Array(players.length / 2)
    .fill()
    .map((num, teamIndex) => (
      <div>
        <h4>Lag {teamIndex + 1}</h4>
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
              {isSelectedInTeam && "🏌️"}
              {player.name}
            </li>
          );
        })}
      </div>
    ));

export default enhance(TeamList);
