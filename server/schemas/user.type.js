export default `
  type User {
    id: ID
    currency: String
    email: String
    image: String
    name: String
  }

  input UserInput {
    id: ID
    currency: String
    email: String
    image: String
    name: String
  }

  type Query {
    getUser (id: ID!): User
    listUsers (userId: ID!): [User]
  }

  type Mutation {
    addUser(user:UserInput!): User
    editUser(user:UserInput!): User
    removeUser(id: ID!): User
  }
`;