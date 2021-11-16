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

export const ADDREVIEW = gql`
  mutation addReview($overallRating: String!, $coordinates: String!, $genderNeutral: String!, $cleanliness: String!, $changingTable: String!, $handicapAccessible: String!, $toiletPaper: String!, $keys: String!, $comment: String!) {
    addReview(overallRating: $overallRating, coordinates: $coordinates, genderNeutral: $genderNeutral, cleanliness: $cleanliness, changingTable: $changingTable, handicapAccessible: $handicapAccessible, toiletPaper: $toiletPaper, keys: $keys, comment: $comment) {
      _id
      username
      coordinates
    }
  }
`