import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { searchAPIFormatter } from './utils/APIFormatters';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', async (req: Request, res: Response) => {
  console.log('search for results');
});

app.get('/api/items/:query', async (req: Request, res: Response, next) => {
  const QUERY = req.params.query ? req.params.query : 'query';
  const URL = `https://api.mercadolibre.com/sites/MLA/search?q=:${QUERY}`;
 
	try {
		let response = await fetch(URL);
		response = await response.json() as any;

    const help = searchAPIFormatter(response);

		res.status(200).json(help);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
