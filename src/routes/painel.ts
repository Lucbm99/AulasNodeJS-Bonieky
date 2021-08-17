import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
    response.send("Home do painel");
});

router.get('/noticias', (request: Request, response: Response) => {
    response.send("Lista de noticias cadastradas");
});

export default router; 