const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
        username: String!
        password: String!
        toilets: [Toilet]
    }
    type Toilet {
        _id: ID
        username: String!
        overallRating: String!
        location: String!
        genderNeutral: String!
        cleanliness: String!
        changingTable: String!
        handicapAccessible: String!
        toiletPaper: String!
        keys: String!
        comment: String!
    }
    type Location {
        _id: ID
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
        locations: [Location]
        toilets: [Toilet]
        toiletByUser(userId: ID!): User
        toiletByLocation(location: String!): [Location] 
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, username: String): User
        updatePassword(password: String!): User
        addToilet(overallRating: String!, location: String!, genderNeutral: String!, cleanliness: String!, changingTable: String!, handicapAccessible: String!, toiletPaper: String!, keys: String!, comment: String!): Toilet
        updateToilet(overallRating: String, location: String, genderNeutral: String, cleanliness: String, changingTable: String, handicapAccessible: String, toiletPaper: String, keys: String, comment: String): Toilet
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;