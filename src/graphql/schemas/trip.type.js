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
    getTrip (id: String!): Trip
    listTrips (userId: String!): [Trip]
  }

  type Mutation {
    addTrip(trip:TripInput!): Trip
    deleteTrip(id: String!): Boolean!
    editTrip(filter:TripInput!, trip:TripInput!): Boolean!
  }
`;