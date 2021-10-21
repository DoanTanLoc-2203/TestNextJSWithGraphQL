const { gql } = require("apollo-server-micro");

export const typeDefs = gql`
  type User {
    id: ID
    name: String
    age: Int
    schoolID: School
  }

  type School {
    id: ID
    name: String
    address: String
  }

  type Query {
    Users: [User]
    Schools: [School]
    User(id: ID!): User
    School(id: ID!): School
  }

  type Mutation {
    createUser(id: ID!, name: String, age: Int, schoolID: Int): User
  }

  type Subscription {
    newUser: User
  }
`;
