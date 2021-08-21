import { Request, Response } from 'express';

export const painel = (request: Request, response: Response) => {
    response.send("Home do painel");
};

export const noticias = (request: Request, response: Response) => {
    response.send("Lista de noticias cadastradas");
};