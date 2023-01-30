import express, { Request, Response } from 'express';
import { itemsFormatter, itemFormatter, getBreadCrumb, getItemBreadCrumb, addBreadCrumb } from '../utils/APIFormatters';
import { FALLBACK_CONSTANTS } from '../constants/constants';
import fetch from 'cross-fetch';

export const itemsSearch = async (req: Request, res: Response) => {
  const QUERY = req.query.q ? req.query.q : 'query';
  const URL = `https://api.mercadolibre.com/sites/MLA/search?q=:${QUERY}`;
  
  try {
    let response = await (await fetch(URL)).json() as any;
    let responseBreadCrumb = await getBreadCrumb(response.results);

    let responseWithBreadcrumb = addBreadCrumb(response.results, responseBreadCrumb);
    const formatData = itemsFormatter(responseWithBreadcrumb);

    res.status(200).json(formatData);
  } catch (err) {
    console.log(err);
    res.status(500).json({msg: FALLBACK_CONSTANTS.ERROR});
  }
};

export const itemDetail = async (req: Request, res: Response) => {
  const ID = req.params.id ? req.params.id : 'query';
  const URL = `https://api.mercadolibre.com/items/${ID}`;
  const URL_DESCRIPTION = `https://api.mercadolibre.com/items/${ID}/description`;
  
  try {
    let response = await fetch(URL);
    let responseDescription = await fetch(URL_DESCRIPTION);

    const [item, itemDescription] = await Promise.all([response, responseDescription])
      .then(values => Promise.all(values.map(value => value.json())));

    const breadcrumb = await getItemBreadCrumb(item.category_id)

    const itemResponse = Object.assign({}, item, itemDescription, breadcrumb);
    const formatData = itemFormatter(itemResponse);

    res.status(200).json(formatData);
  } catch (err) {
    console.log(err);
    res.status(500).json({msg: FALLBACK_CONSTANTS.ERROR});
  }
};