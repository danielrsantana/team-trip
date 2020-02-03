export default `
  type Credit {
    id: ID
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
    id: ID
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
    getCredit (id: ID!): Credit
    listCredits (tripId: ID!): [Credit]
  }

  type Mutation {
    addCredit(credit:CreditInput!): Credit
    editCredit(credit:CreditInput!): Credit
    removeCredit(id: ID!): Credit
  }
`;
