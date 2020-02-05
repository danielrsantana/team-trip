export default `
  type Category {
    _id: ID
    description: String
    image: String
    name: String
  }

  input CategoryInput {
    id: String
    description: String
    image: String
    name: String
  }

  type Query {
    getCategory (token:String!, id: String!): Category
    listCategories (token:String!): [Category]
  }

  type Mutation {
    addCategory(token:String!, item:CategoryInput!): Category
    deleteCategory(token:String!, id: String!): Boolean!
    editCategory(token:String!, filter:CategoryInput!, item:CategoryInput!):  Boolean!
  }
`;
