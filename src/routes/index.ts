import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
    response.render('home');
});

router.get('/contato', (request: Request, response: Response) => {
    response.send("Formulário de contato");
});

router.get('/sobre', (request: Request, response: Response) => {
    response.send("Página institucional sobre a empresa");
});

router.get('/empresa', (request: Request, response: Response) => {
    response.send("Página sobre a empresa FFF");
});

export default router; 