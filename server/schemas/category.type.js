export default `
  type Category {
    id: ID
    description: String
    image: String
    name: String
  }

  input CategoryInput {
    id: ID
    description: String
    image: String
    name: String!
  }

  type Query {
    getCategory (id: ID!): Category
    listCategories: [Category]
  }

  type Mutation {
    addCategory(category:CategoryInput!): Category
    editCategory(category:CategoryInput!): Category
    removeCategory(id: ID!): Boolean
  }
`;