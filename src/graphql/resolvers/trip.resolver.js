import { TeamTripDb } from '../../mongodb';
const TRIP_COLLECTION = 'trip';

export default {
  addTrip: params => {
    return TeamTripDb.addToCollection(TRIP_COLLECTION, params.item);
  },

  deleteTrip: item => {
    return TeamTripDb.deleteOnCollection(TRIP_COLLECTION, item);
  },

  editTrip: params => {
    return TeamTripDb.editOnCollection(TRIP_COLLECTION, params.filter, params.item);
  },

  getTrip: async filter => {
    return TeamTripDb.findOnCollection(TRIP_COLLECTION, filter);
  },

  listTrips: async () => {
    return TeamTripDb.listOnCollection(TRIP_COLLECTION);
  },
};
