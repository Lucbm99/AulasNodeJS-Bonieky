import {Request, Response} from 'express';
import { Materials } from '../models/Materials';

export const contato = (request: Request, response: Response) => {
    let idade: number = 20;
    let podeBeber: boolean = false;

    if(idade >= 18) {
        podeBeber = true;
    }
    
    let nome: string = request.query.nome as string;
    let email: string = request.query.email as string;

    response.render('pages/contato', {
        name: 'Lucas', 
        lastName: 'Baradel Marchiori',
        podeBeber,
        linguagens: [
            'C#', 'C++', 'Python', 'Scala', 'Ruby', 'PHP', 'Java'
        ],
        nome,
        email
    });

};

export const sobre = (request: Request, response: Response) => {

    let tipoHamburguer: string = 'Vegetariano';
    let isVegan: boolean = false;

    //chamadas models
    let materials = Materials.getAllMaterials();
    let cheapMaterials = Materials.getCheapMaterials(10);

    if(tipoHamburguer === 'Vegetariano') {
        isVegan = true;
    }

    let about = {
        texto1: 'Eu estou visualizando a página sobre',
        texto2: 'E agora eu quero sair daqui!',
        isVegan,
        materiaisEscritorio: materials,
        cheapMateriais: cheapMaterials
    }
    
    response.render('pages/sobre', about);
};

export const empresa = (request: Request, response: Response) => {

    let time: string = 'Palmeiras';
    let isPalmeirense: boolean = false;

    if(time === 'Palmeiras') {
        isPalmeirense = true;
    }
    response.render('pages/empresa', {
        time: 'Palmeiras',
        estado: 'São Paulo',
        isPalmeirense,
        teams: [
            'Palmeiras',
            'Santos',
            'Guarani',
            'Ponte Preta',
            'Flamengo',
            'Brasiliense',
            'ABC',
            'Atlético-GO'
        ],
        materiasEscolares: [
            {nome: "Inglês", media: 9},
            {nome: "Filosofia", media: 8},
            {nome: "Sociologia", media: 10},
            {nome: "Artes", media: 6},
            {nome: "Geografia", media: 9},
        ]
    });
}