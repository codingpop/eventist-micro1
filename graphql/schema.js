import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
  type User {
    id: String
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
