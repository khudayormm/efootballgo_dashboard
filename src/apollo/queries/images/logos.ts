import { gql } from "@apollo/client";

export const GET_LOGOS = gql`
  query Query {
    images {
      id
      src
      type
    }
  }
`;
