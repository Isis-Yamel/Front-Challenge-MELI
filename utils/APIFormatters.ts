import { Categories } from '../types/categoryTypes';
import { Item, Items, ItemDetail } from '../types/itemTypes';
import { FALLBACK_CONSTANTS } from '../constants/constants';

const filterCategories = (categories: Array<Categories>) => {
  const category = categories.find((i) => i.id === 'category');
  return !!category ? category.values.map(i => i.name) : [FALLBACK_CONSTANTS.NO_CATEGORIES];
};

const trimResults = (results: Array<Object>) => {
  return results.slice(0, 4).map((item: any): Item => ({ 
    id: item.id,
    title: item.title,
    price: item.price,
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }));
};

export const itemsFormatter = (data: any): Items => {
  return {
    author: {
      name: 'Isis',
      lastName: 'Salamanca',
    },
    items: trimResults(data.results),
    categories: filterCategories(data.available_filters),
  }
};

export const itemFormatter = (data: any): ItemDetail => {
  return {
    author: {
      name: 'Isis',
      lastName: 'Salamanca',
    },
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.available_quantity,
        decimals: data.price
      },
      picture: data.pictures[0].url || FALLBACK_CONSTANTS.GENERIC_IMAGE,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: data.plain_text,
    }
  }
};
