import { Request, Response } from 'express';

export const motos = (request: Request, response: Response) => {
    response.send("Página sobre a listagem de motos");
}

export const listagemModelos = (request: Request, response: Response)=>{
    response.send("Página sobre a listagem de modelos de motos");
};
