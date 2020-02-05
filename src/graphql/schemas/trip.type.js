export default `
  type Trip {
    _id: ID
    budget: String
    description: String
    endDate: String
    image: String
    localCurrency: String
    name: String
    startDate: String
    teamCurrency: String
    users: [User]
  }

  input TripInput {
    id: String
    budget: String
    description: String
    endDate: String
    image: String
    localCurrency: String
    name: String
    startDate: String
    teamCurrency: String
    users: [UserInput]
  }

  type Query {
    getTrip (token:String!, id: String!): Trip
    listTrips (token:String!, userId: String!): [Trip]
  }

  type Mutation {
    addTrip(token:String!, trip:TripInput!): Trip
    deleteTrip(token:String!, id: String!): Boolean!
    editTrip(token:String!, filter:TripInput!, trip:TripInput!): Boolean!
  }
`;