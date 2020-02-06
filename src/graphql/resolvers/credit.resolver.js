import { TeamTripDb } from '../../mongodb';
const CREDIT_COLLECTION = 'credit';

export default {
  addCredit: params => {
    return TeamTripDb.addToCollection(CREDIT_COLLECTION, params);
  },

  deleteCredit: params => {
    return TeamTripDb.deleteOnCollection(CREDIT_COLLECTION, params);
  },

  editCredit: params => {
    return TeamTripDb.editOnCollection(CREDIT_COLLECTION, params);
  },

  getCredit: async params => {
    return TeamTripDb.findOnCollectionById(CREDIT_COLLECTION, params);
  },

  listCredits: async params => {
    return TeamTripDb.listOnCollection(CREDIT_COLLECTION, params);
  },
};
