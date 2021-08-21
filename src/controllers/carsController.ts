import { Request, Response } from 'express';

export const cars = (request: Request, response: Response) => {
    response.send("Aqui é a página inicial sobre os carros");
};

export const listagem = (request: Request, response: Response) => {
    response.send("Aqui é a página de listagem dos carros");
};

export const modelos = (request: Request, response: Response)=>{
    response.send("Aqui é a listagem de modelos de carros");
};

