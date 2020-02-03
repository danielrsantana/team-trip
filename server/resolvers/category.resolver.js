export default {
  addCategory: category => {
    return category;
  },
  editCategory: category => {
    return category;
  },
  getCategory: id => {
    return {
      id: id.toString(),
      name: 'temp',
      description: 'temp description',
      image: '',
    };
  },
  listCategories: () => {
    return [
      {
        id: 1,
        name: 'temp 1',
        description: 'temp description',
        image: '',
      },
      {
        id: 2,
        name: 'temp 2',
        description: 'temp description',
        image: '',
      },
    ];
  },
  removeCategory: id => {
    return true;
  },
};
