import { compose, withState, withHandlers } from "recompose";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import BottomButton from "./shared/BottomButton";
import CourseList from "./ScoringSetup/CourseList";
import PlayerList from "./ScoringSetup/PlayerList";
import ScoringSessionList from "./ScoringSetup/ScoringSessionList";

const enhance = compose(
  withState("selectedCourse", "setSelectedCourse", ""),
  withState("selectedPlayers", "setSelectedPlayers", []),
  withHandlers({
    togglePlayer: props => (player, shouldRemove = false) => {
      const { selectedPlayers } = props;
      if (shouldRemove) {
        const index = selectedPlayers.findIndex(sp => sp.id === player.id);
        if (index !== -1) {
          selectedPlayers.splice(index, 1);
        }
        props.setSelectedPlayers(selectedPlayers);
      } else {
        props.setSelectedPlayers([...selectedPlayers, player]);
      }
    }
  })
);

const ScoringSetup = enhance(
  ({
    selectedCourse,
    selectedPlayers,
    setSelectedCourse,
    togglePlayer,
    nextStep,
    data: { loading, error, scoringSessions, courses, players }
  }) => {
    if (loading) {
      return null;
    }

    if (error) {
      console.log(error);
      return <div style={{ color: "red" }}>Error</div>;
    }

    return (
      <section>
        {scoringSessions.length > 0 ? (
          <ScoringSessionList scoringSessions={scoringSessions} />
        ) : null}

        <CourseList
          courses={courses}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />

        {selectedCourse ? (
          <PlayerList
            players={players}
            selectedPlayers={selectedPlayers}
            togglePlayer={togglePlayer}
          />
        ) : null}

        {selectedCourse && selectedPlayers.length > 0 ? (
          <BottomButton
            onClick={() => nextStep(selectedCourse, selectedPlayers)}
            text={`FORTSÄTT MED (${selectedPlayers.length}) SPELARE`}
          />
        ) : null}
      </section>
    );
  }
);

export const scoringSessions = gql`
  query {
    scoringSessions(where: { status_not: "finished" }) {
      id
      status
      course {
        club
        name
      }
      players {
        name
      }
      teams {
        players {
          name
        }
      }
    }
    courses {
      id
      club
      name
    }
    players {
      id
      name
    }
  }
`;

export default graphql(scoringSessions)(ScoringSetup);
