import { Categories } from '../types/categoryTypes';
import { Item } from '../types/itemTypes';

const filterCategories = (categories: Array<Categories>) => {
  const category = categories.find((i) => i.id === 'category');
  return category.values.map(i => i.name);
};

const trimResults = (results: Array<Object>) => {
  return results.slice(0, 4).map((item: any): Array<Item> => [{ 
    id: item.id,
    title: item.title,
    price: item.price,
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }]);
};

export const itemsFormatter = (data: any) => {
  return {
    author: 'Isis Salamanca',
    items: trimResults(data.results),
    categories: filterCategories(data.available_filters),
  }
};
