import gql from "graphql-tag";

export const getServerUptime = gql`
  query getServerUptime {
    getServerUptime {
      buildType
      serverUptime
    }
  }
`;
