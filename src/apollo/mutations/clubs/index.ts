import { gql } from "@apollo/client";

export const POST_CLUB = gql`
  mutation Mutation(
    $name: String!
    $shortName: String!
    $color: String
    $country: String
    $img: String
    $isActive: Boolean
  ) {
    createClub(
      name: $name
      short_name: $shortName
      color: $color
      country: $country
      img: $img
      is_active: $isActive
    ) {
      id
      img
      created_at
      is_active
      name
      short_name
    }
  }
`;
