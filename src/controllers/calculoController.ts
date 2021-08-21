import {Request, Response} from 'express';

export const calculoForm = (request: Request, response: Response) => {
    response.render('pages/quadrado');
}

export const calculoAction = (request: Request, response: Response) => {
    let quadrado: number = 0;
    let mostrarQuadrado: boolean = false; 

    if(request.body.valor) {
        let valor: number = parseInt(request.body.valor as string);

        quadrado = valor * valor;
        mostrarQuadrado = true;

    }
    response.render('pages/quadrado', {
        quadrado, 
        mostrarQuadrado
    });
}