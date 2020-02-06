import { TeamTripDb } from '../../mongodb';
const CATEGORY_COLLECTION = 'category';

export default {
  addCategory: params => {
    return TeamTripDb.addToCollection(CATEGORY_COLLECTION, params);
  },

  deleteCategory: params => {
    return TeamTripDb.deleteOnCollection(CATEGORY_COLLECTION, params);
  },

  editCategory: params => {
    return TeamTripDb.editOnCollection(CATEGORY_COLLECTION, params);
  },

  getCategory: async params => {
    return TeamTripDb.findOnCollectionById(CATEGORY_COLLECTION, params);
  },

  listCategories: async params => {
    return TeamTripDb.listOnCollection(CATEGORY_COLLECTION, params);
  },
};
