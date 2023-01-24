import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const cors = require('cors')
import itemRoutes from './routes/itemsRoutes';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  console.log('search for results');
});

app.use('/api', itemRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
