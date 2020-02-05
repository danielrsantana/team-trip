import { TeamTripDb } from '../../mongodb';
const TRIP_COLLECTION = 'trip';

export default {
  addTrip: params => {
    return TeamTripDb.addToCollection(TRIP_COLLECTION, param);
  },

  deleteTrip: params => {
    return TeamTripDb.deleteOnCollection(TRIP_COLLECTION, params);
  },

  editTrip: params => {
    return TeamTripDb.editOnCollection(TRIP_COLLECTION, params);
  },

  getTrip: async params => {
    return TeamTripDb.findOnCollection(TRIP_COLLECTION, params);
  },

  listTrips: async params => {
    return TeamTripDb.listOnCollection(TRIP_COLLECTION, params);
  },
};
