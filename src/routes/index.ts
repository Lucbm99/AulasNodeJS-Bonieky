import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
    let idade: number = 66;
    let showOld: boolean = false;
    

    if(idade > 50) {
        showOld = true;
    }


    response.render('home', {
        name: 'Lucas',
        idade: 22,
        showOld, 
        products: [
            {title: 'Arroz', price: 10},
            {title: 'Feijao', price: 8},
            {title: 'Manga', price: 5}
        ], 
        frasesDoDia: [
            'Alguma coisa muito legal',
            'Outra frase qualquer'
        ]
    });
});

router.get('/contato', (request: Request, response: Response) => {
    let idade: number = 20;
    let podeBeber: boolean = false;

    if(idade >= 18) {
        podeBeber = true;
    }
    response.render('contato', {
        name: 'Lucas', 
        lastName: 'Baradel Marchiori',
        podeBeber,
        linguagens: [
            'C#', 'C++', 'Python', 'Scala', 'Ruby', 'PHP', 'Java'
        ]
    });
});

router.get('/sobre', (request: Request, response: Response) => {

    let tipoHamburguer: string = 'Vegetariano';
    let isVegan: boolean = false;

    if(tipoHamburguer === 'Vegetariano') {
        isVegan = true;
    }

    let about = {
        texto1: 'Eu estou visualizando a página sobre',
        texto2: 'E agora eu quero sair daqui!',
        isVegan,
        materiaisEscritorio: [
            {nome: 'Caneta', preco: 1.33},
            {nome: 'Apontador', preco: 2.45},
            {nome: 'Grampeador', preco: 28},
            {nome: 'Marca texto', preco: 3.43}
        ]
    }
    
    response.render('sobre', about);
});

router.get('/empresa', (request: Request, response: Response) => {
    response.send("Página sobre a empresa FFF");
});

export default router; 