import express from 'express';
import { itemsSearch, itemDetail } from '../controllers/itemController';

const itemRoutes = express.Router();

itemRoutes.get('/items', itemsSearch);
itemRoutes.get('/items/:id', itemDetail);

export default itemRoutes;