import { TeamTripDb } from '../../mongodb';
const CATEGORY_COLLECTION = 'category';

export default {
  addCategory: params => {
    return TeamTripDb.addToCollection(CATEGORY_COLLECTION, params.item);
  },

  deleteCategory: item => {
    return TeamTripDb.deleteOnCollection(CATEGORY_COLLECTION, item);
  },

  editCategory: params => {
    return TeamTripDb.editOnCollection(CATEGORY_COLLECTION, params.filter, params.item);
  },

  getCategory: async filter => {
    return TeamTripDb.findOnCollection(CATEGORY_COLLECTION, filter);
  },

  listCategories: async () => {
    return TeamTripDb.listOnCollection(CATEGORY_COLLECTION);
  },
};
