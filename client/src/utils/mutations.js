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
  mutation addToilet($username: String!, $overallRating: Int!, $location: String!, $genderNeutral: Boolean!, $cleanliness: Int!, $changingTable: Boolean!, $handicapAccessible: Int!, $toiletPaper: Boolean!, $keys: Boolean!, $comment: String!) {
    addToilet(username: $username, overallRating: $overallRating, location: $location, genderNeutral: $genderNeutral, cleanliness: $cleanliness, changingTable: $changingTable, handicapAccessible: $handicapAccessible, toiletPaper: $toiletPaper, keys: $keys, comment: $comment) {
      username
      location
    }
  }
`