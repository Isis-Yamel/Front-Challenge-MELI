import express, {Request, Response} from 'express';
import { itemsSearch, itemDetail } from '../controllers/itemController';
const itemRoutes = express.Router();

// midle man
const authenticateToken = (req: Request, res: Response, next: any) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)
  
  if (token === process.env.AUTH_TOKEN) next();
};

itemRoutes.get('/items', authenticateToken, itemsSearch);
itemRoutes.get('/items/:id', authenticateToken, itemDetail);

export default itemRoutes;