const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
        username: String!
        password: String!
        reviews: [Review]
    }
    type Review {
        _id: ID
        username: String!
        overallRating: Int!
        location: String!
        genderNeutral: Boolean!
        cleanliness: Int!
        changingTable: Boolean!
        handicapAccessible: Int!
        toiletPaper: Boolean!
        keys: Boolean!
        comment: String!
    }
    type Location {
        _id: ID
        location: String!
        reviews: [Review]
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        locations(zipcode: String!): [Location]
        reviews: [Review]
        ReviewsByUser(userId: ID!): User
        ReviewsByLocation(location: String!): Location]
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, username: String): User
        updatePassword(password: String!): User
        addReview(overallRating: String!, location: String!, genderNeutral: String!, cleanliness: String!, changingTable: String!, handicapAccessible: String!, toiletPaper: String!, keys: String!, comment: String!): Review
        updateReview(overallRating: String, location: String, genderNeutral: String, cleanliness: String, changingTable: String, handicapAccessible: String, toiletPaper: String, keys: String, comment: String): Review
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;