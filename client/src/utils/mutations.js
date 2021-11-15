import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADDTOILET = gql`
  mutation addToilet($overallRating: String!, $location: String!, $genderNeutral: String!, $cleanliness: String!, $changingTable: String!, $handicapAccessible: String!, $toiletPaper: String!, $keys: String!, $comment: String!) {
    addToilet(overallRating: $overallRating, location: $location, genderNeutral: $genderNeutral, cleanliness: $cleanliness, changingTable: $changingTable, handicapAccessible: $handicapAccessible, toiletPaper: $toiletPaper, keys: $keys, comment: $comment) {
      _id
      username
      location
    }
  }
`