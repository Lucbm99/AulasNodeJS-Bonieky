import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (request: Request, response: Response) => {
    response.send("Aqui é a página inicial sobre os carros");
});

router.get('/listagem', (request: Request, response: Response) => {
    response.send("Aqui é a página de listagem dos carros");
});

router.get('/modelos', (request: Request, response: Response)=>{
    response.send("Aqui é a listagem de modelos de carros");
});

export default router;