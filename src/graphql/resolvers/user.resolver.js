import { TeamTripDb } from '../../mongodb';
const USER_COLLECTION = 'user';

export default {
  addUser: params => {
    return TeamTripDb.addToCollection(USER_COLLECTION, params.item);
  },

  deleteUser: item => {
    return TeamTripDb.deleteOnCollection(USER_COLLECTION, item);
  },

  editUser: params => {
    return TeamTripDb.editOnCollection(USER_COLLECTION, params.filter, params.item);
  },

  getUser: async filter => {
    return TeamTripDb.findOnCollection(USER_COLLECTION, filter);
  },

  listUsers: async () => {
    return TeamTripDb.listOnCollection(USER_COLLECTION);
  },
};
