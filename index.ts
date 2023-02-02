import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const cors = require('cors')
const jwt = require('jsonwebtoken');
import itemRoutes from './routes/itemsRoutes';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.redirect(301, '/login');
});

app.post('/login', (req: Request, res: Response) => {
  const data = req.body.author;
  const user = {
    name: data.name,
    lastName: data.lastName
  }

  const accessToken = jwt.sign(user, process.env.AUTH_TOKEN);
  res.json({ token: accessToken });
});

app.use('/api', itemRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
