import { Router, Request, Response } from "express";

const router = Router(); 

router.get('/', (request: Request, response: Response) => {
    response.send("Página sobre a listagem de motos");
});

router.get('/modelos-listagem', (request: Request, response: Response)=>{
    response.send("Página sobre a listagem de modelos de motos");
});

export default router;