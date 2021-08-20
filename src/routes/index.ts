import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
    let idade: number = 66;
    let showOld: boolean = false;
    let car: string = request.query.car as string;
    let year: string = request.query.year as string;
    let fuel: string = request.query.fuel as string;

    if(idade > 50) {
        showOld = true;
    }



    response.render('pages/home', {
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
        ],
        car, 
        year,
        fuel,
    });
});

router.get('/contato', (request: Request, response: Response) => {
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
    
    response.render('pages/sobre', about);
});

router.get('/empresa', (request: Request, response: Response) => {

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
});

router.get('/nome', (request: Request, response: Response) => {
    
    //pegar qualquer dado depois do query string
    let nome: string = request.query.nome as string;
    let idade: string = request.query.idade as string;

    response.render('pages/nome', {
        nome,
        idade
    });
});


router.get('/idade', (request: Request, response: Response) => {

    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(request.query.ano) { 
        let anoNascimento: number = parseInt(request.query.ano as string);
        let anoAtual: number = new Date().getFullYear();

        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    response.render('pages/idade', {
        idade, 
        mostrarIdade
    });
});

export default router; 