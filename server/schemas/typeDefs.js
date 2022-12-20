// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    reviews: [Review]
    blogs: [Blog]
  }
  type Review {
    _id: ID
    employerName: String
    reviewText: String
    jobTitle: String
    createdAt: String
    username: String
    rating: Int
  }
  type Blog {
    _id: ID
    title: String
    bodyText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
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
    blogs(username: String): [Blog]
    blog(_id: ID!): Blog
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(
      employerName: String!
      reviewText: String!
      jobTitle: String!
      rating: Int!
    ): Review
    addBlog(title: String!, bodyText: String!): Blog
    addComment(blogId: ID!, commentBody: String!): Blog
    removeBlog(blogId: ID!): Blog
    updateBlog(blogId: ID!, title: String!, bodyText: String!): Blog
    removeReview(reviewId: ID!): Review
    updateReview(
      reviewId: ID!
      employerName: String!
      reviewText: String!
      jobTitle: String!
      rating: Int!
    ): Review
  }
`;

// export the typeDefs
module.exports = typeDefs;
