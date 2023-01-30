import { Item, Items, ItemDetail, BreadItem } from '../types/itemTypes';
import { FALLBACK_CONSTANTS } from '../constants/constants';
import fetch from 'cross-fetch';

/* This function takes the results with the breadcrumb
  * return only the first 4
  * format the response
*/
const trimResults = (results: Array<Object>) => {
  return results.slice(0, 4).map((item: any): Item => ({ 
    id: item.id,
    breadCrumb: item.breadCrumb,
    title: item.title,
    price: item.price,
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }));
};

/* This function takes one argument
  * category (results) https://api.mercadolibre.com/sites/MLA/search?q=:query
  * make a fetch to https://api.mercadolibre.com/categories/MLA412445 for each result
  * 
  * format the response
*/ 
export const getBreadCrumb = async (category: any) => {
  return await Promise.all(category.map(async (element: any) => {
    const response = await (await fetch(`https://api.mercadolibre.com/categories/${element.category_id}`)).json() as any;

    return {
      category_id: response.id,
      breadCrumb: response.path_from_root,
    };
  }));
};

/* This function takes one argument
  * id (item id) https://api.mercadolibre.com/categories/MLA412445
  * return the breadcrumb for a single item
  * 
  * format the response
*/ 
export const getItemBreadCrumb = async (id: any) => {
  const response = await(await fetch(`https://api.mercadolibre.com/categories/${id}`)).json() as any;

  return {
    breadCrumb: response.path_from_root,
  };
};

/* This function takes two params
  * response (results) https://api.mercadolibre.com/sites/MLA/search?q=:query
  * breadcrumb (response) https://api.mercadolibre.com/categories/MLA412445
  * 
  * first index with results id
  * compare breadcrumb id with result category id and unifies them
*/ 
export const addBreadCrumb = (response: any, breadcrumb: any) => {
  let indexedRespose = response.reduce((accu : any, current: any) => {
    const id = current.id;
    if (!!accu[id]) accu[id] = {};
    accu[id] = current;

    breadcrumb.forEach((item: BreadItem) => {
      if (accu[id].category_id === item.category_id) {
        
        accu[id] = {
          ...accu[id],
          breadCrumb: item.breadCrumb,
        };
      }
    });
    
    return accu;
  }, {});

  return Object.values(indexedRespose);
}


/* Formater
  * route '/items/
  * 
*/ 
export const itemsFormatter = (data: any): Items => {
  return {
    author: {
      name: 'Isis',
      lastName: 'Salamanca',
    },
    items: trimResults(data),
  }
};

/* Formater
  * route '/items/:id
  * 
*/ 
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
      breadCrumb: data.breadCrumb,
    }
  }
};

/*
  * I decided to remove categories as I am not using it 
  * but filter function and types are provided
  * future improvement (?)
  const filterCategories = (categories: Array<Categories>) => {
    const category = categories.find((i) => i.id === 'category');
    return !!category ? category.values.map(i => i.name) : [FALLBACK_CONSTANTS.NO_CATEGORIES];
};
*/
