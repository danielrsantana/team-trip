import { TeamTripDb } from '../../mongodb';
const EXPENSE_COLLECTION = 'expense';

export default {
  addExpense: params => {
    return TeamTripDb.addToCollection(EXPENSE_COLLECTION, params);
  },

  deleteExpense: params => {
    return TeamTripDb.deleteOnCollection(EXPENSE_COLLECTION, params);
  },

  editExpense: params => {
    return TeamTripDb.editOnCollection(EXPENSE_COLLECTION, params);
  },

  getExpense: async params => {
    return TeamTripDb.findOnCollection(EXPENSE_COLLECTION, params);
  },

  listExpenses: async params => {
    return TeamTripDb.listOnCollection(EXPENSE_COLLECTION, params);
  },
};
