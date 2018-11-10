import gql from "graphql-tag";

const scoringSessionsAndCourses = gql`
  query {
    scoringSessions(where: { status_not: "finished" }) {
      id
      status
      course {
        id
        club
        name
      }
      players {
        id
        name
      }
      teams {
        id
        players {
          id
          name
        }
      }
    }
    courses {
      id
      club
      name
    }
  }
`;

export default scoringSessionsAndCourses;
