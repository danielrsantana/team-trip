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
    getCredit (id: String!): Credit
    listCredits (tripId: String!): [Credit]
  }

  type Mutation {
    addCredit(credit:CreditInput!): Credit
    deleteCredit(id: String!): Boolean!
    editCredit(filter:CreditInput!, credit:CreditInput!): Boolean!
  }
`;
