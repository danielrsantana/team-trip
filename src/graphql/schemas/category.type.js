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
    getCategory (id: String!): Category
    listCategories: [Category]
  }

  type Mutation {
    addCategory(item:CategoryInput!): Category
    deleteCategory(id: String!): Boolean!
    editCategory(filter:CategoryInput!, item:CategoryInput!):  Boolean!
  }
`;
