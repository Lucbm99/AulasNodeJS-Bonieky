import express, {Request, Response} from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
    response.send('Olá mundo');
})

app.listen(3000);

