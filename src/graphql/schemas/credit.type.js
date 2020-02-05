export default `
  type Credit {
    _id: ID
    assignedUserId: String
    currency: String
    date: String
    description: String
    image: String
    name: String
    tripId: String
    userId: String
    value: String
  }

  input CreditInput {
    id: String
    assignedUserId: String
    currency: String
    date: String
    description: String
    image: String
    name: String
    tripId: String
    userId: String
    value: String
  }

  type Query {
    getCredit (token:String!, id: String!): Credit
    listCredits (token:String!, tripId: String!): [Credit]
  }

  type Mutation {
    addCredit(token:String!, credit:CreditInput!): Credit
    deleteCredit(token:String!, id: String!): Boolean!
    editCredit(token:String!, filter:CreditInput!, credit:CreditInput!): Boolean!
  }
`;
