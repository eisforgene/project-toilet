const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        firstName: String!
        lastName: String!
        email: String!
        username: String!
        password: String!
        toilets: [Toilet]
    }
    type Toilet {
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
        location: String!
        toilets: [Toilet]
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        toilets: [Toilet]
        toiletByUser(userId: ID!): User
        toiletByLocation(location: String!): [Location] 
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, username: String, password: String): User
        addToilet(overallRating: Int!, location: String!, genderNeutral: Boolean!, cleanliness: Int!, changingTable: Boolean!, handicapAccessible: Int!, toiletPaper: Boolean!, keys: Boolean!, comment: String!): Toilet
        updateToilet(overallRating: Int, location: String, genderNeutral: Boolean, cleanliness: Int, changingTable: Boolean, handicapAccessible: Int, toiletPaper: Boolean, keys: Boolean, comment: String): Toilet
        login(username: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;