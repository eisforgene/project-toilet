import { gql } from "@apollo/client";

export const QUERY_TOILETS = gql`
  query getToilets($zipcode: String!) {
    toiletsByZip(zipcode: $zipcode) {
      _id
      coordinates
      address
      lng
      lat
      zipcode
    }
  }
`;

export const QUERY_ALL_TOILETS = gql`
  query Toilets {
    toilets {
      _id
      coordinates
      address
      lng
      lat
      zipcode
      reviews {
        _id
        username
        overallRating
        coordinates
        genderNeutral
        cleanliness
        changingTable
        handicapAccessible
        toiletPaper
        keys
        comment
      }
    }
  }
`;
