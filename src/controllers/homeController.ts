import {Request, Response} from 'express';

import { Product } from '../models/Product';

export const home = (request: Request, response: Response) => {
    let idade: number = 66;
    let showOld: boolean = false;
    let car: string = request.query.car as string;
    let year: string = request.query.year as string;
    let fuel: string = request.query.fuel as string;

    if(idade > 50) {
        showOld = true;
    }

    let productsList = Product.getAllProducts();
    let expensiveList = Product.getFromPriceAfter(10);
    
    response.render('pages/home', {
        name: 'Lucas',
        idade: 22,
        showOld, 
        products: productsList,
        expensiveProducts: expensiveList,
        frasesDoDia: [
            'Alguma coisa muito legal',
            'Outra frase qualquer'
        ],
        car, 
        year,
        fuel,
    });
}