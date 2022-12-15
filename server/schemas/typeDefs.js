// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    reviews: [Review]
  }
  type Review {
    _id: ID
    employerName: String
    reviewText: String
    createdAt: String
    username: String
    rating: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(_id: ID!): Review
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(employerName: String!, reviewText: String!, rating: Int!): Review
  }
`;

// export the typeDefs
module.exports = typeDefs;
