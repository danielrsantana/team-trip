import { TeamTripDb } from '../../mongodb';
const EXPENSE_COLLECTION = 'expense';

export default {
  addExpense: params => {
    return TeamTripDb.addToCollection(EXPENSE_COLLECTION, params.item);
  },

  deleteExpense: item => {
    return TeamTripDb.deleteOnCollection(EXPENSE_COLLECTION, item);
  },

  editExpense: params => {
    return TeamTripDb.editOnCollection(EXPENSE_COLLECTION, params.filter, params.item);
  },

  getExpense: async filter => {
    return TeamTripDb.findOnCollection(EXPENSE_COLLECTION, filter);
  },

  listExpenses: async () => {
    return TeamTripDb.listOnCollection(EXPENSE_COLLECTION);
  },
};
