const { itemsSearch } = require('../../controllers/itemController');

const MOCK = {
  author: {
    name: 'mock name',
    lastName: 'mock last name'
  },
  categories: ['category1', 'category2', 'category3'],
  items: [
    {
      id: 'mock1',
      title: 'mock title',
      price: {
        currency: 'USD',
        amount: 100,
        decimals: 0000,
      },
      picture: 'picture mock',
      condition: 'good mock',
      free_shipping: false,
    }
  ]
};

const MOCK1 = {
  req: {
    query: { 
      q: 'televisor',
    },
  },
}

describe('item routes', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK)
  }));

  // let test;

  // beforeEach(async () => {
  //   test = await itemsSearch(MOCK1);
  // });

  it('should respond with items data', () => {
    console.log('items');
  })
})