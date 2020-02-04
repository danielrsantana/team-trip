export default `
  type Expense {
    _id: ID
    assignedUserId: String
    isShared: Boolean
    categoryId: String
    currency: String
    date: String
    description: String
    image: String
    name: String
    tripId: String 
    userId: String
    value: String
  }

  input ExpenseInput {
    id: String
    assignedUserId: String
    isShared: Boolean
    categoryId: String
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
    getExpense (id: String!): Expense
    listExpenses (tripId: String!): [Expense]
  }

  type Mutation {
    addExpense(expense:ExpenseInput!): Expense
    deleteExpense(id: String!): Boolean!
    editExpense(filter:ExpenseInput!, expense:ExpenseInput!): Boolean!
  }
`;
