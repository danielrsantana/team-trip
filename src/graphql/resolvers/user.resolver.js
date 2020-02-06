import { TeamTripDb } from '../../mongodb';
const USER_COLLECTION = 'user';

export default {
  addUser: params => {
    return TeamTripDb.addToCollection(USER_COLLECTION, params);
  },

  authenticate: async params => {
    return TeamTripDb.findOnCollection(USER_COLLECTION, params);
  },

  deleteUser: params => {
    return TeamTripDb.deleteOnCollection(USER_COLLECTION, params);
  },

  editUser: params => {
    return TeamTripDb.editOnCollection(USER_COLLECTION, params);
  },

  getUser: async params => {
    return TeamTripDb.findOnCollectionById(USER_COLLECTION, params);
  },

  listUsers: async params => {
    return TeamTripDb.listOnCollection(USER_COLLECTION, params);
  },
};
