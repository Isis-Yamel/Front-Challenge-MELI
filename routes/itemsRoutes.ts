import express, { Response, NextFunction } from 'express';
import { itemsSearch, itemDetail } from '../controllers/itemController';
const itemRoutes = express.Router();
const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
dotenv.config();

// midleware for auth
function authenticateToken(req: any, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.AUTH_TOKEN, (err: any, user: any) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

itemRoutes.get('/items', authenticateToken, itemsSearch);
itemRoutes.get('/items/:id', itemDetail);

export default itemRoutes;