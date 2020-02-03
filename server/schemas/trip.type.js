export default `
  type Trip {
    id: ID
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
    id: ID
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
    getTrip (id: ID!): Trip
    listTrips (userId: ID!): [Trip]
  }

  type Mutation {
    addTrip(trip:TripInput!): Trip
    editTrip(trip:TripInput!): Trip
    removeTrip(id: ID!): Trip
  }
`;