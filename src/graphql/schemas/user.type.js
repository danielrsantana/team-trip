export default `
  type User {
    _id: ID
    currency: String
    email: String
    image: String
    name: String
  }

  input UserInput {
    id: String
    currency: String
    email: String
    image: String
    name: String
  }

  type Query {
    getUser (id: String!): User
    listUsers: [User]
  }

  type Mutation {
    addUser(user:UserInput!): User
    deleteUser(id: String!): Boolean!
    editUser(filter:UserInput!, user:UserInput!): Boolean!
  }
`;
