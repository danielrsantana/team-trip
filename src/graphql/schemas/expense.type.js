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
    getExpense (token:String!, id: String!): Expense
    listExpenses (token:String!, tripId: String!): [Expense]
  }

  type Mutation {
    addExpense(token:String!, expense:ExpenseInput!): Expense
    deleteExpense(token:String!, id: String!): Boolean!
    editExpense(token:String!, filter:ExpenseInput!, expense:ExpenseInput!): Boolean!
  }
`;
