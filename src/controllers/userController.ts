import {Request, Response} from 'express';

export const nome = (request: Request, response: Response) => {
    
    //pegar qualquer dado depois do query string
    let nome: string = request.query.nome as string;
    let idade: string = request.query.idade as string;

    response.render('pages/nome', {
        nome,
        idade
    });
}

export const idadeForm = (request: Request, response: Response) => {
    response.render('pages/idade');
}

export const idadeAction = (request: Request, response: Response) => {

    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(request.body.ano) { 
        let anoNascimento: number = parseInt(request.body.ano as string);
        let anoAtual: number = new Date().getFullYear();

        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    response.render('pages/idade', {
        idade, 
        mostrarIdade
    });
}