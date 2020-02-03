export default `
  type Expense {
    id: ID
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
    id: ID
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
    getExpense (id: ID!): Expense
    listExpenses (tripId: ID!): [Expense]
  }

  type Mutation {
    addExpense(expense:ExpenseInput!): Expense
    editExpense(expense:ExpenseInput!): Expense
    removeExpense(id: ID!): Expense
  }
`;