import { gql } from "@apollo/client";
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstname
        lastname
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        image
        description
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookData: BookInput!) {
    removeBook(bookData: $bookData) {
      _id
      username
      email
      removeBooks {
        bookId
        title
        authors
        image
        description
        link
      }
    }
  }
`;
