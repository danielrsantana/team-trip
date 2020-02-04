import { TeamTripDb } from '../../mongodb';
const CREDIT_COLLECTION = 'credit';

export default {
  addCredit: params => {
    return TeamTripDb.addToCollection(CREDIT_COLLECTION, params.item);
  },

  deleteCredit: item => {
    return TeamTripDb.deleteOnCollection(CREDIT_COLLECTION, item);
  },

  editCredit: params => {
    return TeamTripDb.editOnCollection(CREDIT_COLLECTION, params.filter, params.item);
  },

  getCredit: async filter => {
    return TeamTripDb.findOnCollection(CREDIT_COLLECTION, filter);
  },

  listCredits: async () => {
    return TeamTripDb.listOnCollection(CREDIT_COLLECTION);
  },
};
