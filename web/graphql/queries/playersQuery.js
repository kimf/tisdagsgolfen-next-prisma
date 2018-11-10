import gql from "graphql-tag";

const players = gql`
  query {
    players {
      id
      name
    }
  }
`;

export default players;
