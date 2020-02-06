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
    authenticate (token:String!, filter: UserInput!): User
    getUser (token:String!, id: String!): User
    listUsers (token:String!): [User]
  }

  type Mutation {
    addUser(token:String!, user:UserInput!): User
    deleteUser(token:String!, id: String!): Boolean!
    editUser(token:String!, filter:UserInput!, user:UserInput!): Boolean!
  }
`;
