import PlayerList from "./PlayerList";
import TeamList from "./TeamList";

import Query from "../../shared/Query";
import playersQuery from "../../../graphql/queries/playersQuery";

const SecondStep = ({ localState, setData }) => (
  <Query query={playersQuery}>
    {({ players }) => {
      return localState.teamEvent ? (
        <TeamList players={players} setData={setData} {...localState} />
      ) : (
        <PlayerList
          players={players}
          setData={setData}
          selectedPlayers={localState.selectedPlayers}
        />
      );
    }}
  </Query>
);

export default SecondStep;
