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
            {isSelected ? "🏌️" : null}
            {player.name}
          </li>
        );
      })}
    </ul>
  </div>
);

export default PlayerList;
